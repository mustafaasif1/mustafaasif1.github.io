import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { t } = useTranslation();

	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li
							className={
								active === "home"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/">{t("nav.home")}</Link>
						</li>
						<li
							className={
								active === "about"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/about">{t("nav.about")}</Link>
						</li>
						<li
							className={
								active === "projects"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/projects">{t("nav.projects")}</Link>
						</li>
						<li
							className={
								active === "articles"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/articles">{t("nav.articles")}</Link>
						</li>
						<li
							className={
								active === "contact"
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to="/contact">{t("nav.contact")}</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
