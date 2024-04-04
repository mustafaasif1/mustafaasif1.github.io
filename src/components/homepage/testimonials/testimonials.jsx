import React from "react";
import Slider from "./slider";

const Testimonials = () => {

	const testimonialsData = [
    {
      quote:
        "Mustafa's exceptional skills in front-end development were instrumental in the success of our restaurant management application project. His dedication, analytical mindset, and attention to detail were evident in every task he undertook. His collaborative spirit and effective communication greatly enhanced our team dynamics, resulting in positive outcomes.",
      author: "Serhat Nas",
			authorImage: "serhat.jpeg",
      position: "Co-founder at ease",
      companyImage: "ease.png",
    },
		{
      quote:
        "I've worked with Mustafa on group projects for 2 courses and the senior year project, which is essentially 16 months of collaborative work. I found Mustafa to be a very competent and driven team mate. Aside from working himself, he is able to make others around him work as well, which was a trait especially visible in the HCI group where he took lead with delegation of work.",
      author: "Omer Shakeel",
			authorImage: "omer.jpeg",
      position: "Software Engineer at Intellia",
      companyImage: "intellia.jpeg",
    }
  ];

  return <Slider testimonials={testimonialsData} />;
};

export default Testimonials;