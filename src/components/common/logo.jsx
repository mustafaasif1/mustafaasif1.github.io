import React from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "./optimizedImage";
import INFO from "../../data/user";
import "./styles/logo.css";

const Logo = (props) => {
	const { width = 46, link = true } = props;

	const imageElement = (
		<OptimizedImage
			src={INFO.main.logo}
			alt="logo"
			className="logo"
			width={width}
			loading="eager"
		/>
	);

	return link ? <Link to="/">{imageElement}</Link> : imageElement;
};

export default Logo;
