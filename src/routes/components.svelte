<script>
	import { showModal } from '$lib/stores/modal'
	import Button from '$lib/ui/Button.svelte'
	import Modal from '$lib/ui/Modal.svelte'
</script>


<template lang="pug">

	section.modal

		Button(on:click!='{() => $showModal = true}') Modal

	Modal(title="Awesome!")
		p More components coming soon!

</template>


<style>
	.modal {
		margin-top: 5em;
		display: grid;
		justify-content: center;
	}
	.todo {
		text-align: center;
		margin: 5rem auto;
		font-family: var(--font-secondary)
	}
</style>