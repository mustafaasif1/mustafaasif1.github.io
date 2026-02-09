import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faChevronRight } from "../../utils/icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link, readTime } = props;
	const { t } = useTranslation();

	return (
		<div className="homepage-article">
			<div className="homepage-article-content">
				<div className="homepage-article-date">
					|&nbsp;&nbsp;&nbsp;{date}
					{readTime != null && (
						<span className="homepage-article-min-read">
							{" · "}
							{t("articles.minRead", { count: readTime })}
						</span>
					)}
				</div>
				<div className="homepage-article-title">{title}</div>
				<div className="homepage-article-description">
					{description}
				</div>
				<div className="homepage-article-link">
					<Link to={link}>
						Read article{" "}
						<FontAwesomeIcon
							style={{ fontSize: "10px" }}
							icon={faChevronRight}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Article;
