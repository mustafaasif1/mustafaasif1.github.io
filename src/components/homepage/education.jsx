import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";

const Education = () => {
	const educationData = [
		{
			image: "./tum.png",
			alt: "Technical University of Munich",
			title: "Technical University of Munich",
			subtitle: "Master of Science (M.Sc.), Informatik",
			duration: "Oct 2022 - Present",
		},
		{
			image: "./LUMS.png",
			alt: "Lahore University of Management Sciences",
			title: "Lahore University of Management Sciences",
			subtitle: "Bachelor of Science (B.Sc.), Computer Science",
			duration: "2017 - 2021",
		},
		{
			image: "./nixor.png",
			alt: "Nixor College",
			title: "Nixor College",
			subtitle: "A-levels, Sciences",
			duration: "2015 - 2017",
		},
		{
			image: "./beaconhouse.png",
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
				title="Education"
				body={
					<div>
						{educationData.map((education, index) => (
							<div className="flex pb-6" key={index}>
              <img
                src={education.image}
                alt={education.alt}
                className="h-10 w-10 rounded-full border border-quaternary shadow-md object-contain"
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
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Education;
