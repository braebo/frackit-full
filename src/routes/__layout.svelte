<script lang="ts">
	import Header from '$lib/ui/Header/index.svelte'
	import { showModal } from '$lib/stores/modal'
	import Footer from '$lib/ui/Footer.svelte'
	import '../app.css'
</script>


<template lang="pug">

	.overlay(class:active='{$showModal}')

	Header

	slot

	Footer

</template>


<style>
	:global(html, body) {
		background-color: var(--light-a);
	}
	.header {
		position: absolute;
		z-index: 50;
	}
	.overlay {
		position: fixed;
		z-index: 100;

		width: 100vw;
		height: 100vh;

		left: 0;
		top: 0;
		
		pointer-events: none;
	}
	.overlay.active {
		background: #0005;
		pointer-events: fill;
	}
</style>
