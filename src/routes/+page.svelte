<script lang="ts">
	import type { Media } from '$lib/components';
	import Header from '$lib/components/Header.svelte';
	import PlayList from '$lib/components/PlayList.svelte';
	import VideoList from '$lib/components/VideoList.svelte';

	export let data: { allTimeFavorite: Media[]; latestVideos: Media[]; popularVideos: Media[] } = {
		allTimeFavorite: [],
		latestVideos: [],
		popularVideos: []
	};

	const getRedirectLink = () => {
		return `/all-works?section=favourite`;
	};
</script>

<div class="main-box">
	<section class="headline">
		<!-- <h1><span class="highlight">Eyoki Creative</span> is Creative Production House</h1> -->
		<h1>
			WE FOCUS ON <span class="highlight">TEAM</span> AND
			<span class="highlight">CULTURE</span>
		</h1>
	</section>

	<section class="">
		<Header href={getRedirectLink()}>All Time Favourite</Header>
		<VideoList items={data.allTimeFavorite} />
	</section>

	<section class="works">
		<div>
			<Header href={getRedirectLink()}>Latest works</Header>
			<PlayList items={data.latestVideos} />
		</div>
		<div>
			<Header href={getRedirectLink()}>Most Popular</Header>
			<PlayList items={data.popularVideos} />
		</div>
	</section>
</div>

<style lang="scss">
	@import './global.scss';

	.headline {
		padding: 6rem 0 8rem;

		h1 {
			font-size: 48px;
			line-height: 1.1;
			width: 60%;
		}

		@media screen and (max-width: $minWidth) {
			padding: 0 0 3.5rem;
		}
	}

	.highlight {
		background: linear-gradient(60deg, red, blue);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.works {
		display: flex;
		padding: 1.5rem 0;
		flex-direction: column;
		justify-content: space-between;

		& > div {
			margin: 1rem 0;
			width: 100%;
		}

		@media screen and (min-width: $minWidth) {
			flex-direction: row;

			& > div {
				width: 48%;
			}
		}
	}
</style>
