import React, { useState } from "react";
import "./styles/techIcon.css";

/**
 * Shared technology/logo icon used in Skills grid and Project cards.
 * @param {string} src - Image URL (e.g. from LOGOS[].image)
 * @param {string} name - Name for alt text and tooltip (e.g. "React", "MongoDB")
 * @param {string} [className] - Optional class for the wrapper (e.g. "skill-item", "project-tech-icon")
 */
const TechIcon = ({ src, name, className = "" }) => {
	const [showFallback, setShowFallback] = useState(false);
	const displayName = name || "";
	const fallbackLetter = displayName.charAt(0) || "?";

	return (
		<div
			className={`tech-icon-wrapper ${className}`.trim()}
			data-tooltip={displayName}
			aria-label={displayName}
		>
			<div className="tech-icon-inner">
				{!showFallback && (
					<img
						src={src}
						alt={displayName}
						className="tech-icon-img"
						loading="lazy"
						onError={() => setShowFallback(true)}
					/>
				)}
				<div
					className="tech-icon-fallback"
					hidden={!showFallback}
					aria-hidden={!showFallback}
				>
					{fallbackLetter}
				</div>
			</div>
		</div>
	);
};

export default TechIcon;
