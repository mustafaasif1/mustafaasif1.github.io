import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faChevronRight } from "../../utils/icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link, readTime } = props;
	const { t } = useTranslation();

	return (
		<div className="article">
			<div className="article-left-side">
				<div className="article-date">
					{date}
					{readTime != null && (
						<span className="article-min-read">
							{" · "}
							{t("articles.minRead", { count: readTime })}
						</span>
					)}
				</div>
			</div>

			<Link to={link}>
				<div className="article-right-side">
					<div className="article-title">{title}</div>
					<div className="article-description">{description}</div>
					<div className="article-link">
						Read Article{" "}
						<FontAwesomeIcon
							style={{ fontSize: "10px" }}
							icon={faChevronRight}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Article;
