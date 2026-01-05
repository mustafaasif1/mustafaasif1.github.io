import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import INFO from "../../data/user";
import {
	faEnvelope,
	faGithub,
	faLinkedin,
} from "../../utils/icons";

import "./styles/socials.css";

const Socials = () => {
	const { t } = useTranslation();

	return (
		<div className="socials">
			<div className="socials-list">
				<a
					href={INFO.socials.github}
					target="_blank"
					rel="noreferrer"
					className="social-item"
					aria-label={t("about.socials.github")}
				>
					<FontAwesomeIcon icon={faGithub} className="social-icon" />
				</a>

				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					className="social-item"
					aria-label={t("about.socials.linkedin")}
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="social-icon"
					/>
				</a>

				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
					className="social-item"
					aria-label={t("about.socials.email")}
				>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="social-icon"
					/>
				</a>
			</div>
		</div>
	);
};

export default Socials;
