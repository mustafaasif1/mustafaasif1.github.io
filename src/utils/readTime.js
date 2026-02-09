/**
 * Estimate reading time in minutes from markdown/HTML content.
 * Uses ~200 words per minute as average reading speed.
 * @param {string} content - Raw markdown or HTML string
 * @returns {number} Estimated minutes to read (minimum 1)
 */
export function getReadTimeMinutes(content) {
	if (!content || typeof content !== "string") return 1;
	const stripped = content
		.replace(/<[^>]+>/g, " ")
		.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
		.replace(/[#*_~`]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
	const wordCount = stripped ? stripped.split(" ").filter(Boolean).length : 0;
	const minutes = Math.ceil(wordCount / 200);
	return Math.max(1, minutes);
}
