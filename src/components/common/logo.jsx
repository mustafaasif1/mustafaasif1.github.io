import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/logo.css";

const Logo = (props) => {
	const { width = 46, link = true } = props;

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return link ? <Link to="/">{imageElement}</Link> : imageElement;
};

export default Logo;
