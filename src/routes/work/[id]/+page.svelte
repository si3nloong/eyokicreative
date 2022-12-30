<script lang="ts">
	import type { Media } from '$lib/components';
	import VideoDetail from '$lib/components/VideoDetail.svelte';

	export let data: { video: Media };

	const { video } = data;
</script>

<div class="cover-box">
	<div class="d-16-9 cover">
		<img src={video.cover} alt={video.title} />
	</div>
</div>
<section class="info-box">
	<VideoDetail {video} type="small" />
</section>

<style lang="scss">
	@import '../../global.scss';

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

	@media screen and (min-width: $minWidth) {
		.cover-box {
			padding: 0 var(--padding);
		}
	}
</style>
