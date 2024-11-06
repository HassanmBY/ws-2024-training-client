/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./chat.html", "./src/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#3498db",
				"primary-light": "#add2eb",
			},
		},
	},
	plugins: [],
};
