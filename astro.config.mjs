// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		build: {
			cssCodeSplit: true,
			rollupOptions: {
				output: {
					manualChunks: undefined,
				},
			},
		},
	},
});
