<script lang="ts">
	import type { Media } from '.';

	export let video: Media;

	let clientWidth = 0;
</script>

<div class="video" bind:clientWidth>
	<img src={video.imageUrl} alt={video.title} />
</div>

<style lang="scss">
	.video {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-top: 100%; /* 1:1 Aspect Ratio */
		text-align: center;

		img {
			display: block;
			position: absolute;
			background-color: var(--image-placeholder-color);
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
