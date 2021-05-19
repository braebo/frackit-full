<script>
	import { toggleTheme, initTheme } from './themer'
	import { fly } from 'svelte/transition'
	import SunMoon from './SunMoon.svelte'

	initTheme()
</script>


<template lang='pug'>

	.switch(on:click='{toggleTheme}')
		slot
			SunMoon

</template>