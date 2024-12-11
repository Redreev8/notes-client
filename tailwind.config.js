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
			transitionProperty: {
				rounded: 'border-radius',
				'rounded-colors':
					'border-radius, color, background-color, padding',
				h: 'height',
			},
		},
	},
	plugins: [],
}
