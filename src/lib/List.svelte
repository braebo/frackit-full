<script lang="ts">
	import { fly } from 'svelte/transition'
	import { onMount } from 'svelte'
	
	type link = [url: string, name:string]
	const links: link[] = [
		["https://kit.svelte.dev", "SvelteKit"],
		["https://www.typescriptlang.org/", "Typescript"],
		["https://cssnano.co/", "CSSNano"],
		["https://mdsvex.com/", "MDSvex"],
		["https://pugjs.org/api/getting-started.html", "Pug"]
	]

	let mounted = false
	onMount(() => {mounted = true})
</script>


<template lang="pug">

	+if('mounted')
		.list
			+each('links as [url, name], i')
				a(
					in:fly='{{y: 50, duration: 200 * i + 750, delay: i * 50	}}'
					href='{url}'
				) {name}

</template>


<style>
	.list {
		display: flex;
		flex-direction: column;
		flex: 1;

		margin-top: clamp(5em, 30%, 8em);

		font-size: 1.75em;
	}

	a {
		position: relative;

		width: 100%;
		max-width: max-content;
		margin: 0.5em 0;

		color: unset;
		transition: 0.2s;

		text-decoration: none;
		letter-spacing: 2px;
		font-family: var(--font-secondary);
		font-weight: 200;
	}

	a:hover {
		width: max-content;
		text-shadow:
			1px		1px 	0 	var(--accent-color),
			-1px	-1px 	0	var(--accent-color),
			1px 	-1px 	0 	var(--accent-color),
			-1px 	1px 	0 	var(--accent-color),
			1px 	1px 	0 	var(--accent-color);
	}

	a:before, a:after {
		content: '';
		position: absolute;
		left: -30px;
		bottom: 0;
		top: 0;

		width: 20px;
		height: 20px;
		margin: auto;

		transition: 0.3s;
	}

	a:before {
		background-image: radial-gradient( transparent 0%,  transparent 20%, var(--text-color) 25%, transparent 30%);
	}
	a:hover:before {
		background-image: radial-gradient( var(--accent-color) 0%, var(--accent-color) 20%, var(--text-color) 25%, transparent 30%);
	}

	a:after {
		background-image: radial-gradient( transparent 0%,  transparent 50%, var(--accent-color) 55%, var(--accent-color) 63%, transparent 65%);
		opacity: 0;
		transform: scale(0.5);
	}
	a:hover:after {
		transform: scale(1);
		opacity: 1
	}
</style>