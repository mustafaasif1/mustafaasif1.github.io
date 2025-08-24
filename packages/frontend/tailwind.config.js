/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#27272a",
				secondary: "#65656d",
				tertiary: "#acacb4",
				quaternary: "#e4e4e7",
				link: "#1287A8",
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100ch", // add required value here
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
