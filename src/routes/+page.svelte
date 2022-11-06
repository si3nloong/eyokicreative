<script lang="ts">
	import Header from '$lib/components/Header.svelte';
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
			id: '2.1',
			title: 'VIVO V20 SE Aquamarine',
			shortDesc: `The new trendsetter has arrived! vivo V20 SE #Aquamarine is picking up steam in 2020 with its trendy new colour!`,
			cover: '/images/cover/vivo-v20.webp',
			imageUrl: '/images/vivo-cover.png',
			produces: ['Eyoki Creative'],
			directors: ['Byran'],
			dps: ['Yuki (Eyoki Creative)'],
			editors: ['WT (Eyoki Creative)'],
			casts: ['Girl'],
			labels: ['Commercial'],
			link: 'vvuvjRDAJAk',
			time: '00:30'
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
			cover: '/images/cover/truth-or-myth.webp',
			imageUrl: '/images/skmagic-cover.png',
			directors: ['Esham'],
			dps: ['Yuki (Eyoki Creative)'],
			editors: ['Billy Lau'],
			casts: ['Arnold', 'Justin'],
			labels: ['Short Film'],
			link: 'qDXHVPzqSMQ',
			time: '04:20'
		},
		// {
		// 	id: '2',
		// 	title: `#BikinSampaiJadi Caraku, Karyaku | Street Artist Kenji Chai`,
		// 	shortDesc: '',
		// 	cover: '/images/cover/lg-puri-care.webp',
		// 	imageUrl: '/images/hotlink-cover.png',
		// 	directors: ['Kern Wei'],
		// 	dps: ['Yuki (Eyoki Creative)'],
		// 	editors: ['Chong Kern Wei'],
		// 	casts: [],
		// 	labels: ['Short Film'],
		// 	link: 'ibc3ViFGL6U',
		// 	time: '06:43'
		// },
		{
			id: '3',
			title: `LG PuriCare™ Self-Service Tankless Water Purifier`,
			shortDesc: '',
			cover: '/images/cover/lg-puri-care.webp',
			imageUrl: '/images/lg.jpeg',
			directors: [],
			dps: ['Yuki (Eyoki Creative)'],
			editors: ['Chong Kern Wei'],
			casts: [],
			labels: ['Short Film'],
			link: '52r0k2qptKI',
			time: '01:30'
		}
		// {
		// 	id: '4',
		// 	title: `OPPO Find X5 Pro 5G featuring Owen Yap`,
		// 	shortDesc: '',
		// 	cover: '/images/cover/oppo.webp',
		// 	imageUrl: '/images/lg-cover.jpeg',
		// 	directors: ['CK Lim'],
		// 	dps: ['Yuki (Eyoki Creative)'],
		// 	editors: ['Chong Kern Wei'],
		// 	casts: [],
		// 	labels: ['Short Film'],
		// 	link: '52r0k2qptKI',
		// 	time: '01:00'
		// }
	];

	const impactfulVideos = [
		{
			id: '1',
			title: `My Ba's Radio`,
			shortDesc:
				'An ailing father living in a bubble continues to find connections with his deceased wife through a small radio. This is much to the disapproval of his adult son who has returned from the city to take care of him.',
			cover: '/images/cover/myba-radio.webp',
			imageUrl: '/images/myba-cover.jpg',
			produces: ['Eyoki Creative'],
			directors: ['Victor Yee Fei Chen'],
			dps: ['Yuki (Eyoki Creative)'],
			writers: ['Victor Yee Fei Chen', 'Andy Darrel Gomes'],
			editors: ['Anonymous'],
			casts: ['Fai Chen', 'Yee Swee Tam'],
			labels: ['Short Film'],
			link: '7wQbAer9g4k',
			time: '11:00'
		},
		{
			id: '1a',
			title: `The Kingdom and The Beauty`,
			shortDesc:
				'An ailing father living in a bubble continues to find connections with his deceased wife through a small radio. This is much to the disapproval of his adult son who has returned from the city to take care of him.',
			cover: '/images/cover/kingdom-and-beauty.webp',
			imageUrl: '/images/cover/kingdom-and-beauty.webp',
			produces: ['Eyoki Creative'],
			directors: ['Victor Yee Fei Chen'],
			dps: ['Yuki (Eyoki Creative)'],
			writers: ['Victor Yee Fei Chen', 'Andy Darrel Gomes'],
			editors: ['Anonymous'],
			casts: ['Fabian Loo', 'Pearlly Chua'],
			labels: ['Short Film'],
			link: 'N41rOM88c40',
			time: '14:59'
		},
		{
			id: '2.1',
			title: 'VIVO V20 SE Aquamarine',
			shortDesc: `The new trendsetter has arrived! vivo V20 SE #Aquamarine is picking up steam in 2020 with its trendy new colour!`,
			cover: '/images/cover/vivo-v20.webp',
			imageUrl: '/images/vivo-cover.png',
			produces: ['Eyoki Creative'],
			directors: ['Byran'],
			dps: ['Yuki (Eyoki Creative)'],
			editors: ['WT (Eyoki Creative)'],
			casts: ['Girl'],
			labels: ['Commercial'],
			link: 'vvuvjRDAJAk',
			time: '00:30'
		},
		{
			id: '3',
			title: '凡人不懂愛',
			shortDesc: `天空漆黑 星不會光照我<br/>輾轉反側 悲傷裡躺臥<br/>我亦習慣一個 怕又試不小心惹禍<br/>無用呼救了 誰又會救助<br/><br/>風中穿梭 只得你心痛我<br/>低聲哭泣 只得你可以聆聽我<br/>如沒身份的魔 凡人不懂愛我<br/>無從解釋對錯 但你卻徹底相信我<br/><br/>無須刻意想起 仍然深刻銘記<br/>如若心聲相通 憑直覺都可感覺你<br/>若消散成為氧氣<br/>停留世界靜靜懷抱你<br/>掉眼淚 原來是掛念你<br/><br/>風中穿梭 只得你温暖我<br/>
低聲哭泣 只得你敢再行近我<br/>如沒身份的魔 凡人不懂愛我<br/>懷疑給詛咒過 但你卻放膽擁抱我<br/><br/>無須刻意想起 仍然深刻銘記<br/>如若心聲相通 憑直覺都可感覺你<br/>若灰飛成為氧氣<br/>停留世界靜靜懷抱你<br/>掉眼淚 原來我掛念你<br/><br/>當天真的灰心到 很想拋棄自己<br/>你卻拼命只想與我一起<br/>才明白愛情 超出生與死<br/><br/>無須刻意想起 仍然深刻銘記<br/>如若心聲相通 憑直覺都可感覺你<br/>若灰飛成為氧氣 我只要剩低一口氣<br/>未氣絕 都想叫喚你<br/>掉眼淚 只因掛念你`,
			cover: '/images/cover/justin-lan.webp',
			imageUrl: '/images/justin-lan.webp',
			produces: ['Eyoki Creative'],
			directors: ['Yuki (Eyoki Creative)'],
			dps: ['Yuki (Eyoki Creative)'],
			editors: ['WT (Eyoki Creative)'],
			casts: ['Juztin Lan'],
			labels: ['MV'],
			link: 'rJiLFWnyrD8',
			time: '03:31'
		},
		{
			id: '4',
			title: '心声愿',
			shortDesc: `天空漆黑 星不會光照我<br/>輾轉反側 悲傷裡躺臥<br/>我亦習慣一個 怕又試不小心惹禍<br/>無用呼救了 誰又會救助<br/><br/>風中穿梭 只得你心痛我<br/>低聲哭泣 只得你可以聆聽我<br/>如沒身份的魔 凡人不懂愛我<br/>無從解釋對錯 但你卻徹底相信我<br/><br/>無須刻意想起 仍然深刻銘記<br/>如若心聲相通 憑直覺都可感覺你<br/>若消散成為氧氣<br/>停留世界靜靜懷抱你<br/>掉眼淚 原來是掛念你<br/><br/>風中穿梭 只得你温暖我<br/>
低聲哭泣 只得你敢再行近我<br/>如沒身份的魔 凡人不懂愛我<br/>懷疑給詛咒過 但你卻放膽擁抱我<br/><br/>無須刻意想起 仍然深刻銘記<br/>如若心聲相通 憑直覺都可感覺你<br/>若灰飛成為氧氣<br/>停留世界靜靜懷抱你<br/>掉眼淚 原來我掛念你<br/><br/>當天真的灰心到 很想拋棄自己<br/>你卻拼命只想與我一起<br/>才明白愛情 超出生與死<br/><br/>無須刻意想起 仍然深刻銘記<br/>如若心聲相通 憑直覺都可感覺你<br/>若灰飛成為氧氣 我只要剩低一口氣<br/>未氣絕 都想叫喚你<br/>掉眼淚 只因掛念你`,
			cover: '/images/koe-yeet-cover.webp',
			imageUrl: '/images/cover/koe-yeet.webp',
			produces: ['Eyoki Creative'],
			directors: ['Yuki (Eyoki Creative)'],
			dps: ['Yuki (Eyoki Creative)'],
			editors: ['Willie (Eyoki Creative)'],
			casts: ['Koe Yeet'],
			labels: ['MV'],
			link: '1GY8f2zwUh8',
			time: '03:22'
		}
		// {
		// 	id: '3',
		// 	title: 'Nespresso x RED Hong Yi - Doing Is Everything',
		// 	shortDesc: 'Something fire',
		// 	cover: '/images/cover/nepresso-redhongyi.webp',
		// 	imageUrl: '/images/nespresso-cover.jpeg',
		// 	directors: ['Chong Kern Wei'],
		// 	dps: ['Yuki (Eyoki Creative)'],
		// 	editors: ['Chong Kern Wei'],
		// 	casts: ['RED HongYi, Wong KaiYi', 'CheeChung', 'Cedric', 'YuEn'],
		// 	labels: ['Ads'],
		// 	link: '7CUmtwdDbi4',
		// 	time: '04:36'
		// },
		// {
		// 	id: '4',
		// 	title: 'The Merdeka dUCk by Kenji Chai',
		// 	shortDesc: 'Something fire',
		// 	cover: '/images/cover/duck.webp',
		// 	imageUrl: '/images/duck-cover.png',
		// 	directors: ['Kern Wei'],
		// 	dps: ['Yuki (Eyoki Creative)'],
		// 	editors: ['Chong Kern Wei'],
		// 	casts: [],
		// 	labels: ['Ads'],
		// 	link: 'W19dreFxsbQ',
		// 	time: '01:06'
		// },
		// {
		// 	id: '5',
		// 	title: 'Sangka Baik',
		// 	shortDesc: 'Something fire',
		// 	cover: '/images/cover/lg-puri-care.webp',
		// 	imageUrl: '/images/allianz-cover.png',
		// 	directors: [],
		// 	dps: ['Yuki (Eyoki Creative)'],
		// 	editors: ['Chong Kern Wei'],
		// 	casts: [],
		// 	labels: ['Ads'],
		// 	link: 'L7dfKZ4bBPU',
		// 	time: '02:17'
		// }
	];
</script>

<div style="min-height: 500px;">
	<section class="headline">
		<h1><span class="highlight">Eyoki Creative</span> is Creative Production House</h1>
		<!-- <h2>We are Fun and Young.</h2> -->
	</section>

	<section class="">
		<Header href="/">Latest work you may like</Header>
		<VideoList items={impactfulVideos.slice()} />
	</section>

	<section class="works">
		<div>
			<h3>Most Popular on This Year (2022)</h3>
			<PlayList items={popularVideos} />
		</div>
		<div>
			<h3>Most Favourite of All Time</h3>
			<PlayList items={impactfulVideos} />
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
