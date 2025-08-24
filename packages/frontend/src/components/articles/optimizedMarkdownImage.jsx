import React from "react";

const OptimizedMarkdownImage = ({ src, alt }) => {
	return (
		<div className="w-full h-auto">
			<img
				src={src}
				alt={alt || "Article image"}
				className="w-full h-auto rounded-lg shadow-md"
				loading="lazy"
			/>
		</div>
	);
};

export default OptimizedMarkdownImage;
