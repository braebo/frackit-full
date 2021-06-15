<script lang="ts">
	import Switch from '$lib/ui/ToggleTheme/index.svelte'
	import Logo from './Logo.svelte'
	import Nav from './Nav.svelte'
</script>


<template lang="pug">

	header

		#home.corner
			a(href='https://kit.svelte.dev' target="_blank")
				Logo

		Nav

		#theme.corner
			Switch

</template>


<style>
	header {
		display: flex;
		position: relative;
		justify-content: space-between;
		
		width: 100vw;

		z-index: 50;
	}

	.corner {
		width: 2.5em;
	}
</style>
