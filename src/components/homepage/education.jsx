import React from "react";
import { useTranslation } from "react-i18next";
import { faSchool } from "../../utils/icons";
import Card from "../common/card";
import OptimizedImage from "../common/optimizedImage";

const Education = () => {
	const { t } = useTranslation();

	const educationData = [
		{
			id: "tum",
			image: "/assets/images/logos/education/tum.png",
			alt: "Technical University of Munich",
			title: "Technical University of Munich",
			subtitle: "Master of Science (M.Sc.), Informatik",
			duration: "Oct 2022 - Sep 2025",
			thesis: "Multi-Agent Large Language Model for Software Vulnerability Detection",
		},
		{
			id: "lums",
			image: "/assets/images/logos/education/LUMS.png",
			alt: "Lahore University of Management Sciences",
			title: "Lahore University of Management Sciences",
			subtitle: "Bachelor of Science (B.Sc.), Computer Science",
			duration: "2017 - 2021",
			activities: [
				"Treasurer at Innovation and Design Society (INDEX)",
				"Team Manager and Best Squash Player for the year 2018",
				"Active Member of LUMS Community Service Society",
			],
		},
		{
			id: "nixor",
			image: "/assets/images/logos/education/nixor.png",
			alt: "Nixor College",
			title: "Nixor College",
			subtitle: "A'Levels, Sciences",
			duration: "2015 - 2017",
			grade: "2 A*'s, 1 A and 1 B",
		},
		{
			id: "beaconhouse",
			image: "/assets/images/logos/education/beaconhouse.png",
			alt: "Beaconhouse School System",
			title: "Beaconhouse",
			subtitle: "O'Levels, Sciences",
			duration: "2012 - 2015",
			grade: "7 A*'s and 2 A's",
		},
	];

	return (
		<div className="p-2">
			<Card
				icon={faSchool}
				title={t("education.title")}
				body={
					<div>
						{educationData.map((education, index) => {
							return (
								<div className="flex pb-6" key={index}>
									<OptimizedImage
										src={education.image}
										alt={education.alt}
										className="h-10 w-10 rounded-full border shadow-md object-contain bg-white"
										style={{
											borderColor:
												"var(--quaternary-color)",
										}}
										loading="lazy"
									/>
									<div className="flex-grow pl-5">
										<div className="text-md font-medium text-secondary pb-1">
											{education.title}
										</div>
										<div className="flex justify-between text-xs text-secondary">
											<div className="mr-4">
												{education.subtitle}
											</div>
											<div>{education.duration}</div>
										</div>
										{education.thesis && (
											<div className="text-xs text-secondary pt-1 italic">
												{t("education.thesisLabel")}:{" "}
												{education.thesis}
											</div>
										)}
										{education.grade && (
											<div className="text-xs text-secondary pt-1">
												{t("education.gradeLabel")}:{" "}
												{education.grade}
											</div>
										)}
										{education.activities &&
											education.activities.length > 0 && (
												<div className="text-xs text-secondary pt-1">
													<div className="font-medium pb-1">
														{t(
															"education.activitiesLabel",
														)}
														:
													</div>
													<ul className="list-disc list-inside pl-2 space-y-0.5">
														{education.activities.map(
															(activity, idx) => (
																<li key={idx}>
																	{activity}
																</li>
															),
														)}
													</ul>
												</div>
											)}
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

export default Education;
