/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Jura: ['Jura', 'sans-serif'],
			},
			animation: {
				'shadow-drop': 'shadow-drop .6s linear both',
			},
		},
	},
	plugins: [],
}
