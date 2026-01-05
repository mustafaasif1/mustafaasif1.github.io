import { article1markdown } from "./articles-markdown/article1";
import { article2markdown } from "./articles-markdown/article2";

const article_1 = {
	date: "7 May 2023",
	title: "How did my team manage to prototype a clothing donation application for Pakistan?",
	author: "Mustafa Asif",
	description:
		"KapraEid is an application that aims to bridge this gap by developing a platform that could provide efficient communication between organizations and donors, which could help boost people's confidence in these organizations.",
	keywords: [
		"The Benefits of Cloud Computing",
		"Tharindu",
		"Tharindu N",
		"Tharindu Nayanajith",
	],
	body: article1markdown,
};

const article_2 = {
	date: "06 Jan 2026",
	title: "Beyond Static Scans: Why an \"A-Team\" of AI Agents is the Future of Web Security",
	author: "Mustafa Asif",
	description:
		"Exploring a novel approach to software vulnerability detection using multi-agent systems powered by Large Language Models. This research demonstrates how AI can enhance security analysis by combining semantic understanding with collaborative agent architectures.",
	keywords: [
		"Software Security",
		"Vulnerability Detection",
		"Large Language Models",
		"Multi-Agent Systems",
		"AI in Cybersecurity",
		"Static Analysis",
	],
	body: article2markdown,
};

const myArticles = [article_2, article_1];

export default myArticles;
