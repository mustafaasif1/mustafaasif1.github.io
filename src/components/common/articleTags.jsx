import React from "react";
import "./styles/articleTags.css";

const ArticleTags = ({ tags = [], className = "" }) => {
	if (!tags.length) {
		return null;
	}

	return (
		<div className={`article-tags ${className}`.trim()}>
			{tags.map((tag) => (
				<span key={tag} className="article-tag">
					{tag}
				</span>
			))}
		</div>
	);
};

export default ArticleTags;
