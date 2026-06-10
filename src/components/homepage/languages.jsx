import React from "react";
import { useTranslation } from "react-i18next";
import { faLanguage } from "../../utils/icons";
import Card from "../common/card";
import OptimizedImage from "../common/optimizedImage";
import "./styles/languages.css";

const Languages = () => {
	const { t } = useTranslation();

	const languagesData = [
		{ id: "urdu", image: "/assets/images/logos/flags/pakistan.png" },
		{ id: "english", image: "/assets/images/logos/flags/uk.png" },
		{ id: "german", image: "/assets/images/logos/flags/germany.png" },
	];

	return (
		<div className="languages-section p-2">
			<Card
				icon={faLanguage}
				title={t("languages.title")}
				body={
					<div className="languages-list">
						{languagesData.map((language) => {
							const item = t(`languages.items.${language.id}`, {
								returnObjects: true,
							});

							return (
								<div className="language-item" key={language.id}>
									<OptimizedImage
										src={language.image}
										alt={item.name}
										className="language-flag"
										loading="lazy"
									/>
									<div className="language-text">
										<div className="language-name">{item.name}</div>
										<div className="language-level">{item.level}</div>
									</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Languages;
