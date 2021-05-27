<script>
	import { fly } from 'svelte/transition';

	let pre, copied
	function copy() {
		navigator.clipboard.writeText("npm init @svelte/next").then(() => {
			copied = true
			setTimeout(() => {
				copied = false
			}, 1500)
		});
	}
</script>


<template lang="pug">

	svelte:head
		title About

	.content
		h1 About

		p   This is a 
			a(href="https://kit.svelte.dev") SvelteKit 
			| app. You can make your own by typing the following into your command line and following the prompts:

		.code
			pre(on:click='{copy}') npm init svelte@next

			+if('copied')
				.copied(transition:fly='{{y: -25, opacity: 1}}') Copied 👍
		
		br
		br

		p
			| This is an opinionated starter template I've assembled for myself- 
			| It's a work in progress, and not ideal for everyone, but may be useful to some.

		p Feel free to use it if you'd like, or reach out to me with any ideas on 
			a(href="https://github.com/fractalhq/frackit") github, 
			| or via my email at 
			a(href='mailto:braden@fractal-hq.com') braden@fractal-hq.com
			| .
</template>


<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	.code {
		position: relative;
	}
	pre {
		position: relative;
		background: var(--light-a);
		
		width: max-content;
		margin: auto;
		
		border: 1px solid var(--brand-a);
		box-shadow: 0px 2px 2px 2px #0001;
		
		cursor: pointer;
	}
	.copied {
		position: absolute;
		right: 0;
		left: 0;

		width: max-content;
		margin: auto;
		
		font-family: var(--font-secondary);
		z-index: -1;
	}
</style>
