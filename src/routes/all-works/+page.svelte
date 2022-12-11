<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Media } from '$lib/components';
	import { useMediaPlayer } from '$lib/components/MediaPlayer.svelte';
	import { isMobile } from '$lib/utils';

	export let data: { video: Media | null; producedBys: Media[]; dps: Media[] } = {
		video: null,
		dps: [],
		producedBys: []
	};

	const player = useMediaPlayer();
	if (data.video) {
		player.preview(data.video);
	} else {
		const params = new URLSearchParams($page.url.searchParams);
		const id = params.get('id');

		if (id) {
			const video = data.producedBys.concat(data.dps).find((v) => v.link == id);
			if (video) {
				player.preview(video);
			}
		}
	}

	const onPreview = (item: Media) => () => {
		if (isMobile()) {
			goto(`/work/${item.link}`);
			return;
		}
		player.preview(item);
	};

	const getID = (item: Media, i: number) => {
		return `no-${i}`;
	};
</script>

<section>
	<h2>Produced by Eyoki Creative</h2>
	<ul class="video-list">
		{#each data.producedBys as item, i (getID(item, i))}
			<li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="d-16-9 thumbnail" on:click={onPreview(item)}>
					<img src={item.cover} alt={item.title} />
				</div>
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Cinematography works</h2>
	<ul class="video-list">
		{#each data.dps as item, i (getID(item, i))}
			<li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="d-16-9 thumbnail" on:click={onPreview(item)}>
					<img src={item.cover} alt={item.title} />
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		padding: var(--padding);

		@media screen and (min-width: 600px) {
			padding: var(--padding) 0;
		}
	}

	.video-list {
		list-style: none;
		list-style-position: inside;
		display: flex;
		padding-top: var(--padding-sm);
		margin: 0 -10px;
		flex-flow: row wrap;
		justify-content: space-between;

		li {
			width: 100%;
			padding: 10px;

			.thumbnail {
				cursor: pointer;
				background-color: var(--image-placeholder-color);
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: var(--image-placeholder-color);
			}

			@media screen and (min-width: 640px) {
				width: 50%;
			}

			@media screen and (min-width: 800px) {
				width: 33.33%;
			}

			@media screen and (min-width: 1024px) {
				width: 25%;
			}
		}

		&::after {
			content: '';
			flex: auto;
		}
	}
</style>
