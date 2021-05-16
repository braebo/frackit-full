/**
 * Fires a custom event when a mouse click is detected outside of the attached HTMLElement.
 * @example
 * <script>
 *     import Modal from './Modal.svelte'
 *     let showModal = false
 * </script>
 * /// Modal.svelte
 * <script>
 *     export let showModal;
 * </script>
 * 
 * <div id="modal" use:clickOutside on:click_outside={() => showModal = false}>
 *     <slot />
 * </div>
 * 
 */
export function clickOutside(node) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
}