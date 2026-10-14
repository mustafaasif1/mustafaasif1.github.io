import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/common/optimizedImage";
import Socials from "../components/about/socials";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Header from "../components/common/header";
import SEO from "../data/seo";
import INFO from "../data/user";

import "./styles/about.css";
import "../components/common/styles/header.css";

const EVENTS = [
	{
		id: "valencia",
		titleKey: "about.events.valencia.title",
		textKey: "about.events.valencia.text",
		photos: [
			{
				src: "/assets/images/photos/profile/valencia-offsite.jpg",
				altKey: "about.events.valencia.photos.boat",
			},
			{
				src: "/assets/images/photos/profile/valencia-paella.jpg",
				altKey: "about.events.valencia.photos.paella",
			},
			{
				src: "/assets/images/photos/profile/valencia-towers.jpg",
				altKey: "about.events.valencia.photos.towers",
			},
		],
	},
];

const About = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>
					{t("about.pageTitle", { title: INFO.main.title })}
				</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<Header active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-hero">
							<div className="about-hero-text">
								<h1 className="about-hero-title">
									{t("about.title")}
								</h1>
								<p className="about-hero-subtitle">
									{t("about.description")}
								</p>
								<div className="about-socials">
									<Socials />
								</div>
							</div>
							<div className="about-hero-image">
								<OptimizedImage
									src="/assets/images/photos/profile/about.jpg"
									alt={t("about.imageAlt")}
									className="about-hero-img"
									loading="eager"
									sizes="(max-width: 480px) 70vw, (max-width: 1024px) 300px, 370px"
								/>
							</div>
						</div>

						<div className="about-events">
							{EVENTS.map((event) => (
								<section className="about-event" key={event.id}>
									<h2 className="about-event-title">
										{t(event.titleKey)}
									</h2>
									<p className="about-event-text">
										{t(event.textKey)}
									</p>
									<div className="about-event-row">
										{event.photos.map((photo) => (
											<div
												className="about-event-card"
												key={photo.src}
											>
												<OptimizedImage
													src={photo.src}
													alt={t(photo.altKey)}
													className="about-event-img"
													loading="lazy"
													sizes="(max-width: 700px) 92vw, 320px"
												/>
											</div>
										))}
									</div>
								</section>
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
