import { build } from 'esbuild';
// @ts-ignore
import { solidPlugin } from 'esbuild-plugin-solid';

build({
	entryPoints: ['src/frontend.tsx'],
	bundle: true,
	outfile: 'out.js',
	plugins: [solidPlugin()],
}).catch(() => process.exit(1))
