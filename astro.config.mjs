// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://naamatiran.com',
	integrations: [tailwind()],
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
