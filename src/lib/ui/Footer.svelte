<script>
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	
	let mounted = false
	onMount(() => mounted = true)
</script>

<template lang='pug'>
	
	+if('mounted')
		.footer(in:fly='{{y: 10, delay: 1500, duration: 750 }}')

			p Made with 💙 &nbsp; by 
				a(href='https://github.com/fractalhq') Fractal

			a(href='https://github.com/fractalhq/frackit' in:scale='{{ delay: 1750 }}')
				svg(viewBox='5 5 40 40' width='30')
					title Github
					path(fill='var(--dark-a)' d='M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z')

</template>

<style>
	.footer {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		margin-top: auto;
	}

	footer a {
		font-weight: bold;
		position: relative;
	}
	svg {
		transition: 0.3s;
		transform: scale(1) translateY(-8px);
		color: var(--dark-a);
		fill: var(--dark-a);
	}

	svg:hover {
		transform: scale(1.2) translateY(-8px);
	}
</style>
