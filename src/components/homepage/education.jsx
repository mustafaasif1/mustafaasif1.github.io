import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="p-2">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="education-body">
						<div className="education">
							<img
								src="./facebook.png"
								alt="facebook"
								className="education-image"
							/>
							<div className="education-title">Facebook</div>
							<div className="education-subtitle">
								Software Engineer
							</div>
							<div className="education-duration">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
