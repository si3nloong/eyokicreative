<script lang="ts">
	import VideoPlayer from '../components/VideoPlayer.svelte';
	import PlayList from '../components/PlayList.svelte';
	import VideoList from '../components/VideoList.svelte';

	const popularVideos = [
		{ id: '1', title: 'Just like Fire', shortDesc: 'Something fire', imageUrl: '', time: '08:00' },
		{ id: '2', title: 'Just like Fire', shortDesc: 'Something fire', imageUrl: '', time: '12:89' },
		{ id: '3', title: 'Just like Fire', shortDesc: 'Something fire', imageUrl: '', time: '06:88' },
		{ id: '4', title: 'Just like Fire', shortDesc: 'Something fire', imageUrl: '', time: '01:11' },
		{ id: '5', title: 'Just like Fire', shortDesc: 'Something fire', imageUrl: '', time: '03:77' }
	];
</script>

<section class="headline">
	<h1><span class="highlight">Eyoki Creative</span> is a Next Social Media Production House</h1>
	<!-- <h2>We are Fun and Young.</h2> -->
</section>

<section>
	<h3>Popular work you may like</h3>
	<VideoList items={popularVideos} />
</section>

<section class="works">
	<div>
		<h3>Most Popular on This Week</h3>
		<PlayList items={popularVideos} />
	</div>
	<div>
		<h3>Most Impactful</h3>
		<PlayList items={popularVideos} />
	</div>
</section>

<!-- <VideoPlayer /> -->
<style lang="scss">
	h1 {
		font-size: 48px;
		line-height: 1.1;
		width: 60%;
		margin-bottom: 1.5rem;
	}

	.headline {
		padding: 6rem 0 8rem;
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
			width: 49%;
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
