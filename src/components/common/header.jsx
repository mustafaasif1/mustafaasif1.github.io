import React from "react";
import NavBar from "./navBar";
import ThemeToggle from "./themeToggle";
import "./styles/header.css";

const Header = ({ active }) => {
	return (
		<div className="header-container">
			<div className="header-content">
				<NavBar active={active} />
				<div className="theme-toggle-container">
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
};

export default Header;
