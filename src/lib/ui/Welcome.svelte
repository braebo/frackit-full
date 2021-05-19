<!-- https://svelte.dev/repl/581f92c508bb4a2681e0939848733775?version=3.38.2 -->
<script>
	import { theme } from '$lib/theme/themer'
	let dark = $theme === 'dark'
	$: dark = $theme === 'dark' ? true : false

</script>

<div class:dark>
	{#key dark}
		<svg width="2048" height="495">
			<filter id="filter">
				<feConvolveMatrix
					preserveAlpha="true"
					divisor="3"
					bias="-3.2"
					order="3 3"
					kernelMatrix="
						10 10 -1.8
						-1 -1 -1
						0 0 0
					"
				/>
			</filter>
			<image
				id="welcome"
				href="/svelte-welcome.png"
				filter={dark ? 'url(#filter)' : 'hue-rotate(190deg)'}
				width="100%"
				height="100%"
			/>
		</svg>
	{/key}
</div>

<style>
	svg {
		position: absolute;

		top: clamp(min(100px, 10vw), 50vw, 20%);
		transform: translateY(-30%);
		right: 0;
		left: 0;

		width: 100%;
		max-width: 1000px;

		margin: auto;

		user-select: none;
	}
	div.dark {
		filter: hue-rotate(190deg) brightness(0.5) blur(0.5px);
	}

</style>
