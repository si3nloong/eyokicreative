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
		background: #f5f5f5;

		// &::after {
		// 	display: block;
		// 	content: '';
		// 	width: 100%;
		// 	height: 100%;
		// 	border: 1px solid #f7f7f7;
		// }
	}
</style>
