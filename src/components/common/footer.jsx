import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles/footer.css";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div className="footer">
			<div className="footer-links">
				<nav aria-label={t("footer.aria.navigation")}>
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{t("nav.home")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{t("nav.about")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{t("nav.projects")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">{t("nav.articles")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{t("nav.contact")}</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div
				className="footer-credits"
				aria-label={t("footer.aria.copyright")}
			>
				<div className="footer-credits-text">
					{t("footer.copyright", { year: new Date().getFullYear() })}
				</div>
			</div>
		</div>
	);
};

export default Footer;
