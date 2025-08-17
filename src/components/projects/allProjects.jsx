import React from "react";
import INFO from "../../data/user";
import Project from "./project";

const AllProjects = () => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-5">
		{INFO.projects.map((project, index) => (
			<div key={index}>
				<Project
					title={project.title}
					description={project.description}
					linkText={project.linkText}
					link={project.link}
					technologies={project.technologies}
				/>
			</div>
		))}
	</div>
);

export default AllProjects;
