import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptimizedImage from "../components/common/optimizedImage";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Header from "../components/common/header";
import Article from "../components/homepage/article";
import Education from "../components/homepage/education";
import Languages from "../components/homepage/languages";
import Works from "../components/homepage/works";
import Testimonials from "../components/homepage/testimonials/testimonials";
import Skills from "../components/homepage/skills";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import {
	faGithub,
	faLinkedin,
	faMailBulk,
	faCalendarCheck,
} from "../utils/icons";
import "./styles/homepage.css";
import "../components/common/styles/header.css";

const HOMEPAGE_ARTICLE_LIMIT = 3;

const Homepage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");
	const featuredArticles = myArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT);

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<Header active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div className="homepage-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-hero">
							<div className="homepage-hero-text">
								<h1 className="homepage-hero-title">
									{t("home.title")}
								</h1>
								<p className="homepage-hero-subtitle">
									{t("home.description1")} {t("home.description2")}
								</p>
								<p className="homepage-hero-subtitle">
									{t("home.description3")}
								</p>
							</div>
							<div className="homepage-hero-image">
								<OptimizedImage
									src="/assets/images/photos/profile/homepage.png"
									alt="homepage"
									className="homepage-hero-img"
									loading="eager"
								/>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								aria-label={t("home.socialLinks.github")}
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								aria-label={t("home.socialLinks.linkedin")}
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
								aria-label={t("home.socialLinks.email")}
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
							{INFO.main.calendly && (
								<a
									href={INFO.main.calendly}
									target="_blank"
									rel="noreferrer"
									className="homepage-book-chat"
									aria-label={t("home.bookChatAria")}
								>
									<FontAwesomeIcon icon={faCalendarCheck} />
									<span>{t("home.bookChat")}</span>
								</a>
							)}
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-skills-below-projects">
							<Skills />
						</div>

						<div className="flex flex-col w-full lg:flex-row lg:items-start">
							<div className="w-full">
								<Works />
							</div>
							<div className="w-full flex flex-col">
								<Education />
								<Languages />
							</div>
						</div>
						<div className="skills-and-testimonials">
							<Testimonials />
						</div>

						<div className="homepage-writing-section pb-4">
							<div className="homepage-writing-header">
								<p className="articles-title">
									{t("home.writingSection")}
								</p>
								{myArticles.length > HOMEPAGE_ARTICLE_LIMIT && (
									<Link
										to="/articles"
										className="homepage-view-all-articles"
									>
										{t("home.viewAllArticles")}
									</Link>
								)}
							</div>
							{featuredArticles.map((article) => (
								<div
									className="homepage-article"
									key={article.id}
								>
									<Article
										date={article.date}
										title={article.title}
										description={article.description}
										link={`/article/${article.id}`}
										readTime={article.readTime}
										tags={article.tags}
									/>
								</div>
							))}
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
