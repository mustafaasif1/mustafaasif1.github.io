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
			duration: "Oct 2022 - Present",
		},
		{
			id: "lums",
			image: "/assets/images/logos/education/LUMS.png",
			alt: "Lahore University of Management Sciences",
			title: "Lahore University of Management Sciences",
			subtitle: "Bachelor of Science (B.Sc.), Computer Science",
			duration: "2017 - 2021",
		},
		{
			id: "nixor",
			image: "/assets/images/logos/education/nixor.png",
			alt: "Nixor College",
			title: "Nixor College",
			subtitle: "A-levels, Sciences",
			duration: "2015 - 2017",
		},
		{
			id: "beaconhouse",
			image: "/assets/images/logos/education/beaconhouse.png",
			alt: "Beaconhouse School System",
			title: "Beaconhouse",
			subtitle: "O-levels, Sciences",
			duration: "2012 - 2017",
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
							const institution = t(
								`education.institutions.${education.id}`,
							);
							return (
								<div className="flex pb-6" key={index}>
									<OptimizedImage
										src={education.image}
										alt={education.alt}
										className="h-10 w-10 rounded-full border shadow-md object-contain"
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
