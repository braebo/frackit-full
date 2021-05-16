<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte'
	import List from '$lib/List.svelte'
</script>


<template lang="pug">

	svelte:head
		title Home

	section
		h1
			.welcome
				picture
					source(srcset="svelte-welcome.webp" type="image/webp")
					img(
						src="svelte-welcome.png"
						draggable="false"
						alt="Welcome"
					)

		List

		Counter

</template>


<style>
	section {
		display: flex;
		flex-direction: column;
		flex: 1;

		justify-content: center;
		align-items: center;
	}

	h1 {
		position: absolute;
		right: 0;
		left: 0;
		top: 0;

		width: 100%;

		margin: auto;

		pointer-events: none;
	}

	.welcome {
		position: relative;

		width: 100%;
	}

	.welcome img {
		position: absolute;

		top: clamp(100px, 20vw, 20%);
		right: 0;
		left: 0;
		
		width: 100%;
		max-width: 1000px;
		
		margin: auto;

		user-select: none;

		filter: hue-rotate(190deg)
	}
</style>
