import React, { memo } from "react";

const ResponsiveImage = memo(({ src, alt, className, sizes = "100vw" }) => {
	// Extract path information
	const ext = src.split(".").pop().toLowerCase();
	const filename = src
		.substring(src.lastIndexOf("/") + 1)
		.replace(`.${ext}`, "");

	// Construct base path for optimized images
	const optimizedPath = `/optimised/${filename}`;

	// Define responsive sizes based on image type
	const imageSizes = [640, 960, 1280];

	// Generate srcSet for both WebP and original format
	const generateSrcSet = (format) => {
		const srcSet = [];

		imageSizes.forEach((size) => {
			srcSet.push(`${optimizedPath}-${size}.${format} ${size}w`);
		});
		// Add the original size
		srcSet.push(`${optimizedPath}.${format} 1920w`);

		return srcSet.join(", ");
	};

	// Helper function to get MIME type
	const getMimeType = (extension) => {
		switch (extension) {
			case "jpg":
			case "jpeg":
				return "image/jpeg";
			case "png":
				return "image/png";
			case "gif":
				return "image/gif";
			default:
				return `image/${extension}`;
		}
	};

	return (
		<picture>
			{/* WebP sources - always provide WebP as first option */}
			<source
				type="image/webp"
				srcSet={generateSrcSet("webp")}
				sizes={sizes}
			/>

			{/* Original format sources */}
			<source
				type={getMimeType(ext)}
				srcSet={generateSrcSet(ext)}
				sizes={sizes}
			/>

			{/* Fallback image - use optimized version */}
			<img
				src={`${optimizedPath}.${ext}`}
				alt={alt}
				className={className}
				loading="lazy"
				decoding="async" // Add async decoding for better performance
			/>
		</picture>
	);
});

export default ResponsiveImage;
