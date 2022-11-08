<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	// TODO: set to prerender page
	const clients = [
		{
			alt: 'Vivo',
			src: 'vivo.png'
		},
		{
			alt: 'AIA',
			src: 'aia.png'
		},
		{
			alt: 'Appeton',
			src: 'appeton.png'
		},
		{
			alt: 'Nespresso',
			src: 'nespresso.png'
		},
		{
			alt: 'TGV Cinemas',
			src: 'tgv-cinemas.png'
		},
		{
			alt: 'Ducks',
			src: 'duck.png'
		},
		{
			alt: 'LG',
			src: 'lg.png'
		},
		{
			alt: 'Maxis',
			src: 'maxis.png'
		},
		{
			alt: 'The One Academy',
			src: 'toa.png'
		},
		{
			alt: 'The Make Over Guy',
			src: 'tmog.png'
		},
		{
			alt: 'Malaysia Airports',
			src: 'malaysia-airports.png'
		},
		{
			alt: 'myTukar',
			src: 'mytukar.png'
		},
		{
			alt: 'Edelman',
			src: 'edelman.png'
		},
		{
			alt: 'Coway',
			src: 'coway.png'
		},
		{
			alt: 'Haier',
			src: 'haier.png'
		},
		{
			alt: 'Jom Parking',
			src: 'jom-parking.png'
		},
		{
			alt: 'RHB',
			src: 'rhb.png'
		},
		{
			alt: 'Milwaukee',
			src: 'milwaukee.png'
		},
		{
			alt: 'Shell',
			src: 'shell.png'
		},
		{
			alt: 'Sunway Malls',
			src: 'sunway-malls.png'
		},
		{
			alt: 'Skechers',
			src: 'skechers.png'
		},
		{
			alt: 'Isetan',
			src: 'isetan.png'
		},
		{
			alt: 'OCBC',
			src: 'ocbc.png'
		},
		{
			alt: 'OPPO',
			src: 'oppo.png'
		},
		{
			alt: 'Pot Glasses',
			src: 'pg.png'
		},
		{
			alt: 'Allianz',
			src: 'allianz.png'
		}
	];
</script>

<Header>Our Clients</Header>

<ul class="client-list">
	{#each clients as item}
		<li class="">
			<img src="/logo/{item.src}" alt={item.alt} />
		</li>
	{/each}
</ul>

<style lang="scss">
	.client-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		li {
			margin: 6px;
			display: inline-flex;
			max-width: 100px;
		}
	}
</style>
