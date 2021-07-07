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
	:global(html),
	:global(body) {
		background-color: var(--light-a);
	}
	.overlay {
		position: fixed;
		left: 0;
		top: 0;

		width: 100vw;
		height: 100vh;

		background: #00000000;

		transition: background 0.25s;

		pointer-events: none;
		z-index: 100;
	}
	.overlay.active {
		background: #00000055;

		pointer-events: fill;
	}
</style>
