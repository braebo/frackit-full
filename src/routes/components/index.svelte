<script>
	import { showModal } from '$lib/stores/modal'
	import Button from '$lib/ui/Button.svelte'
	import Modal from '$lib/ui/Modal.svelte'
</script>


<template lang="pug">

	section.modal

		Button(on:click!='{() => $showModal = true}') Modal

		Modal

</template>


<style>
	.modal {
		margin-top: 5em;
		display: grid;
		justify-content: center;
	}
</style>