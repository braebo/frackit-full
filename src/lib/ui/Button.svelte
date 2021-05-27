<script>
	export let text = 'var(--dark-a)'
	export let display = ''
	export let bg = 'var(--light-a)'
	export let style = ''
</script>

<button on:click style="background:{bg};color:{text};display:{display};{style}">
	<slot> Click Me </slot>
</button>

<style>
	button {
		width: max-content;
		padding: 0.5em 1em;
		margin: 1em 0.5em;

		border: none;
		border-radius: 5px;
		box-shadow: 0 2px 4px #0002;

		font-family: var(--font-primary);

		cursor: pointer;

		transform: scale(1);
		transition: 0.2s
	}
	button:hover {
		box-shadow: 0 4px 8px #0002;
		transform: scale(1.05);
	}
	button:focus, button:active {
        box-shadow: 0 0 1.5px 1px var(--brand-a);
	}
	p {
		height: 50%;
	}
</style>