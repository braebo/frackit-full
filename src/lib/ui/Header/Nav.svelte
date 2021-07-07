<script lang="ts">
	import { fly, fade, crossfade } from 'svelte/transition'
	import { navigating, page } from '$app/stores'
	import { onDestroy, onMount } from 'svelte'
	import { first } from '$lib/stores/first'
	import { quintOut } from 'svelte/easing'
	import navright from './navright.svg'
	import navleft from './navleft.svg'

	const [send, receive] = crossfade({ duration: 750, fallback: fade, easing: quintOut })

	const links: string[][] = [
		['/', 'Home'],
		['/about', 'About'],
		['/components', 'Components'],
		['/todos', 'Todos']
	]

	$: if ($first && $navigating) $first = false

	let mounted = false,
		timer = null
	onMount(() => {
		mounted = true
		setTimeout(() => {
			$first = false
		}, 3000)
	})
	onDestroy(() => {
		if (timer) clearTimeout(timer)
	})
</script>

<template lang="pug">

	+if('mounted')
		nav(in:fly|once='{{y: $first ? -50 : 0, easing: quintOut, duration: 400, opacity: 1 }}')

			img.navleft(src='{navleft}')

			ul(class:expand='{$first}')

				+each('links as [path, title], i (title)')

					li(class:active='{$page.path === path}')

						a(
							in:fly='{{ y: $first ? -50 : 0, delay: i * 100 + 500, duration: 1000, opacity: $first ? 0 : 1}}'
							sveltekit:prefetch
							href='{path}'
						) {title}

						+if('path === $page.path')
							.arrow(class:fade='{$first}' in:receive out:send)

			img.navright(src='{navright}')

</template>

<style>
	nav {
		display: flex;
		justify-content: center;

		--background: #3d3d3d;
		--size: 6px;
	}

	img {
		display: block;

		width: 2em;
		height: 3em;
	}

	path {
		fill: var(--background);
	}

	ul {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;

		height: 3em;
		margin: 0;
		padding: 0;

		background: var(--background);
		background-image: linear-gradient(to bottom, transparent 92%, #00000077 102%);
		background-size: contain;

		z-index: 1;

		/* box-shadow: 0 -2px 2px #0005 inset; */
	}
	.expand {
		max-width: 0%;

		animation: expand 5s;
		animation-timing-function: cubic-bezier(0.12, 0.84, 0.07, 0.99);
		animation-fill-mode: forwards;
		animation-delay: 200ms;
	}

	@keyframes expand {
		from {
			max-width: 0%;
		}
		to {
			max-width: 100%;
		}
	}

	li {
		position: relative;

		height: 100%;

		list-style: none;
	}

	.arrow {
		position: absolute;
		left: calc(50% - var(--size));
		top: 0;

		height: 0;
		width: 0;

		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--brand-a);
	}

	nav a {
		display: flex;
		align-items: center;

		height: 100%;
		padding: 0 1em;

		font-size: 0.8rem;

		font-weight: 700;

		color: #f5f5f5;

		transition: color 0.2s linear;
		text-decoration: none;
		letter-spacing: 10%;
		text-transform: uppercase;
	}

	a:hover {
		color: var(--brand-a);
	}

	.fade {
		transform: translateY(-10px);
		animation: fade 500ms forwards;
		animation-delay: 750ms;
	}

	@keyframes fade {
		from {
			transform: translateY(-10px);
		}
		to {
			transform: translateY(0px);
		}
	}

	/* safari hack because it's trash */
	.navright,
	.navleft {
		position: relative;

		z-index: -1;
	}
	.navright {
		transform: translate3d(-1px, 0, 0);
	}
	.navleft {
		transform: translate3d(1px, 0, 0);
	}
</style>
