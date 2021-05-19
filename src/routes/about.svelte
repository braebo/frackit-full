<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false
	onMount(() => mounted = true)
</script>


<template lang="pug">

	svelte:head
		title About

	.content
		h1 About

		p   This is a 
			a(href="https://kit.svelte.dev") SvelteKit 
			| app. You can make your own by typing the following into your command line and following the prompts:

		pre npm init svelte@next

		p
			| This is a relatively simple starter template I've put together for myself- 
			| configured to my current preferences and sprinkled with some utilities I commonly reach for. 
			| It's a work in progress, and not ideal for everyone, but may be useful to some.

		p Feel free to use it if you'd like, or reach out to me with any ideas on 
			a(href="https://github.com/fractalhq/frackit") github, 
			| or via my email at 
			a(href='mailto:braden@fractal-hq.com') braden@fractal-hq.com
			| .

		+if('mounted')
			p(id="⏳" in:fly='{{ y: 20, delay: 10000 }}') What are you waiting for?  Go delete half of this stuff and get to work 🚀
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
	#⏳ {
		margin-top: 5rem;
	}
</style>
