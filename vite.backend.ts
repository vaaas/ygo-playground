import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [
		solidPlugin(),
	],

	build: {
		target: 'esnext',
		outDir: '../',
		lib: {
			entry: 'backend.ts',
			formats: ['es'],
			name: 'app',
			fileName() {
				return 'app.js';
			},
		},
		rollupOptions: {
			external: [
				'node:buffer',
				'node:fs',
				'node:http',
			],
		}
	},
	root: 'src',
});
