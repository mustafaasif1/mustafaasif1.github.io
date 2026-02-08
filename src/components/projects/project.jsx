import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faLink, faBookOpen } from "../../utils/icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, link, articleLink, technologies } = props;
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const { t } = useTranslation();

	return (
		<div className="project">
			<div className="project-container">
				<div className="flex space-x-1">
					{technologies.map((tech, index) => (
						<div
							key={index}
							className="relative"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<img
								src={tech.image}
								alt={tech.link}
								className="w-8 h-8 object-contain rounded-full border border-quaternary shadow-sm bg-white"
								loading="lazy"
							/>
							{hoveredIndex === index && (
								<div className="absolute -top-8 -left-2 rounded-md p-2 bg-slate-100 pb-1">
									<p className="text-[10px] w-full whitespace-nowrap">
										{tech.link}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="project-title">
					{t(`projects.projectDetails.${title}.title`)}
				</div>
				<div className="text-sm">
					{t(`projects.projectDetails.${title}.description`)}
				</div>
				<div className="project-links">
					{link && (
						link.startsWith("http") ? (
							<a
								href={link}
								target="_blank"
								rel="noreferrer"
								className="project-link-wrapper"
							>
								<div className="project-link">
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>
									<div className="project-link-text">
										{t(`projects.projectDetails.${title}.linkText`)}
									</div>
								</div>
							</a>
						) : (
							<Link to={link}>
								<div className="project-link">
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>
									<div className="project-link-text">
										{t(`projects.projectDetails.${title}.linkText`)}
									</div>
								</div>
							</Link>
						)
					)}
					{articleLink && (
						<Link to={articleLink} className="project-link-wrapper">
							<div className="project-link project-link-article">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faBookOpen} />
								</div>
								<div className="project-link-text">
									{t("projects.readArticle")}
								</div>
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
