<script>
	import { toggleTheme, initTheme } from '$lib/theme/utils'
	import { fly } from 'svelte/transition'
	import SunMoon from './SunMoon.svelte'
	import { onMount } from 'svelte'

	onMount(() => initTheme())
</script>


<template lang='pug'>

	.switch(on:click='{toggleTheme}')
		slot
			SunMoon

</template>