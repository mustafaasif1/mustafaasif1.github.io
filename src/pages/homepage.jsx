import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/common/optimizedImage";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Header from "../components/common/header";
import Article from "../components/homepage/article";
import Education from "../components/homepage/education";
import Works from "../components/homepage/works";
import Testimonials from "../components/homepage/testimonials/testimonials";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import {
	faGithub,
	faLinkedin,
	faMailBulk,
} from "../utils/icons";
import "./styles/homepage.css";
import "../components/common/styles/header.css";

const Homepage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

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
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{t("home.title")}
								</div>

								<div className="subtitle homepage-subtitle">
									{t("home.description1")}{" "}
									{t("home.description2")}
								</div>
								<div className="subtitle homepage-subtitle">
									{t("home.description3")}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<OptimizedImage
											src="/assets/images/photos/profile/homepage.png"
											alt="homepage"
											className="homepage-image"
											loading="eager"
										/>
									</div>
								</div>
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
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

					<div className="flex flex-col w-full lg:flex-row">
						<div className="w-full">
							<Works />
						</div>
						<div className="w-full">
							<Education />
						</div>
					</div>
					<div className="py-6">
						<Testimonials />
					</div>
						<div className="pb-4">
							<p className="articles-title">
								{t("home.writingSection")}
							</p>
							{myArticles.map((article, index) => (
								<div
									className="homepage-article"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={article.date}
										title={article.title}
										description={article.description}
										link={`/article/${index + 1}`}
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
