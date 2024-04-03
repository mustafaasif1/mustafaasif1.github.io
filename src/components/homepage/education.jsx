import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";

const Education = () => {
	const educationData = [
		{
			image: "./tum.png",
			alt: "Full Stack Software Engineer (Student Assistant)",
			title: "Full Stack Software Engineer (Student Assistant) at TUM",
			subtitle: "Technical University of Munich · Part-time",
			duration: "Apr 2023 - Present",
		},
		{
			image: "./ease.png",
			alt: "Front-end Software Engineer",
			title: "Front-end Software Engineer at Ease",
			subtitle: "ease · Contract",
			duration: "Oct 2023 - Mar 2024",
		},
		{
			image: "./lafamiglia.jpeg",
			alt: "Front-end Software Engineer at La Famiglia",
			title: "Front-end Software Engineer",
			subtitle: "La Famiglia · Contract",
			duration: "Oct 2023 - Jan 2024",
		},
		{
			image: "./motive1.jpeg",
			alt: "Software Engineer at Motive",
			title: "Software Engineer",
			subtitle: "Motive · Full-time",
			duration: "Jun 2022 - Sep 2022",
		},
    {
			image: "./arbisoft.png",
			alt: "Software Engineer at Arbisoft",
			title: "Arbisoft · Full-time",
			subtitle: "Motive · Full-time",
			duration: "Jun 2021 - Jun 2022",
		},
    {
			image: "./laam.png",
			alt: "Software Engineer Intern at Laam",
			title: "Software Engineer Intern",
			subtitle: "LAAM · Internship",
			duration: "Feb 2021 - May 2021",
		},
	];

	return (
		<div className="p-2">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div>
						{educationData.map((education, index) => (
							<div className="flex pb-4" key={index}>
              <img
                src={education.image}
                alt={education.alt}
                className="h-10 w-10 rounded-full border-2 border-quaternary shadow-md object-contain"
              />
              <div className="flex-grow pl-5">
                <div className="text-md font-bold text-secondary pb-0.5">
                  {education.title}
                </div>
                <div className="flex justify-between text-xs text-secondary">
                  <div className="mr-4">
                    {education.subtitle}
                  </div>
                  <div className="text-slate-500">{education.duration}</div>
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

export default Education;
