<script lang="ts">
	import type { Media } from '$lib/components';
	import VideoDetail from '$lib/components/VideoDetail.svelte';

	export let data: { video: Media };

	const { video } = data;
</script>

<div class="d-16-9 cover">
	<img src={video.imageUrl} alt={video.title} />
</div>
<section class="info-box">
	<VideoDetail {video} />
</section>

<style lang="scss">
	.cover {
		img {
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.info-box {
		padding: var(--padding);
	}
</style>
