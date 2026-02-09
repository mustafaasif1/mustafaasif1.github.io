const LOGOS = {
	AI_SDK: { image: "/assets/optimized/logos/tech/md/ai-sdk.jpeg", link: "AI SDK" },
	ANGULAR: { image: "/assets/optimized/logos/tech/md/angular.png", link: "Angular" },
	BALSAMIQ: { image: "/assets/optimized/logos/tech/md/balsamiq.png", link: "Balsamiq" },
	"C-SHARP": { image: "/assets/optimized/logos/tech/md/c-sharp.jpg", link: "C-sharp" },
	CSS: { image: "/assets/optimized/logos/tech/md/css.png", link: "CSS" },
	DOCKER: { image: "/assets/optimized/logos/tech/md/docker.png", link: "Docker" },
	FIGMA: { image: "/assets/optimized/logos/tech/md/figma.jpg", link: "Figma" },
	"FIREBASE-AUTH": { image: "/assets/optimized/logos/tech/md/firebase-auth.png", link: "Firebase auth" },
	FIREBASE: { image: "/assets/optimized/logos/tech/md/firebase.png", link: "Firebase" },
	FLUTTER: { image: "/assets/optimized/logos/tech/md/flutter.png", link: "Flutter" },
	GITHUB_ACTIONS: { image: "/assets/optimized/logos/tech/md/github-actions.png", link: "GitHub Actions" },
	GITLAB: { image: "/assets/optimized/logos/tech/md/gitlab.png", link: "GitLab" },
	"GOOGLE-ARCORE": { image: "/assets/optimized/logos/tech/md/google-arcore.png", link: "Google ARCore" },
	"GOOGLE-MAPS": { image: "/assets/optimized/logos/tech/md/google-maps.png", link: "Google Maps" },
	GRAPHQL: { image: "/assets/optimized/logos/tech/md/graphql.png", link: "GraphQL" },
	HEROKU: { image: "/assets/optimized/logos/tech/md/heroku.png", link: "Heroku" },
	HTML: { image: "/assets/optimized/logos/tech/md/html.png", link: "HTML" },
	JAVASCRIPT: { image: "/assets/optimized/logos/tech/md/javascript.png", link: "JavaScript" },
	KUBERNETES: { image: "/assets/optimized/logos/tech/md/kubernetes.png", link: "Kubernetes" },
	LANGFUSE: { image: "/assets/optimized/logos/tech/md/langfuse.jpeg", link: "Langfuse" },
	LANGGRAPH: { image: "/assets/optimized/logos/tech/md/langgraph.png", link: "LangGraph" },
	LANGSMITH: { image: "/assets/optimized/logos/tech/md/langsmith.png", link: "LangSmith" },
	MASTRA: { image: "/assets/optimized/logos/tech/md/mastra.jpeg", link: "Mastra" },
	MONGODB: { image: "/assets/optimized/logos/tech/md/mongodb.png", link: "MongoDB" },
	MURAL: { image: "/assets/optimized/logos/tech/md/mural.png", link: "Mural" },
	NEXTJS: { image: "/assets/optimized/logos/tech/md/next.png", link: "Next.js" },
	POSTGRESQL: { image: "/assets/optimized/logos/tech/md/postgres.png", link: "PostgreSQL" },
	PRISMA: { image: "/assets/optimized/logos/tech/md/prisma.jpeg", link: "Prisma" },
	RAILWAY: { image: "/assets/optimized/logos/tech/md/railway.png", link: "Railway" },
	REACT: { image: "/assets/optimized/logos/tech/md/react.png", link: "React" },
	REDUX: { image: "/assets/optimized/logos/tech/md/redux.png", link: "Redux" },
	SHADCN: { image: "/assets/optimized/logos/tech/md/shadcn.png", link: "Shadcn" },
	"SPRING-BOOT": { image: "/assets/optimized/logos/tech/md/spring-boot.png", link: "Spring Boot" },
	SUPABASE: { image: "/assets/optimized/logos/tech/md/supabase.jpg", link: "Supabase" },
	TAILWIND: { image: "/assets/optimized/logos/tech/md/tailwind.png", link: "Tailwind" },
	TYPESCRIPT: { image: "/assets/optimized/logos/tech/md/typescript.png", link: "TypeScript" },
	UNITY: { image: "/assets/optimized/logos/tech/md/unity.png", link: "Unity" },
	VERCEL: { image: "/assets/optimized/logos/tech/md/vercel.png", link: "Vercel" },
	VITE: { image: "/assets/optimized/logos/tech/md/vite.png", link: "Vite" },
	ZUSTAND: { image: "/assets/optimized/logos/tech/md/zustand.jpeg", link: "Zustand" },
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
			articleLink: "/article/3",
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

export { LOGOS };
export default INFO;
