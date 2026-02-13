/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cream-warm': '#F0D7B8',
				'sage': '#aaa6a0',
				'burgundy': '#6D2E46',
				'charcoal': '#2D3436',
			},
			fontFamily: {
				display: ['"Secular One"', 'sans-serif'],
				body: ['Heebo', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
