<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { spring } from 'svelte/motion'
	import EasterEgg from './🎉.svelte'

	let count: number = 0

	const displayed_count = spring()
	$: displayed_count.set(count)
	$: offset = modulo($displayed_count, 1)

	function modulo(n: number, m: number) {
		return ((n % m) + m) % m
	}

	let timer: ReturnType<typeof setTimeout> | null = null
	let interval: ReturnType<typeof setInterval> | null = null

	function press(newCount: number) {
		count += newCount
		timer = setTimeout(() => {
			interval = setInterval(() => {
				count += newCount
			}, 100)
		}, 200)
	}

	function release() {
		if (timer) clearTimeout(timer)
		if (interval) clearInterval(interval)
		timer = null
		interval = null
	}

	let mounted = false
	onMount(() => (mounted = true))
	onDestroy(release)
</script>

<template lang="pug">

	+if('mounted')
		.counter(in:fly='{{y: 10, delay: 750, duration: 1000}}')

			button(
				aria-label="Decrease the counter by one"
				on:mousedown!="{() => press(-1)}"
				on:mouseout!='{release}'
				on:mouseup!='{release}'
			)
				svg(aria-hidden="true" viewBox="0 0 1 1")
					path(d="M0,0.5 L1,0.5")

			.counter-viewport
				.counter-digits(style="transform: translate(0, {100 * offset}%)")

					strong(
						style="top: -100%"
						aria-hidden="true"
					) { Math.floor($displayed_count + 1) }

					strong { Math.floor($displayed_count) }


			button(
				aria-label="Increase the counter by one"
				on:mousedown!='{() => press(1)}'
				on:mouseout!='{release}'
				on:mouseup!='{release}'
			)
				svg(aria-hidden="true" viewBox="0 0 1 1")
					path(d="M0,0.5 L1,0.5 M0.5,0 L0.5,1")

		EasterEgg('{count}')

</template>

<style>
	.counter {
		display: flex;

		margin: 4rem 0;

		border-top: 1px solid rgba(var(--dark-d-rgb), 0.1);
		border-bottom: 1px solid rgba(var(--dark-d-rgb), 0.1);
		border-radius: 5px;

		animation: scale 2s ease-out playing;
		animation-fill-mode: forwards;
	}

	.counter button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 2em;
		padding: 0;

		font-size: 2rem;

		color: var(--dark-c);
		border: 1px solid rgba(var(--dark-d-rgb), 0.25);
		border-radius: 5px;

		background-color: transparent;

		cursor: pointer;

		transition: 0.1s;
	}

	.counter button:hover {
		border: 1px solid rgba(var(--dark-b-rgb), 0.35);
	}

	.counter button:active {
		box-shadow: 0 0 4px 3px #00000011 inset;
		background-color: #00aaff11;
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: var(--dark-a);
	}

	.counter-viewport {
		position: relative;

		width: 8em;
		height: 4em;

		overflow: hidden;

		text-align: center;
	}

	.counter-viewport strong {
		display: flex;
		position: absolute;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;

		font-size: 4rem;

		font-weight: 400;

		color: var(--brand-a);
	}

	.counter-digits {
		position: absolute;

		width: 100%;
		height: 100%;
	}
</style>
