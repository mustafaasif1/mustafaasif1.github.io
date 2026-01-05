import React from "react";
import { useTranslation } from "react-i18next";
import { faBriefcase } from "../../utils/icons";
import Card from "../common/card";
import OptimizedImage from "../common/optimizedImage";

const Works = () => {
	const { t } = useTranslation();

	const workData = [
		{
			id: "commercetools",
			image: "/assets/images/logos/companies/commercetools.jpeg",
			alt: "Full Stack Software Engineer at commercetools",
			subtitle: "commercetools",
			link: "https://commercetools.com/",
			positions: [
				{
					id: "commercetools-fulltime",
					title: "Full Stack Software Engineer",
					type: "Full-time",
					duration: "July 2025 - Present",
				},
				{
					id: "commercetools-workingstudent",
					title: "Full Stack Software Engineer (Working Student)",
					type: "Working Student",
					duration: "June 2024 - June 2025",
				},
			],
		},
		{
			id: "tum",
			image: "/assets/images/logos/education/tum.png",
			alt: "Full Stack Software Engineer (Student Assistant) at TUM",
			title: "Full Stack Software Engineer (Student Assistant)",
			subtitle: "Technical University of Munich",
			type: "Part-time",
			duration: "Apr 2023 - June 2024",
			link: "https://www.tum.de/en/",
		},
		{
			id: "ease",
			image: "/assets/images/logos/companies/ease.png",
			alt: "Front-end Software Engineer at Ease",
			title: "Front-end Software Engineer",
			subtitle: "ease",
			type: "Interdisciplinary Project (IDP)",
			duration: "Oct 2023 - Mar 2024",
			link: "https://ease.day/",
		},
		{
			id: "laFamiglia",
			image: "/assets/images/logos/companies/lafamiglia.jpeg",
			alt: "Front-end Software Engineer at La Famiglia",
			title: "Front-end Software Engineer",
			subtitle: "La Famiglia",
			type: "Practical Course",
			duration: "Oct 2023 - Jan 2024",
			link: "https://www.lafamiglia.vc/",
		},
		{
			id: "motive",
			image: "/assets/images/logos/companies/motive1.jpeg",
			alt: "Software Engineer at Motive",
			title: "Software Engineer",
			subtitle: "Motive",
			type: "Full-time",
			duration: "Jun 2022 - Sep 2022",
			link: "https://gomotive.com/",
		},
		{
			id: "arbisoft",
			image: "/assets/images/logos/companies/arbisoft.png",
			alt: "Software Engineer at Arbisoft",
			title: "Software Engineer",
			subtitle: "Arbisoft",
			type: "Full-time",
			duration: "Jun 2021 - Jun 2022",
			link: "https://arbisoft.com/",
		},
		{
			id: "laam",
			image: "/assets/images/logos/companies/laam.png",
			alt: "Software Engineer Intern at Laam",
			title: "Software Engineer Intern",
			subtitle: "LAAM",
			type: "Internship",
			duration: "Feb 2021 - May 2021",
			link: "https://laam.pk/",
		},
	];

	return (
		<div className="p-2">
			<Card
				icon={faBriefcase}
				title={t("experience.title")}
				body={
					<div>
						{workData.map((work, index) => {
							// Handle entries with multiple positions (e.g., commercetools)
							if (work.positions && work.positions.length > 0) {
								return (
									<div className="flex pb-6" key={index}>
										<OptimizedImage
											src={work.image}
											alt={work.alt}
											className="h-10 w-10 rounded-full border shadow-md object-contain bg-white"
											style={{
												borderColor:
													"var(--quaternary-color)",
											}}
											loading="lazy"
										/>
										<div className="flex-grow pl-5">
											{work.positions.map((position, posIndex) => {
												const positionData = t(
													`experience.positions.${position.id}`,
													{ returnObjects: true },
												);
												return (
													<div
														key={posIndex}
														className={posIndex > 0 ? "pt-3" : ""}
													>
														<div className="text-md font-medium text-secondary pb-1">
															{positionData?.title || position.title} at{" "}
															<a
																href={work.link}
																className="text-link"
																target="_blank"
																rel="noopener noreferrer"
															>
																{work.subtitle}
															</a>
														</div>
														<div className="flex justify-between text-xs text-secondary">
															<div className="mr-4">
																{positionData?.type || position.type}
															</div>
															<div>
																{positionData?.period || position.duration}
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								);
							}
							// Handle single position entries (existing format)
							const position = t(
								`experience.positions.${work.id}`,
								{ returnObjects: true },
							);
							return (
								<div className="flex pb-6" key={index}>
									<OptimizedImage
										src={work.image}
										alt={work.alt}
										className="h-10 w-10 rounded-full border shadow-md object-contain bg-white"
										style={{
											borderColor:
												"var(--quaternary-color)",
										}}
										loading="lazy"
									/>
									<div className="flex-grow pl-5">
										<div className="text-md font-medium text-secondary pb-1">
											{position?.title || work.title} at{" "}
											<a
												href={work.link}
												className="text-link"
												target="_blank"
												rel="noopener noreferrer"
											>
												{work.subtitle}
											</a>
										</div>
										<div className="flex justify-between text-xs text-secondary">
											<div className="mr-4">
												{position?.type || work.type}
											</div>
											<div>{position?.period || work.duration}</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
