<!-- https://svelte.dev/repl/581f92c508bb4a2681e0939848733775?version=3.38.2 -->
<script lang="ts">
	import { blur } from 'svelte/transition'
	import { onMount } from 'svelte'
	import theme from '$lib/theme'

	$: dark = $theme === 'dark' ? true : false
	let delay = 1

	let mounted = false
	onMount(() => (mounted = true))
</script>

<template lang="pug">

		div(class:dark)
			svg(width='2048' height='495')
				filter#filter
					feConvolveMatrix(
						kernelMatrix='10 10 -1.8 -1 -1 -1 0 0 0'
						preserveAlpha='true'
						divisor='3'
						bias='-3.2'
						order='3 3'
					)
				image(
					class:dark
					id='welcome'
					href='/svelte-welcome.png'
					width='100%'
					height='100%'
				)

</template>

<style>
	svg {
		position: absolute;

		top: clamp(min(50px, 3vw), 50vw, 20%); /* ¯\_(ツ)_/¯ */
		right: 0;
		left: 0;

		width: 100%;
		max-width: 1000px;

		margin: auto;

		user-select: none;
		transform: translateY(-30%);
	}
	div.dark {
		filter: hue-rotate(190deg) brightness(0.5) blur(0.1px);
		filter: hue-rotate(190deg) brightness(0.5) blur(0.5px);
	}
	div {
		filter: hue-rotate(190deg);
	}
	image {
		filter: none;
	}
	image.dark {
		filter: url(#filter);
	}
</style>
