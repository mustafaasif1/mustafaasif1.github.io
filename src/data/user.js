const LOGOS = {
	BALSAMIQ: {
		image: "/assets/images/logos/tech/balsamiq.png",
		link: "Balsamiq",
	},
	"C-SHARP": {
		image: "/assets/images/logos/tech/c-sharp.jpg",
		link: "C-sharp",
	},
	CSS: {
		image: "/assets/images/logos/tech/css.png",
		link: "CSS",
	},
	DOCKER: {
		image: "/assets/images/logos/tech/docker.png",
		link: "Docker",
	},
	FIGMA: {
		image: "/assets/images/logos/tech/figma.jpg",
		link: "Figma",
	},
	"FIREBASE-AUTH": {
		image: "/assets/images/logos/tech/firebase-auth.png",
		link: "Firebase auth",
	},
	FIREBASE: {
		image: "/assets/images/logos/tech/firebase.png",
		link: "Firebase",
	},
	FLUTTER: {
		image: "/assets/images/logos/tech/flutter.png",
		link: "Flutter",
	},
	GITLAB: {
		image: "/assets/images/logos/tech/gitlab.png",
		link: "Gitlab",
	},
	"GOOGLE-ARCORE": {
		image: "/assets/images/logos/tech/google-arcore.png",
		link: "Google ARCore",
	},
	"GOOGLE-MAPS": {
		image: "/assets/images/logos/tech/google-maps.png",
		link: "Google Maps",
	},
	HEROKU: {
		image: "/assets/images/logos/tech/heroku.png",
		link: "Heroku",
	},
	HTML: {
		image: "/assets/images/logos/tech/html.png",
		link: "HTML",
	},
	JAVASCRIPT: {
		image: "/assets/images/logos/tech/javascript.png",
		link: "Javascript",
	},
	MASTRA: {
		image: "/assets/images/logos/tech/mastra.jpeg",
		link: "Mastra",
	},
	MONGODB: {
		image: "/assets/images/logos/tech/mongodb.png",
		link: "MongoDB",
	},
	MURAL: {
		image: "/assets/images/logos/tech/mural.png",
		link: "Mural",
	},
	REACT: {
		image: "/assets/images/logos/tech/react.png",
		link: "React",
	},
	SHADCN: {
		image: "/assets/images/logos/tech/shadcn.png",
		link: "Shadcn",
	},
	SUPABASE: {
		image: "/assets/images/logos/tech/supabase.jpg",
		link: "Supabase",
	},
	"SPRING-BOOT": {
		image: "/assets/images/logos/tech/spring-boot.png",
		link: "Springboot",
	},
	TAILWIND: {
		image: "/assets/images/logos/tech/tailwind.png",
		link: "Tailwind",
	},
	UNITY: {
		image: "/assets/images/logos/tech/unity.png",
		link: "Unity",
	},
};

const INFO = {
	main: {
		title: "Mustafa Asif - Full Stack Software Engineer",
		name: "Mustafa Asif",
		email: "mustafaasif1@hotmail.com",
		logo: "/assets/images/photos/profile/logo.jpg",
		calendly: "https://calendly.com/mustafa-asif15/30min",
	},

	socials: {
		github: "https://github.com/mustafaasif1",
		linkedin: "https://www.linkedin.com/in/mustafaasif1/",
		instagram: "https://www.instagram.com/mushti98/",
		stackoverflow: "https://stackoverflow.com/users/18565659/mustafa-asif",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and squash enthusiast.",
		description1: `Hey there! I'm Mustafa, a Full Stack Software Engineer at commercetools. I recently completed my M.Sc. Informatics at the Technical University of Munich, focusing on software-intensive systems. I got my Bachelor's in Computer Science from Lahore University of Management Sciences.`,
		description2: `Along my coding journey, I've played with JavaScript, HTML, CSS, Python, Angular, ReactJS, React Native, and even fluttered around Flutter. Always eager to learn more!`,
		description3: `And if you're a fellow coder or recruiter in the area, let's connect! I'm all about expanding the network. See you around! 🚀`,
	},

	about: {
		title: "I'm Mustafa Asif. I live in Munich, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			id: "pitstopai",
			title: "Pitstop AI",
			description:
				"AI-powered booking platform for service businesses. Customers book 24/7 via AI agents on WhatsApp, Instagram, and Facebook Messenger. Multi-tenant B2B SaaS with Mastra-powered agents, smart calendar, and analytics.",
			linkText: "View Website",
			link: "https://www.pitstopai.co/",
			technologies: [LOGOS.MASTRA, LOGOS.SUPABASE, LOGOS.SHADCN, LOGOS.REACT, LOGOS.JAVASCRIPT],
		},
		{
			id: "kapra-eid",
			title: "Kapra Eid - Clothing Donation Application",
			description:
				"Designed and prototyped a complete application in Figma aimed to bridge the gap between clothing donors and charitable organisations. ",
			articleLink: "/article/2",
			technologies: [LOGOS.FIGMA, LOGOS.MURAL, LOGOS.BALSAMIQ],
		},
		{
			id: "web-ide",
			title: "Web-Based Integrated Development Environment (IDE)",
			description:
				"Designed and deployed a web-based IDE enabling code compilation and management in a team of 5 students, powered by a scalable microservices architecture.",
			technologies: [
				LOGOS.JAVASCRIPT,
				LOGOS.REACT,
				LOGOS.SHADCN,
				LOGOS["SPRING-BOOT"],
				LOGOS.DOCKER,
				LOGOS.GITLAB,
			],
		},
	],
};

export default INFO;
