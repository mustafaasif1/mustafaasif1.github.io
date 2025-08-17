import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<FontAwesomeIcon
			icon={theme === "dark" ? faSun : faMoon}
			onClick={toggleTheme}
			style={{ cursor: "pointer" }}
		/>
	);
};

export default ThemeToggle;
