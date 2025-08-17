import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Article from "../components/articles/article";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Header from "../components/common/header";
import myArticles from "../data/articles";
import SEO from "../data/seo";
import INFO from "../data/user";

import "./styles/articles.css";

const Articles = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>
					{t("articles.pageTitle", { title: INFO.main.title })}
				</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<Header active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title">{t("articles.title")}</div>

						<div className="subtitle">{t("articles.subtitle")}</div>

						<div
							className="articles-container"
							aria-label={t("articles.aria.articlesList")}
						>
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article.date}
											title={article.title}
											description={article.description}
											link={`/article/${index + 1}`}
											aria-label={t(
												"articles.aria.articleLink",
												{
													title: article.title,
												},
											)}
										/>
									</div>
								))}
							</div>
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

export default Articles;
