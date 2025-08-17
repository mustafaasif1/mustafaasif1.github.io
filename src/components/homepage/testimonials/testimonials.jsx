import React from "react";
import Slider from "./slider";

const Testimonials = () => {
	const testimonialsData = [
		{
			quote: "Mustafa's exceptional skills in front-end development were instrumental in the success of our restaurant management application project. His dedication, analytical mindset, and attention to detail were evident in every task he undertook. His collaborative spirit and effective communication greatly enhanced our team dynamics, resulting in positive outcomes.",
			author: "Serhat Nas",
			authorImage: "/assets/images/photos/team/serhat.jpeg",
			position: "Co-founder at ease",
			companyImage: "/assets/images/logos/companies/ease.png",
		},
		{
			quote: "I've worked with Mustafa on group projects for 2 courses and the senior year project, which is essentially 16 months of collaborative work. I found Mustafa to be a very competent and driven team mate. Aside from working himself, he is able to make others around him work as well, which was a trait especially visible in the HCI group where he took lead with delegation of work.",
			author: "Omer Shakeel",
			authorImage: "/assets/images/photos/team/omer.jpeg",
			position: "Software Engineer at Intellia",
			companyImage: "/assets/images/logos/companies/intellia.jpeg",
		},
		{
			quote: "It was a real pleasure to work with Mustafa. He proved to be a great and reliable teammate, supporting each other with our tasks, allowing us to bring the project with LaFamiglia to life.",
			author: "Hamza Chaouki",
			authorImage: "/assets/images/photos/team/hamza.jpeg",
			position: "Werkstudent IT at Giorgio Armani ",
			companyImage: "/assets/images/logos/companies/armani.jpeg",
		},
		{
			quote: "I've worked with Mustafa on group projects for 2 courses and the senior year project, which is essentially 16 months of collaborative work. I found Mustafa to be a very competent and driven team mate. Aside from working himself, he is able to make others around him work as well, which was a trait especially visible in the HCI group where he took lead with delegation of work.",
			author: "Julian Kretzschmar",
			authorImage: "/assets/images/photos/team/julian.jpeg",
			position: "Research Assistant at Universitätsklinikum Bonn",
			companyImage: "/assets/images/logos/companies/ukb.jpeg",
		},
	];

	return <Slider testimonials={testimonialsData} />;
};

export default Testimonials;
