import vercel from '@sveltejs/adapter-vercel'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import { createRequire } from 'module'
import { mdsvex } from 'mdsvex'
import { resolve } from 'path'

import { dirname } from 'path';
import { fileURLToPath } from 'url'
// @ts-ignore
const __dirname = dirname(fileURLToPath(import.meta.url));
// @ts-ignore
const customRequire = createRequire(import.meta.url)
const pkg = customRequire('./package.json')

/** @type {import('@sveltejs/kit').Config} */
const config = {	
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex()
	],
	kit: {
		target: '#svelte',
		adapter: vercel(),
		// ssr: !!process.env.SSR,
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},
		vite: () => ({
			// ssr: {
			// 	noExternal: [...Object.keys(pkg.dependencies || {})],
			// },
			resolve: {
				alias: {
					$stores: resolve(__dirname, './src/stores'),
					$utils: resolve(__dirname, './src/utils'),
				},
			},
		}),
	}
}

export default config
