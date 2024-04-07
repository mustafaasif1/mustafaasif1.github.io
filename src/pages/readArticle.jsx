import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-wrapper">
							<div className="flex flex-col sm:flex-row items-start">
								<FontAwesomeIcon
									icon={faArrowLeft}
									size="lg"
									className="py-4 text-gray-400 cursor-pointer hover:text-gray-700"
									onClick={() => navigate(-1)}
								/>
								<div className="sm:pl-6">
									<div className="read-article-title">
										{article().title}
									</div>
									<div className="pb-3">
										<div className="flex">
											<div className="pr-4 font-semibold text-secondary">
												{article().author}
											</div>
											<div className="border-l-2 px-4 text-secondary">
												{article().date}
											</div>
										</div>
									</div>
								</div>
							</div>

							<article className="py-6">
								<Markdown
									className="prose prose-md"
									rehypePlugins={[rehypeRaw]}
								>
									{article().body}
								</Markdown>
							</article>
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
