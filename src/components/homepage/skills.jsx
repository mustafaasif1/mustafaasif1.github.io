import React from "react";
import { useTranslation } from "react-i18next";
import { faAward } from "../../utils/icons";
import Card from "../common/card";
import TechIcon from "../common/TechIcon";
import { LOGOS } from "../../data/user";
import "./styles/skills.css";

const Skills = () => {
	const { t } = useTranslation();

	// Only skills that have a logo in public/assets/images/logos/tech/
	const skillsData = {
		frontend: [
			{ name: "React", logo: LOGOS.REACT },
			{ name: "Next.js", logo: LOGOS.NEXTJS },
			{ name: "TypeScript", logo: LOGOS.TYPESCRIPT },
			{ name: "JavaScript", logo: LOGOS.JAVASCRIPT },
			{ name: "Angular", logo: LOGOS.ANGULAR },
			{ name: "HTML", logo: LOGOS.HTML },
			{ name: "CSS", logo: LOGOS.CSS },
			{ name: "Tailwind CSS", logo: LOGOS.TAILWIND },
			{ name: "Shadcn UI", logo: LOGOS.SHADCN },
			{ name: "Redux", logo: LOGOS.REDUX },
			{ name: "Zustand", logo: LOGOS.ZUSTAND },
			{ name: "Vite", logo: LOGOS.VITE },
		],
		backend: [
			{ name: "Node.js", logo: LOGOS.JAVASCRIPT },
			{ name: "Spring Boot", logo: LOGOS["SPRING-BOOT"] },
			{ name: "PostgreSQL", logo: LOGOS.POSTGRESQL },
			{ name: "MongoDB", logo: LOGOS.MONGODB },
			{ name: "GraphQL", logo: LOGOS.GRAPHQL },
			{ name: "Prisma", logo: LOGOS.PRISMA },
			{ name: "Supabase", logo: LOGOS.SUPABASE },
			{ name: "Firebase", logo: LOGOS.FIREBASE },
		],
		cloud: [
			{ name: "Docker", logo: LOGOS.DOCKER },
			{ name: "Kubernetes", logo: LOGOS.KUBERNETES },
			{ name: "Vercel", logo: LOGOS.VERCEL },
			{ name: "Railway", logo: LOGOS.RAILWAY },
			{ name: "GitHub Actions", logo: LOGOS.GITHUB_ACTIONS },
			{ name: "GitLab", logo: LOGOS.GITLAB },
			{ name: "Heroku", logo: LOGOS.HEROKU },
		],
		mobile: [
			{ name: "React Native", logo: LOGOS.REACT },
			{ name: "Flutter", logo: LOGOS.FLUTTER },
		],
		design: [
			{ name: "Figma", logo: LOGOS.FIGMA },
			{ name: "Mural", logo: LOGOS.MURAL },
			{ name: "Balsamiq", logo: LOGOS.BALSAMIQ },
		],
		ai: [
			{ name: "AI SDK", logo: LOGOS.AI_SDK },
			{ name: "Mastra", logo: LOGOS.MASTRA },
			{ name: "LangGraph", logo: LOGOS.LANGGRAPH },
			{ name: "LangSmith", logo: LOGOS.LANGSMITH },
			{ name: "Langfuse", logo: LOGOS.LANGFUSE },
		],
	};

	// Certifications data
	const certificationsData = [
		// Add your certifications here
	];

	return (
		<div className="p-2">
			<Card
				icon={faAward}
				title={t("skills.title")}
				body={
					<div>
						{/* Skills Section - Two column layout on larger screens */}
						<div className="skills-section">
							<div className="skills-container">
								{Object.entries(skillsData).map(
									([category, skills]) => (
										<div
											key={category}
											className="skill-category"
										>
											<h4 className="skill-category-title">
												{t(
													`skills.categories.${category}`,
												)}
											</h4>
											<div className="skills-grid">
												{skills.map((skill, index) => (
													<TechIcon
														key={index}
														src={skill.logo.image}
														name={skill.name}
														className="skill-item"
													/>
												))}
											</div>
										</div>
									),
								)}
							</div>
						</div>

						{certificationsData.length > 0 && (
							<div className="certifications-section">
								<h4 className="skill-category-title">
									{t("skills.certifications.title")}
								</h4>
								<div className="certifications-list">
									{certificationsData.map((cert, index) => (
										<div
											key={index}
											className="certification-item"
										>
											<div className="flex-grow">
												<div className="text-md font-medium text-secondary pb-1">
													{cert.link ? (
														<a
															href={cert.link}
															target="_blank"
															rel="noopener noreferrer"
															className="text-link"
														>
															{cert.name}
														</a>
													) : (
														cert.name
													)}
												</div>
												<div className="text-xs text-secondary">
													{cert.issuer} • {cert.date}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
