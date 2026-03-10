// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://naamatiran.com',
	integrations: [
		tailwind(),
		sitemap({
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
