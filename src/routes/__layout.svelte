<script lang="ts">
	import Header from '$lib/ui/Header/index.svelte'
	import Footer from '$lib/ui/Footer.svelte'
	import '../app.css'
</script>


<template lang="pug">

	Header

	main
		slot
		Footer

</template>


<style>
	:global(html, body) {
		background-color: var(--light-a);
	}
	main {
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		flex: 1;

		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		padding: 1rem;
	}
</style>