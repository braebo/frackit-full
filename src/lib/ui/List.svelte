<script lang="ts">
	import { first } from '$lib/stores/first'
	import { fly } from 'svelte/transition'
	import { theme } from '$lib/theme'
	import { onMount } from 'svelte'

	type link = [url: string, name: string]
	const links: link[] = [
		['https://kit.svelte.dev', 'SvelteKit'],
		['https://www.typescriptlang.org/', 'Typescript'],
		[
			'https://github.com/FractalHQ/frackit/blob/9b44c032bb37648519d211b47842cd7f867cce82/src/lib/theme/Switch.svelte',
			'Dark Mode'
		],
		['https://cssnano.co/', 'CSSNano'],
		['https://mdsvex.com/', 'MDSvex'],
		['https://pugjs.org/api/getting-started.html', 'Pug']
	]

	let mounted = false
	onMount(() => {
		mounted = true
	})
</script>

<template lang="pug">

	+if('mounted')
		.list(
			style="--blur:{$theme == 'light' ? 0 : 2}px"
		)
			
			+each('links as [url, name], i')
				a(
					in:fly='{{y: 50, duration: 200 * i + 750, delay: 300 + i * 50	}}'
					href='{url}'
					target='_'
				) {name}

</template>

<style>
	.list {
		display: flex;
		flex-direction: column;
		flex: 1;

		margin-top: clamp(5em, 30%, 8em);

		font-size: 1.5em;
	}

	a {
		position: relative;

		width: 100%;
		max-width: max-content;
		margin: 0.5em 0;

		font-family: var(--font-secondary);
		font-weight: 200;

		color: var(--dark-a);

		transition: 0.2s;

		text-decoration: none !important;
		letter-spacing: 2px;
	}

	a:hover {
		width: max-content;

		text-shadow: 1px 1px var(--blur) var(--brand-a), -1px -1px var(--blur) var(--brand-a),
			1px -1px var(--blur) var(--brand-a), -1px 1px var(--blur) var(--brand-a),
			1px 1px var(--blur) var(--brand-a);
	}

	a:before,
	a:after {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -30px;

		width: 20px;

		height: 20px;
		margin: auto;

		content: '';

		transition: 0.3s;
	}

	a:before {
		background-image: radial-gradient(
			transparent 0%,
			transparent 20%,
			var(--dark-a) 25%,
			transparent 30%
		);
	}
	a:hover:before {
		background-image: radial-gradient(
			var(--brand-a) 0%,
			var(--brand-a) 20%,
			var(--dark-a) 25%,
			transparent 30%
		);
	}

	a:after {
		background-image: radial-gradient(
			transparent 0%,
			transparent 50%,
			var(--brand-a) 55%,
			var(--brand-a) 63%,
			transparent 65%
		);
		opacity: 0;

		transform: scale(0.5);
	}
	a:hover:after {
		opacity: 1;

		transform: scale(1);
	}
</style>
