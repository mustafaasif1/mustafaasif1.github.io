const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Configuration
const QUALITY = 80; // Default quality for JPEG/WebP
const SIZES = {
	sm: 640,
	md: 1024,
	lg: 1920,
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
	const pipeline = sharp(inputPath).resize(width, null, {
		withoutEnlargement: true,
		fit: "inside",
	});

	// Convert PNG to WebP for better compression, keep other formats as is
	if (ext === ".png") {
		await pipeline
			.webp({ quality: QUALITY })
			.toFile(outputPath.replace(".png", ".webp"));
	} else if (ext === ".jpg" || ext === ".jpeg") {
		await pipeline.jpeg({ quality: QUALITY }).toFile(outputPath);
	} else {
		await pipeline.toFile(outputPath);
	}
}

async function processImage(inputPath, category) {
	const filename = path.basename(inputPath);
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
	};
	await saveProcessedImages(processed);
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
