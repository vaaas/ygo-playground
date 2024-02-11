import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [
		solidPlugin(),
	],

	build: {
		watch: {
			clearScreen: false,
		},
		target: 'esnext',
		outDir: '../public',
		lib: {
			entry: 'frontend.tsx',
			formats: ['iife'],
			name: 'app',
			fileName() {
				return 'app.js';
			},
		}
	},
	root: 'src',
});
