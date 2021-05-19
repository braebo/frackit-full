<script lang="ts">
	import { onMount } from 'svelte';
	export let count: number;
	
	let confetti: ({particleCount, spread, ticks}) => void;
	
	onMount(async () => {
		const module: void = await import('https://cdn.skypack.dev/canvas-confetti').then((m) => {
			confetti = m.default
		})
	})
	
	$: if (count === 42) {
		confetti({particleCount: 200, spread: 120, ticks: 500})
	}
</script>