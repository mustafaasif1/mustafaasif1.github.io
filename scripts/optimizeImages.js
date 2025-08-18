const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Configuration
const QUALITY = {
	jpeg: 85, // Higher quality for logos and photos
	webp: 80, // Good compression while maintaining quality
	png: 85, // For when we need to keep PNG format
};

const SIZES = {
	sm: 640, // Mobile devices
	md: 1024, // Tablets and small laptops
	lg: 1920, // Desktop and large screens
};

const INPUT_DIR = path.join(__dirname, "../public/assets/images");
const OUTPUT_DIR = path.join(__dirname, "../public/assets/optimized");
const PROCESSED_LOG = path.join(
	__dirname,
	"../public/assets/processed-images.json",
);

// Image categories and their paths
const IMAGE_CATEGORIES = {
	icons: "icons",
	logos: {
		companies: "logos/companies",
		education: "logos/education",
		tech: "logos/tech",
	},
	photos: {
		profile: "photos/profile",
		team: "photos/team",
	},
};

async function ensureDirectoryExists(dir) {
	try {
		await fs.access(dir);
	} catch {
		await fs.mkdir(dir, { recursive: true });
	}
}

async function getProcessedImages() {
	try {
		const data = await fs.readFile(PROCESSED_LOG, "utf8");
		return JSON.parse(data);
	} catch {
		return {};
	}
}

async function saveProcessedImages(processed) {
	await fs.writeFile(PROCESSED_LOG, JSON.stringify(processed, null, 2));
}

async function optimizeImage(inputPath, outputPath, width) {
	const ext = path.extname(inputPath).toLowerCase();
	const metadata = await sharp(inputPath).metadata();

	// Don't enlarge images beyond their original size
	const targetWidth = Math.min(width, metadata.width);

	const pipeline = sharp(inputPath).resize(targetWidth, null, {
		withoutEnlargement: true,
		fit: "inside",
	});

	// Special handling for logos (if in logos directory)
	if (inputPath.includes("/logos/")) {
		pipeline.flatten({ background: { r: 255, g: 255, b: 255 } }); // White background for logos
	}

	// Generate both WebP and original format for maximum compatibility
	const baseOutputPath = outputPath.replace(/\.[^.]+$/, "");

	// Always create WebP version for best compression
	await pipeline
		.clone()
		.webp({ quality: QUALITY.webp })
		.toFile(`${baseOutputPath}.webp`);

	// Keep original format as fallback
	if (ext === ".png") {
		await pipeline.clone().png({ quality: QUALITY.png }).toFile(outputPath);
	} else if (ext === ".jpg" || ext === ".jpeg") {
		await pipeline
			.clone()
			.jpeg({
				quality: QUALITY.jpeg,
				mozjpeg: true,
				chromaSubsampling: "4:4:4",
			})
			.toFile(outputPath);
	} else {
		await pipeline.toFile(outputPath);
	}
}

async function processImage(inputPath, category) {
	const filename = path.basename(inputPath);

	try {
		const stats = await fs.stat(inputPath);
		const lastModified = stats.mtime.toISOString();

		// Check if image was already processed and hasn't changed
		const processed = await getProcessedImages();
		if (
			processed[inputPath] &&
			processed[inputPath].lastModified === lastModified
		) {
			console.log(`Skipping ${filename} - already processed`);
			return;
		}

		// Check if it's an image file
		if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(filename)) {
			console.log(`Skipping ${filename} - not a supported image format`);
			return;
		}

		console.log(`Processing ${filename}...`);

		for (const [size, width] of Object.entries(SIZES)) {
			const outputDir = path.join(OUTPUT_DIR, category, size);
			await ensureDirectoryExists(outputDir);

			const outputPath = path.join(outputDir, filename);
			await optimizeImage(inputPath, outputPath, width);
		}

		// Update processed images log
		processed[inputPath] = {
			lastModified,
			category,
			sizes: Object.keys(SIZES),
			formats: ["original", "webp"], // Track generated formats
		};
		await saveProcessedImages(processed);

		console.log(`✓ Successfully processed ${filename}`);
	} catch (error) {
		console.error(`Error processing ${filename}:`, error.message);
		// Continue with other images even if one fails
	}
}

async function processCategory(categoryPath, outputCategory) {
	try {
		const entries = await fs.readdir(categoryPath, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(categoryPath, entry.name);

			if (entry.isDirectory()) {
				// Recursively process subdirectories
				await processCategory(
					fullPath,
					path.join(outputCategory, entry.name),
				);
			} else if (
				entry.isFile() &&
				/\.(jpg|jpeg|png|gif)$/i.test(entry.name)
			) {
				await processImage(fullPath, outputCategory);
			}
		}
	} catch (error) {
		console.error(
			`Error processing category ${categoryPath}:`,
			error.message,
		);
	}
}

async function main() {
	try {
		// Ensure output directory exists
		await ensureDirectoryExists(OUTPUT_DIR);

		// Process each category
		for (const [category, subPath] of Object.entries(IMAGE_CATEGORIES)) {
			console.log(`Processing category: ${category}`);

			if (typeof subPath === "string") {
				const categoryPath = path.join(INPUT_DIR, subPath);
				await processCategory(categoryPath, subPath);
			} else {
				// Handle nested categories
				for (const [subCategory, subCategoryPath] of Object.entries(
					subPath,
				)) {
					const fullPath = path.join(INPUT_DIR, subCategoryPath);
					console.log(`Processing subcategory: ${subCategory}`);
					await processCategory(fullPath, subCategoryPath);
				}
			}
		}

		console.log("Image optimization completed successfully!");
	} catch (error) {
		console.error("Error during image optimization:", error);
		process.exit(1);
	}
}

main();
