const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const LOGOS_DIR = path.join(__dirname, "../public/assets/images/logos");
const CATEGORIES = ["companies", "education", "tech"];

async function processImage(inputPath) {
	const ext = path.extname(inputPath).toLowerCase();
	if (![".png", ".jpeg", ".jpg"].includes(ext)) {
		console.log(`Skipping ${inputPath} - not a supported image`);
		return;
	}

	try {
		// For JPEGs, create a temp file first
		const isJpeg = [".jpeg", ".jpg"].includes(ext);
		const tempPath = isJpeg
			? inputPath.replace(/\.(jpeg|jpg)$/i, "_temp.jpeg")
			: inputPath.replace(/\.png$/i, ".jpeg");
		const finalPath = inputPath.replace(/\.(png|jpeg|jpg)$/i, ".jpeg");

		// Get original image metadata
		const metadata = await sharp(inputPath).metadata();

		await sharp(inputPath)
			.flatten({ background: { r: 255, g: 255, b: 255 } }) // Flatten with white background
			.jpeg({
				quality: 100,
				mozjpeg: true,
				chromaSubsampling: "4:4:4",
				background: { r: 255, g: 255, b: 255, alpha: 1 },
			})
			.resize({
				width: metadata.width,
				height: metadata.height,
				fit: "contain",
				background: { r: 255, g: 255, b: 255, alpha: 1 },
			})
			.toFile(tempPath);

		// If processing was successful
		if (isJpeg) {
			// For JPEGs, replace original with optimized version
			await fs.unlink(inputPath);
			await fs.rename(tempPath, finalPath);
		} else {
			// For PNGs, delete the original
			await fs.unlink(inputPath);
		}

		console.log(`Processed: ${finalPath}`);
	} catch (error) {
		console.error(`Error processing ${inputPath}:`, error);
	}
}

async function processDirectory(categoryPath) {
	try {
		const files = await fs.readdir(categoryPath);

		for (const file of files) {
			const filePath = path.join(categoryPath, file);
			const stat = await fs.stat(filePath);

			if (stat.isFile()) {
				await processImage(filePath);
			}
		}
	} catch (error) {
		console.error(`Error processing directory ${categoryPath}:`, error);
	}
}

async function main() {
	for (const category of CATEGORIES) {
		const categoryPath = path.join(LOGOS_DIR, category);
		console.log(`Processing ${category} logos...`);
		await processDirectory(categoryPath);
	}
}

main().catch(console.error);
