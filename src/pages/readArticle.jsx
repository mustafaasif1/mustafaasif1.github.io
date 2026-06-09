import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Markdown from "react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Header from "../components/common/header";
import Breadcrumb from "../components/common/Breadcrumb";
import ArticleTags from "../components/common/articleTags";
import OptimizedMarkdownImage from "../components/articles/optimizedMarkdownImage";
import { faArrowLeft } from "../utils/icons";
import INFO from "../data/user";
import myArticles from "../data/articles";
import "./styles/readArticle.css";
import "../components/common/styles/header.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const { t } = useTranslation();
	const article = myArticles.find(
		(a) => a.id === parseInt(slug, 10),
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!article) {
		navigate("/404");
		return null;
	}

	const articleIndex = myArticles.findIndex((a) => a.id === article.id);
	const newerArticle =
		articleIndex > 0 ? myArticles[articleIndex - 1] : null;
	const olderArticle =
		articleIndex < myArticles.length - 1
			? myArticles[articleIndex + 1]
			: null;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article.description} />
				<meta name="keywords" content={article.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<Header />
				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<FontAwesomeIcon
								onClick={() => navigate(-1)}
								icon={faArrowLeft}
								className="read-article-back-button"
							/>
						</div>

						{article && (
							<Breadcrumb
								items={[
									{
										label: t("nav.articles"),
										to: "/articles",
									},
									{ label: article.title },
								]}
							/>
						)}

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article.date}
									<span
										className="read-article-min-read"
										aria-hidden="true"
									>
										{" · "}
										{t("articles.minRead", {
											count: article.readTime,
										})}
									</span>
								</div>
							</div>

							<div className="read-article-header">
								<div className="title read-article-title">
									{article.title}
								</div>

								<ArticleTags
									tags={article.tags}
									className="read-article-tags"
								/>
							</div>

							<div className="read-article-body">
								<Markdown
									className="prose prose-md"
									remarkPlugins={[remarkMath, remarkGfm]}
									rehypePlugins={[rehypeKatex, rehypeRaw]}
									components={{
										img: ({ src, alt }) => (
											<OptimizedMarkdownImage
												src={src}
												alt={alt}
											/>
										),
										a: ({ href, children }) => {
											const isInternal =
												typeof href === "string" &&
												href.startsWith("/");

											if (isInternal) {
												return (
													<Link to={href}>
														{children}
													</Link>
												);
											}

											return (
												<a
													href={href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{children}
												</a>
											);
										},
									}}
								>
									{article.body}
								</Markdown>
							</div>

							{(newerArticle || olderArticle) && (
								<nav
									className="read-article-navigation"
									aria-label={t(
										"articles.aria.articleNavigation",
									)}
								>
									{olderArticle ? (
										<Link
											to={`/article/${olderArticle.id}`}
											className="read-article-nav-link read-article-nav-link--previous"
										>
											<span className="read-article-nav-label">
												{t("articles.previousArticle")}
											</span>
											<span className="read-article-nav-title">
												{olderArticle.title}
											</span>
										</Link>
									) : null}
									{newerArticle ? (
										<Link
											to={`/article/${newerArticle.id}`}
											className="read-article-nav-link read-article-nav-link--next"
										>
											<span className="read-article-nav-label">
												{t("articles.nextArticle")}
											</span>
											<span className="read-article-nav-title">
												{newerArticle.title}
											</span>
										</Link>
									) : null}
								</nav>
							)}
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

export default ReadArticle;
