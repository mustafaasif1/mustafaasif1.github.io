import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "../../utils/icons";
import Card from "../common/card";
import INFO from "../../data/user";
import "./styles/githubActivity.css";

const GitHubActivity = () => {
	const { t } = useTranslation();
	const [theme, setTheme] = useState("dark");
	const [isMobile, setIsMobile] = useState(false);

	// Extract username from GitHub URL
	const githubUsername = INFO.socials.github.split("/").pop();

	// Detect current theme and screen size
	useEffect(() => {
		const updateTheme = () => {
			const currentTheme =
				document.documentElement.getAttribute("data-theme") || "dark";
			setTheme(currentTheme);
		};

		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		updateTheme();
		checkMobile();

		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme"],
		});

		window.addEventListener("resize", checkMobile);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	// Get colors based on theme
	const getGraphColors = () => {
		if (theme === "dark") {
			return {
				bg: "18181b", // --background-color dark - exact match (#18181b)
				text: "a1a1aa", // --secondary-color dark (softer than primary, matches website style)
				grid: "18181b", // Same as background to hide grid lines
				line: "248f8b", // --link-color dark
				point: "3f9d9a", // --link-color light (brighter for points)
				area: "248f8b33", // --link-color dark with transparency
			};
		} else {
			return {
				bg: "ffffff", // --background-color light - exact match (#ffffff)
				text: "65656d", // --secondary-color light (softer than primary, matches website style)
				grid: "ffffff", // Same as background to hide grid lines
				line: "3f9d9a", // --link-color light
				point: "3f9d9a", // --link-color light
				area: "3f9d9a33", // --link-color light with transparency
			};
		}
	};

	const colors = getGraphColors();
	// Use compact graph on mobile for better fit
	const graphHeight = isMobile ? "200" : "300";
	// Note: 'color' parameter controls text color, not grid color
	// Hide title by not including custom_title parameter
	const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=${colors.bg}&color=${colors.text}&line=${colors.line}&point=${colors.point}&area=${colors.area}&area_color=${colors.area}&hide_border=true&height=${graphHeight}`;

	return (
		<div className="p-2">
			<Card
				icon={faGithub}
				title={t("githubActivity.title")}
				body={
					<div className="github-activity-container">
						{/* Contributions Graph */}
						<div className="github-contributions">
							<div className="github-contributions-header">
								<h4 className="github-section-title">
									{t("githubActivity.contributions")}
								</h4>
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noopener noreferrer"
									className="github-profile-link-text"
									aria-label={t("githubActivity.viewProfile")}
								>
									<FontAwesomeIcon icon={faGithub} />
									<span>
										{t("githubActivity.viewOnGitHub")}
									</span>
								</a>
							</div>
							<div className="github-contributions-graph-wrapper">
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noopener noreferrer"
									className="github-graph-link"
									aria-label={t(
										"githubActivity.contributionsAlt",
									)}
								>
									<div className="github-contributions-graph">
										<img
											src={graphUrl}
											alt={t(
												"githubActivity.contributionsAlt",
											)}
											loading="lazy"
											onError={(e) => {
												// Fallback to GitHub's native contribution graph
												e.target.src = `https://github.com/users/${githubUsername}/contributions`;
											}}
										/>
									</div>
								</a>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default GitHubActivity;
