<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import PlayList from '$lib/components/PlayList.svelte';
	import VideoList from '$lib/components/VideoList.svelte';
	import selfProduce from '$lib/data/self-produce';

	const popularVideos = selfProduce.slice();

	const getRedirectLink = () => {
		return `/all-works?section=favourite`;
	};
</script>

<div style="min-height: 500px;">
	<section class="headline">
		<h1><span class="highlight">Eyoki Creative</span> is Creative Production House</h1>
	</section>

	<section class="">
		<Header href={getRedirectLink()}>All Time Favourite</Header>
		<VideoList items={popularVideos} />
	</section>

	<section class="works">
		<div>
			<Header href={getRedirectLink()}>Latest work you may like</Header>
			<PlayList items={[]} />
		</div>
		<div>
			<Header href={getRedirectLink()}>Most Popular on This Year (2022)</Header>
			<PlayList items={[]} />
		</div>
	</section>
</div>

<style lang="scss">
	h1 {
		font-size: 48px;
		line-height: 1.1;
		width: 60%;
	}

	section {
		padding: 1rem 0;
	}

	.headline {
		padding: 6rem 0 8rem;

		@media screen and (max-width: 600px) {
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
		padding: 1rem 0;
		justify-content: space-between;

		& > div {
			width: 48%;
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;

			& > div {
				margin: 1rem 0;
				width: 100%;
			}
		}
	}
</style>
