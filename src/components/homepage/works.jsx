import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";

const Works = () => {
	const workData = [
		{
			image: "./commercetools.jpeg",
			alt: "Full Stack Software Engineer at commercetools",
			title: "Full Stack Software Engineer",
			subtitle: "commercetools",
			type: "Working Student",
			duration: "June 2024 - Present",
			link: "https://commercetools.com/",
		},
		{
			image: "./tum.png",
			alt: "Full Stack Software Engineer (Student Assistant) at TUM",
			title: "Full Stack Software Engineer (Student Assistant)",
			subtitle: "Technical University of Munich",
			type: "Part-time",
			duration: "Apr 2023 - Present",
			link: "https://www.tum.de/en/",
		},
		{
			image: "./ease.png",
			alt: "Front-end Software Engineer at Ease",
			title: "Front-end Software Engineer",
			subtitle: "ease",
			type: "Interdisciplinary Project (IDP)",
			duration: "Oct 2023 - Mar 2024",
			link: "https://ease.day/",
		},
		{
			image: "./lafamiglia.jpeg",
			alt: "Front-end Software Engineer at La Famiglia",
			title: "Front-end Software Engineer",
			subtitle: "La Famiglia",
			type: "Practical Course",
			duration: "Oct 2023 - Jan 2024",
			link: "https://www.lafamiglia.vc/",
		},
		{
			image: "./motive1.jpeg",
			alt: "Software Engineer at Motive",
			title: "Software Engineer",
			subtitle: "Motive",
			type: "Full-time",
			duration: "Jun 2022 - Sep 2022",
			link: "https://gomotive.com/",
		},
		{
			image: "./arbisoft.png",
			alt: "Software Engineer at Arbisoft",
			title: "Software Engineer",
			subtitle: "Arbisoft",
			type: "Full-time",
			duration: "Jun 2021 - Jun 2022",
			link: "https://arbisoft.com/",
		},
		{
			image: "./laam.png",
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
				title="Professional Experience"
				body={
					<div>
						{workData.map((work, index) => (
							<div className="flex pb-6" key={index}>
								<img
									src={work.image}
									alt={work.alt}
									className="h-10 w-10 rounded-full border border-quaternary shadow-md object-contain"
								/>
								<div className="flex-grow pl-5">
									<div className="text-md font-medium text-secondary pb-1">
										{work.title} at{" "}
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
										<div className="mr-4">{work.type}</div>
										<div>{work.duration}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
