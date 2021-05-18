<script>
	import { theme, toggleTheme, initTheme } from './themer';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	
	onMount(() => {
		initTheme();
	});
</script>

<div class="switch" on:click={() => toggleTheme()}>
	<slot>
		{#key $theme}
			<div transition:fly={{ y: -50, duration: 750, opacity: 1 }}>
				
				{#if $theme == 'light'}
					 ☀️
				{:else}
					 🌕
				{/if}
			
			</div>
		{/key}
	</slot>
</div>

<style>
	.switch {
		position: relative;
		font-size: 1.75em;
	}
	div {
		position: absolute;
		height: 30px;
		width: 30px;
	}
</style>
