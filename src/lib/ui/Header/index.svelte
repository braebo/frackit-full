<script lang="ts">
	import Switch from '$lib/theme/Switch.svelte'
	import logo from './svelte-logo.svg'
	import Nav from './Nav.svelte'
</script>


<template lang="pug">

	header

		.corner
			a(href='https://kit.svelte.dev')
				img(src='{logo}' alt='SvelteKit')

		Nav

		.corner
			Switch

</template>


<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		display: flex;
		width: 3em;
		height: 3em;
		align-items: center;
		justify-content: center;
	}
</style>
