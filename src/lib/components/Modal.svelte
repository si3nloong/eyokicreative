<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	let className = '';
	export { className as class };
	export let overlayStyle = '';
	export let show = false;

	const onClose = () => {
		show = false;
		dispatch('close', {});
	};
</script>

{#if show}
	<div
		class="overlay"
		role="presentation"
		in:fade
		out:fade
		on:click={onClose}
		style={overlayStyle}
	/>
{/if}
<div class="modal-box {className}" class:hidden={!show}>
	<div class="dialog" role="dialog">
		<slot />
	</div>
</div>

<style lang="scss">
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}

	.modal-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		overflow-y: auto;
		will-change: scroll-position;
		z-index: 1;
		pointer-events: none;

		&.hidden {
			display: none;
		}
	}

	.dialog {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--background-color);
		min-height: 100px;
		margin: 0 auto;
		overflow: hidden;
		pointer-events: auto;
		z-index: 2;

		@media screen and (min-width: 680px) {
			width: 80%;
			max-width: 1024px;
		}
	}
</style>
