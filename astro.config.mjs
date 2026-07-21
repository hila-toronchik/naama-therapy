// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const emptyArticleCategories = [
	'addictions-and-compulsive-patterns',
	'anxiety-and-emotional-regulation',
	'life-crises-and-change',
	'relationships-attachment-and-self-worth',
	'online-emotional-therapy',
];

// https://astro.build/config
export default defineConfig({
	site: 'https://naamatiran.com',
	integrations: [
		tailwind(),
		sitemap({
			filter: (page) => !emptyArticleCategories.some((slug) => page.includes(`/articles/category/${slug}/`)),
			i18n: {
				defaultLocale: 'he',
				locales: {
					he: 'he-IL',
				},
			},
		}),
	],
	vite: {
		server: {
			hmr: true,
			watch: {
				usePolling: true,
				interval: 100,
			},
		},
	},
});
