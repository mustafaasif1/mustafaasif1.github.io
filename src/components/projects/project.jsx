import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../common/optimizedImage";
import { faLink } from "../../utils/icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, linkText, link, technologies } = props;
	const [hoveredIndex, setHoveredIndex] = useState(null);

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
							<OptimizedImage
								src={tech.image}
								alt={tech.link}
								className="w-8 h-8 object-contain rounded-full border border-quaternary shadow-sm"
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
				<div className="project-title">{title}</div>
				<div className="text-sm">{description}</div>
				<Link to={link}>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Project;
