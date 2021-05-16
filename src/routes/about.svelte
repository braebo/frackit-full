<script context="module">
	import { browser, dev } from '$app/env'

	export const hydrate = dev
	export const router = browser
	export const prerender = true
</script>


<svelte:head>
	<title>About</title>
</svelte:head>


<template lang="pug">

	.content
		h1 About

		p   This is a 
			a(href="https://kit.svelte.dev") SvelteKit 
			| app. You can make your own by typing the following into your command line and following the prompts:

		pre npm init svelte@next

		p
			| The page you're looking at is purely static HTML, with no client-side interactivity needed.
			| Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
			| the devtools network panel and reloading.

		p   The 
			a(href="/todos") TODOs 
			| page illustrates SvelteKit's data loading and form handling. Try using
			| it with JavaScript disabled!

</template>


<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	pre {
		width: max-content;
		margin: auto;
		border: 1px solid var(--accent-color);
		box-shadow: 0px 2px 2px 2px #0001;
	}
</style>
