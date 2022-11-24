<script lang="ts">
	import { onMount } from 'svelte';

	export let src = '';
	export let alt = '';
	export let width = 60;
	export let height = 60;

	let show = false;
	onMount(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			show = true;
		};
	});
</script>

<span class="cover" style:width="{width}px" style:height="{height}px" style:min-width="{width}px">
	{#if show}
		<img {src} {alt} />
	{/if}
</span>

<style lang="scss">
	.cover {
		position: relative;
		display: inline-flex;
		background-color: var(--image-placeholder-color);

		&::after {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border: 1px solid rgba(255, 255, 255, 0.05);
		}
	}
</style>
