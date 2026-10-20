// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const emptyArticleCategories = [
	'life-crises-and-change',
	'online-emotional-therapy',
];

const legacyRedirects = [
	'/therapy-from-age-16/',
	'/workshops/yotzrot-kesher/',
	'/workshops/return-to-myself/',
];

// https://astro.build/config
export default defineConfig({
	site: 'https://naamatiran.com',
	integrations: [
		tailwind(),
		sitemap({
			filter: (page) =>
				!emptyArticleCategories.some((slug) => page.includes(`/articles/category/${slug}/`)) &&
				!legacyRedirects.some((path) => page.endsWith(path)),
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
