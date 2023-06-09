/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				fadeIn: "fadeIn .3s ease-in",
				slideLeft: "slideLeft .5s ease-in",
				slideRight: "slideRight .5s ease-in",
				slideDown: "slideDown .2s ease-in",
				slideUp: "slideUp .2s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				slideLeft: {
					"0%": { opacity: 0, transform: "translateX(-50px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				slideRight: {
					"0%": { opacity: 0, transform: "translateX(110%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
