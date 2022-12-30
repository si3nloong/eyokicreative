<script lang="ts">
	import { page } from '$app/stores';
	import MediaPlayer from '$lib/components/MediaPlayer.svelte';
	import './app.scss';
	import MasterLayout from './MasterLayout.svelte';

	const image = $page.data.image || '/logo.png';
	const title = $page.data.title || `Eyoki Creative`;
	const description =
		$page.data.description ||
		`Eyoki Creative is a Malaysia creative production company that led by a famouse female director of photography (DoP).`;

	const onTimeUpdate = (v: CustomEvent<number>) => {
		const params = new URLSearchParams($page.url.searchParams);
		params.set('time', `${v.detail}`);
		history.replaceState({}, '', `?${params.toString()}`);
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://eyokicreative.com" />
	<meta property="og:site_name" content={title} />
</svelte:head>

<MediaPlayer on:timeupdate={onTimeUpdate}>
	<MasterLayout>
		<slot />
	</MasterLayout>
</MediaPlayer>
