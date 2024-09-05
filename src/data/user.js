const LOGOS = {
  "BALSAMIQ": {
    image: "../balsamiq.png",
    link: "Balsamiq"
  },
  "C-SHARP": {
    image: "../c-sharp.jpg",
    link: "C-sharp"
  },
  "CSS": {
    image: "../css.png",
    link: "CSS"
  },
  "DOCKER": {
    image: "../docker.png",
    link: "Docker"
  },
  "FIGMA": {
    image: "../figma.jpg",
    link: "Figma"
  },
  "FIREBASE-AUTH": {
    image: "../firebase-auth.png",
    link: "Firebase auth"
  },
  "FIREBASE": {
    image: "../firebase.png",
    link: "Firebase"
  },
  "FLUTTER": {
    image: "../flutter.png",
    link: "Flutter"
  },
  "GITLAB": {
    image: "../gitlab.png",
    link: "Gitlab"
  },
  "GOOGLE-ARCORE": {
    image: "../google-arcore.png",
    link: "Google ARCore"
  },
  "GOOGLE-MAPS": {
    image: "../google-maps.png",
    link: "Google Maps"
  },
  "HEROKU": {
    image: "../heroku.png",
    link: "Heroku"
  },
  "HTML": {
    image: "../html.png",
    link: "HTML"
  },
  "JAVASCRIPT": {
    image: "../javascript.png",
    link: "Javascript"
  },
  "MONGODB": {
    image: "../mongodb.png",
    link: "MongoDB"
  },
  "MURAL": {
    image: "../mural.png",
    link: "Mural"
  },
  "REACT": {
    image: "../react.png",
    link: "React"
  },
  "SHADCN": {
    image: "../shadcn.png",
    link: "Shadcn"
  },
  "SPRING-BOOT": {
    image: "../spring-boot.png",
    link: "Springboot"
  },
  "TAILWIND": {
    image: "../tailwind.png",
    link: "Tailwind"
  },
  "UNITY": {
    image: "../unity.png",
    link: "Unity"
  },
};


const INFO = {
	main: {
		title: "Mustafa's Portfolio",
		name: "Mustafa Asif",
		email: "mustafaasif1@hotmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		github: "https://github.com/mustafaasif1",
		linkedin: "https://www.linkedin.com/in/mustafaasif1/",
		instagram: "https://www.instagram.com/mushti98/",
		stackoverflow: "https://stackoverflow.com/users/18565659/mustafa-asif",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and squash enthusiast.",
		description1: `Hey there! I'm Mustafa, currently studying M.Sc. Informatics at the Technical University of Munich, all about software-intensive systems. I got my Bachelor's in Computer Science from Lahore University of Management Sciences.`,
		description2: `Along my coding journey, I've played with JavaScript, HTML, CSS, Python, Angular, ReactJS, React Native, and even fluttered around Flutter. Always eager to learn more!`,
		description3: `And if you're a fellow coder or recruiter in the area, let's connect! I'm all about expanding the network. See you around! 🚀`
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
			title: "asmbyte",
			description:
				"ASMByte's Landing website, showcasing their expertise in web and mobile app development, and data science projects.",
			linkText: "View Website",
			link: "https://asmbyte-5c49f.web.app/",
			technologies: [LOGOS.FLUTTER, LOGOS.FIREBASE, LOGOS["FIREBASE-AUTH"], LOGOS["GOOGLE-MAPS"]]
		},

		{
			title: "Lahu - Blood Donation Application",
			description:
				"A complete blood donation mobile application with Flutter as the front end and Cloud Firestore as the backend. ",
			linkText: "View Project",
			link: "https://github.com/mustafaasif1/Lahu",
			technologies: [LOGOS.REACT, LOGOS.TAILWIND, LOGOS.FIREBASE]
		},

		{
			title: "Kapra Eid - Clothing Donation Application",
			description:
				"Designed and prototyped a complete application in Figma aimed to bridge the gap between clothing donors and charitable organisations. ",
			linkText: "View Project",
			link: "https://github.com/mustafaasif1/Kapra-Eid",
			technologies: [LOGOS.FIGMA, LOGOS.MURAL, LOGOS.BALSAMIQ]
		},

		{
			title: "AR Simulations For Fire Emergencies",
			description:
				"Researched and developed Augmented Reality simulations with a purpose to train people about the effective ways they could safely handle fire protection devices during fire emergencies. ",
			linkText: "View Project",
			link: "https://github.com/mustafaasif1/AR-Simulations-For-Emergencies",
			technologies: [LOGOS.UNITY, LOGOS["C-SHARP"], LOGOS["GOOGLE-ARCORE"]]
		},
		{
			title: "Asli (Real) Doctor",
			description:
				"Summer 2019 project: Created a JavaScript web app addressing the rise of fake doctors by providing a platform to verify their credentials and report suspicious activity.",
			linkText: "View Project",
			link: "https://github.com/mustafaasif1/Asli-Doctor",
			technologies: [LOGOS.JAVASCRIPT, LOGOS.REACT, LOGOS.TAILWIND, LOGOS.HEROKU, LOGOS.MONGODB]
		},
		{
			title: "Web-Based Integrated Development Environment (IDE)",
			description:
				"Designed and deployed a web-based IDE enabling code compilation and management in a team of 5 students, powered by a scalable microservices architecture.",
			linkText: "View Project",
			link: "",
			technologies: [LOGOS.JAVASCRIPT, LOGOS.REACT, LOGOS.SHADCN, LOGOS["SPRING-BOOT"], LOGOS.DOCKER, LOGOS.GITLAB]
		},
	],
};



export default INFO;
