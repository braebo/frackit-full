<script lang="ts">
	import Switch from '$lib/theme/Switch.svelte'
	import Logo from './Logo.svelte'
	import Nav from './Nav.svelte'
</script>


<template lang="pug">

	header

		.corner
			a(href='https://kit.svelte.dev')
				Logo

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
		width: 2.5em;
	}
</style>
