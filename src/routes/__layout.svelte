<script lang="ts">
	import Header from '$lib/Header/index.svelte'
	import { first } from '$stores/first';
	import '../app.css'
</script>

<template lang="pug">

	svelte:head
		link(rel="stylesheet" src="../app.css")

	Header

	main
		slot

	footer
		p Made with 💙 by 
			a(href="https://github.com/fractalhq") Fractal

</template>


<style>
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

	footer {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
