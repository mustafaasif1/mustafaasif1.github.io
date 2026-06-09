import { article1markdown } from "./articles-markdown/article1";
import { article2markdown } from "./articles-markdown/article2";
import { articleGenUISecurity } from "./articles-markdown/article3";
import { articleAgentEvaluation } from "./articles-markdown/article4";
import { articleSoftwareEngineering2026 } from "./articles-markdown/article5";
import { getReadTimeMinutes } from "../utils/readTime";

const ARTICLE_TAGS = {
	PRODUCT: "Product Design",
	UX: "UX",
	CASE_STUDY: "Case Study",
	AI: "AI",
	SECURITY: "Security",
	RESEARCH: "Research",
	GENUI: "GenUI",
	ENGINEERING: "Engineering",
	TESTING: "Testing",
	CAREER: "Career",
	INDUSTRY: "Industry",
};

const article_1 = {
	id: 1,
	date: "7 May 2023",
	tags: [ARTICLE_TAGS.PRODUCT, ARTICLE_TAGS.UX, ARTICLE_TAGS.CASE_STUDY],
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
	id: 2,
	date: "6 Jan 2026",
	tags: [ARTICLE_TAGS.AI, ARTICLE_TAGS.SECURITY, ARTICLE_TAGS.RESEARCH],
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
	id: 3,
	date: "9 Feb 2026",
	tags: [ARTICLE_TAGS.AI, ARTICLE_TAGS.SECURITY, ARTICLE_TAGS.GENUI],
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
	id: 4,
	date: "10 Feb 2026",
	tags: [ARTICLE_TAGS.AI, ARTICLE_TAGS.ENGINEERING, ARTICLE_TAGS.TESTING],
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
	id: 5,
	date: "11 Feb 2026",
	tags: [ARTICLE_TAGS.AI, ARTICLE_TAGS.CAREER, ARTICLE_TAGS.INDUSTRY],
	title: "The Code Monkey is Dead: Welcome to the Hard Hat Era",
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

export { ARTICLE_TAGS };
export default myArticles;
