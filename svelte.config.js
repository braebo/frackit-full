import vercel from '@sveltejs/adapter-vercel'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

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
		ssr: !!process.env.SSR,
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			pages: ['*']
		}
	}
}

export default config
