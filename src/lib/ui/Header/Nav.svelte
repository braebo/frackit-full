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
		['/', 'Home',],
		['/about', 'About',],
		['/todos', 'Todos',]
	]

	$: if ($first && $navigating) $first = false
	
	let mounted = false, timer = null
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

			img(src='{navleft}')
			//- svg(viewBox='0 0 2 3' aria-hidden='true')
			//- 	path(d='M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z')

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

			img(src='{navright}')
			//- svg(viewBox='0 0 2 3' aria-hidden='true')
			//- 	path(d='M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z')

</template>

<style>
	nav {
		display: flex;
		justify-content: center;
		--background: var(--darkgray);
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
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		
		height: 3em;
		padding: 0;
		margin: 0;
		
		background: var(--background);
		background-size: contain;

		box-shadow: 0 -2px #0005 inset;
	}
	.expand {
		max-width: 0%;
		animation: expand 5s;
		animation-timing-function: cubic-bezier(.12,.84,.07,.99);
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
		list-style: none;
		height: 100%;
	}

	.arrow {
		position: absolute;
		left: calc(50% - var(--size));
		top: 0;

		height: 0;
		width: 0;

		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		align-items: center;
		
		height: 100%;
		padding: 0 1em;
		
		color: #f5f5f5;
		
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
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
</style>

