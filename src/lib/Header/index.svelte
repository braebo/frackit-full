<script lang="ts">
	import logo from './svelte-logo.svg'
	import github from './github.svg'
	import Nav from './Nav.svelte'
</script>


<template lang="pug">

	header

		.corner
			a(href='https://kit.svelte.dev')
				img(src='{logo}' alt='SvelteKit')

		Nav

		.corner
			a(href='https://github.com/fractalhq/frackit')
				img(src='{github}' alt='Github')

</template>


<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}

	.corner img {
		object-fit: contain;
		
		width: 2em;
		height: 2em;
		
		transition: 0.3s;
	}

	.corner:hover img {
		transform: scale(1.2);
	}
</style>
