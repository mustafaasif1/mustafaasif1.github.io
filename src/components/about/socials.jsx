import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import INFO from "../../data/user";
import {
	faEnvelope,
	faGithub,
	faLinkedin,
	faInstagram,
} from "../../utils/icons";

import "./styles/socials.css";

const Socials = () => (
	<div className="socials">
		<div className="socials-list">
			<a
				href={INFO.socials.github}
				target="_blank"
				rel="noreferrer"
				className="social-item"
			>
				<FontAwesomeIcon icon={faGithub} className="social-icon" />
			</a>

			<a
				href={INFO.socials.linkedin}
				target="_blank"
				rel="noreferrer"
				className="social-item"
			>
				<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
			</a>

			<a
				href={INFO.socials.instagram}
				target="_blank"
				rel="noreferrer"
				className="social-item"
			>
				<FontAwesomeIcon icon={faInstagram} className="social-icon" />
			</a>

			<a
				href={`mailto:${INFO.main.email}`}
				target="_blank"
				rel="noreferrer"
				className="social-item"
			>
				<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
			</a>
		</div>
	</div>
);

export default Socials;
