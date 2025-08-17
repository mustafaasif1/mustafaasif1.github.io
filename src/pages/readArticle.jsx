import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import { faArrowLeft } from "../utils/icons";
import INFO from "../data/user";
import myArticles from "../data/articles";
import "./styles/readArticle.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const article = myArticles[parseInt(slug) - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!article) {
		navigate("/404");

		return null;
	}

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
						<div className="read-article-back">
							<FontAwesomeIcon
								onClick={() => navigate(-1)}
								icon={faArrowLeft}
								className="read-article-back-button"
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date}
								</div>
							</div>

							<div className="title read-article-title">
								{article().title}
							</div>

							<div className="read-article-body">
								<Markdown
									className="prose prose-md"
									rehypePlugins={[rehypeRaw]}
								>
									{article().body}
								</Markdown>
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

export default ReadArticle;
