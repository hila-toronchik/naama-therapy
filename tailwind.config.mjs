/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cream-warm': '#FDFBF9',
				'sage': '#F6E8E4',
				'burgundy': '#A86467',
				'charcoal': '#5C504D',
				'mustard': '#C8A25D',
			},
			fontFamily: {
				display: ['"Secular One"', 'sans-serif'],
				body: ['Heebo', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
