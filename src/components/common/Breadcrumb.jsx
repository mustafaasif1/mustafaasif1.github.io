import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "../../utils/icons";
import "./styles/breadcrumb.css";

/**
 * Breadcrumb for two-step pages (e.g. Articles → Article, Projects → Project).
 * @param {Array<{ label: string, to?: string }>} items - Breadcrumb segments. Last item typically has no `to` (current page).
 */
const Breadcrumb = ({ items }) => {
	if (!items?.length) return null;

	return (
		<nav
			className="breadcrumb"
			aria-label="Breadcrumb"
		>
			<ol className="breadcrumb-list">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					return (
						<li
							key={index}
							className="breadcrumb-item"
							aria-current={isLast ? "page" : undefined}
						>
							{index > 0 && (
								<span
									className="breadcrumb-separator"
									aria-hidden="true"
								>
									<FontAwesomeIcon icon={faChevronRight} />
								</span>
							)}
							{item.to && !isLast ? (
								<Link
									to={item.to}
									className="breadcrumb-link"
								>
									{item.label}
								</Link>
							) : (
								<span className="breadcrumb-current">
									{item.label}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
