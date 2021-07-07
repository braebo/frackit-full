<script>
	export let text = 'var(--dark-a)'
	export let texthover = 'var(--brand-a)'
	export let display = ''
	export let bg = 'var(--light-a)'
	export let bghover = 'var(--light-a)'
	export let style = ''
</script>

<button
	on:click
	style="
		--bg: {bg};
		--bghover: {bghover};
		--text: {text};
		--texthover: {texthover};
		display: {display};
		{style}
	"
>
	<slot>Click Me</slot>
</button>

<style>
	button {
		width: max-content;
		margin: 1em 0.5em;
		padding: 0.5em 1em;

		font-family: var(--font-primary);

		color: var(--text);

		border: none;
		border-radius: 5px;
		background: var(--bg);
		box-shadow: 0 2px 4px #00000022;

		cursor: pointer;
		transition: 0.2s;

		transform: scale(1);
	}
	button:hover {
		background: var(--bghover);
		color: var(--texthover);
		box-shadow: 0 4px 8px #00000022;

		transform: scale(1.05);
	}
	button:focus,
	button:active {
		box-shadow: 0 0 1.5px 1px var(--brand-a);

		transform: scale(0.95);
		transition: 0.1s;
	}
</style>
