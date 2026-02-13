// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com', // Update with actual domain
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
