import { article1markdown } from "./articles-markdown/article1";
import { article2markdown } from "./articles-markdown/article2";
import { articleGenUISecurity } from "./articles-markdown/article3";
import { articleAgentEvaluation } from "./articles-markdown/article4";
import { articleSoftwareEngineering2026 } from "./articles-markdown/article5";
import { getReadTimeMinutes } from "../utils/readTime";

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
	get readTime() {
		return getReadTimeMinutes(this.body);
	},
};

const article_2 = {
	date: "6 Jan 2026",
	title: 'Beyond Static Scans: Why an "A-Team" of AI Agents is the Future of Web Security',
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
	get readTime() {
		return getReadTimeMinutes(this.body);
	},
};

const article_3 = {
	date: "9 Feb 2026",
	title: "Securing Generative UI Against Indirect Prompt Injection with the Trusted UI Pattern",
	author: "Mustafa Asif",
	description:
		"Exploring the security paradox of Generative UI where LLMs compose interfaces at runtime and how the Trusted UI pattern (allow-listing, schema validation, and architectural isolation) defends against Indirect Prompt Injection.",
	keywords: [
		"Generative UI",
		"GenUI",
		"Indirect Prompt Injection",
		"Trusted UI",
		"LLM Security",
		"AI Security",
		"Agentic AI",
	],
	body: articleGenUISecurity,
	get readTime() {
		return getReadTimeMinutes(this.body);
	},
};

const article_4 = {
	date: "10 Feb 2026",
	title: "Evaluating AI Agents Beyond the Vibe Check",
	author: "Mustafa Asif",
	description:
		"A deep dive into agent evaluation: compounding non-determinism, the Agent Evaluation Pyramid, LLM-as-a-Judge, stateful mocks, Pass@k, and building golden datasets to operationalize trust in autonomous systems.",
	keywords: [
		"Agent Evaluation",
		"AI QA",
		"LLM-as-a-Judge",
		"Pass@k",
		"Autonomous Agents",
		"Agent Testing",
		"Trajectory Analysis",
		"Generative AI",
	],
	body: articleAgentEvaluation,
	get readTime() {
		return getReadTimeMinutes(this.body);
	},
};

const article_5 = {
	date: "11 Feb 2026",
	title: "The Strategic Reconfiguration of Software Engineering: A Longitudinal Analysis of the Generative AI Era (2025–2030)",
	author: "Mustafa Asif",
	description:
		"A comprehensive analysis of how generative AI is fundamentally reshaping software engineering: from the evolution to AI-native development and agentic SDLC, to structural displacement in entry-level labor markets, pedagogical shifts, and emerging occupational archetypes.",
	keywords: [
		"Software Engineering",
		"Generative AI",
		"AI-Native Development",
		"Agentic SDLC",
		"Labor Market",
		"Software Engineering Jobs",
		"AI in Software Development",
		"Future of Engineering",
	],
	body: articleSoftwareEngineering2026,
	get readTime() {
		return getReadTimeMinutes(this.body);
	},
};

// Newest first (by recency)
const myArticles = [article_5, article_4, article_3, article_2, article_1];

export default myArticles;
