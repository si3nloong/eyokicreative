<script lang="ts">
	import PlayList from '$lib/components/PlayList.svelte';
	import VideoList from '$lib/components/VideoList.svelte';

	const latestVideos = [
		{
			id: '1',
			title: `My Ba's Radio`,
			shortDesc: `An ailing father living in a bubble continues to find connections with his deceased wife through a small radio. This is much to the disapproval of his adult son who has returned from the city to take care of him.`,
			imageUrl: '/images/myba-cover.jpg',
			casts: [],
			labels: ['Short Film'],
			link: '',
			time: '11:00'
		},
		{
			id: '2',
			title: `My Ba's Radio`,
			shortDesc: 'An ailing father living in a ',
			imageUrl: '/images/myba-cover.jpg',
			labels: ['Short Film'],
			link: '',
			time: '11:00'
		},
		{
			id: '3',
			title: `My Ba's Radio`,
			shortDesc: 'An ailing father living in a ',
			imageUrl: '/images/myba-cover.jpg',
			labels: ['Short Film'],
			link: '',
			time: '11:00'
		},
		{
			id: '4',
			title: `My Ba's Radio`,
			shortDesc: 'An ailing father living in a ',
			imageUrl: '/images/myba-cover.jpg',
			labels: ['Short Film'],
			link: '',
			time: '11:00'
		}
	];

	const popularVideos = [
		{
			id: '1',
			title: `SK magic | Truth or Myth?`,
			shortDesc: '',
			imageUrl: '/images/skmagic-cover.png',
			directors: ['xxx'],
			casts: [],
			labels: ['Short Film'],
			link: 'qDXHVPzqSMQ',
			time: '04:20'
		},
		{
			id: '2',
			title: `#BikinSampaiJadi Caraku, Karyaku | Street Artist Kenji Chai`,
			shortDesc: '',
			imageUrl: '/images/hotlink-cover.png',
			directors: ['Kern Wei'],
			casts: [],
			labels: ['Short Film'],
			link: 'ibc3ViFGL6U',
			time: '06:43'
		},
		{
			id: '3',
			title: `LG PuriCare™ Self-Service Tankless Water Purifier`,
			shortDesc: '',
			imageUrl: '/images/lg-cover.jpeg',
			directors: [],
			casts: [],
			labels: ['Short Film'],
			link: '52r0k2qptKI',
			time: '01:30'
		},
		{
			id: '4',
			title: `OPPO Find X5 Pro 5G featuring Owen Yap`,
			shortDesc: '',
			imageUrl: '/images/lg-cover.jpeg',
			directors: [],
			casts: [],
			labels: ['Short Film'],
			link: '52r0k2qptKI',
			time: '01:00'
		}
	];

	const impactfulVideos = [
		{
			id: '1',
			title: `My Ba's Radio`,
			shortDesc:
				'An ailing father living in a bubble continues to find connections with his deceased wife through a small radio. This is much to the disapproval of his adult son who has returned from the city to take care of him.',
			imageUrl: '/images/myba-cover.jpg',
			directors: ['Victor Yee Fei Chen'],
			writers: ['Victor Yee Fei Chen', 'Andy Darrel Gomes'],
			casts: ['Fai Chen', 'Yee Swee Tam'],
			labels: ['Short Film'],
			link: '7wQbAer9g4k',
			time: '11:00'
		},
		{
			id: '2',
			title: 'VIVO V20 SE Aquamarine',
			shortDesc: 'Something fire',
			imageUrl: '/images/vivo-cover.png',
			directors: ['Byran'],
			casts: [],
			labels: ['Ads'],
			link: 'vvuvjRDAJAk',
			time: '00:30'
		},
		{
			id: '3',
			title: 'Nespresso x RED Hong Yi - Doing Is Everything',
			shortDesc: 'Something fire',
			imageUrl: '/images/nespresso-cover.jpeg',
			directors: ['Victor Yee Fei Chen'],
			casts: [],
			labels: ['Ads'],
			link: '7CUmtwdDbi4',
			time: '04:36'
		},
		{
			id: '4',
			title: 'The Merdeka dUCk by Kenji Chai',
			shortDesc: 'Something fire',
			imageUrl: '/images/duck-cover.png',
			directors: ['Kern Wei'],
			casts: [],
			labels: ['Ads'],
			link: 'W19dreFxsbQ',
			time: '01:06'
		},
		{
			id: '5',
			title: 'Sangka Baik',
			shortDesc: 'Something fire',
			imageUrl: '/images/allianz-cover.png',
			directors: [],
			casts: [],
			labels: ['Ads'],
			link: 'L7dfKZ4bBPU',
			time: '02:17'
		}
	];
</script>

<div style="min-height: 500px;">
	<section class="headline">
		<h1><span class="highlight">Eyoki Creative</span> is Creative Production House</h1>
		<!-- <h2>We are Fun and Young.</h2> -->
	</section>

	<!-- <section>
		<h3>Latest work you may like</h3>
		<VideoList items={latestVideos} />
	</section> -->

	<section class="works">
		<div>
			<h3>Most Popular on This Year (2022)</h3>
			<PlayList items={popularVideos} />
		</div>
		<div>
			<h3>Most Impactful</h3>
			<PlayList items={impactfulVideos} />
		</div>
	</section>
</div>

<!-- <VideoPlayer /> -->
<style lang="scss">
	h1 {
		font-size: 48px;
		line-height: 1.1;
		width: 60%;
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
