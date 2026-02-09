import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faLink, faBookOpen } from "../../utils/icons";
import TechIcon from "../common/TechIcon";

import "./styles/project.css";

const Project = (props) => {
	const { title, link, articleLink, technologies } = props;
	const { t } = useTranslation();

	return (
		<div className="project">
			<div className="project-container">
				<div className="project-tech-icons">
					{technologies.map((tech, index) => (
						<TechIcon
							key={index}
							src={tech.image}
							name={tech.link}
							className="project-tech-icon"
						/>
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
