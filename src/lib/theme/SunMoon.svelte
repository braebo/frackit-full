<script>
	import { fly } from 'svelte/transition'
	import { theme } from './themer'
</script>

<template lang="pug">

		+key('$theme')
			.sunmoon(
				transition:fly='{{ y: -50, duration: 1000, opacity: 1 }}'
			)
				+if('$theme === "light"') ☀️
					+else 🌕

</template>

<style>
	.sunmoon  {
		position: absolute;
		top: 7px;
		
		font-size: 1.75em;
		
		user-select: none;
		cursor: pointer;

		filter: hue-rotate(150deg) saturate(0.5);
		transition: filter 0.5s;
	}
	.sunmoon:hover {
		filter: hue-rotate(0) saturate(0.5);
	}
</style>
