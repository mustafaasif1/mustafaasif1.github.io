import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "../../utils/icons";
import { useTheme } from "../../context/ThemeContext";
import "./styles/themeToggle.css";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className="theme-toggle-button"
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			<FontAwesomeIcon
				icon={theme === "dark" ? faSun : faMoon}
				className="theme-toggle-icon"
			/>
		</button>
	);
};

export default ThemeToggle;
