<script context="module" lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable, type Readable } from 'svelte/store';

	const KEY = {};

	interface MediaPlayer extends Readable<{ show: boolean; playing: boolean; video: Media | null }> {
		preview: (v: Media) => void;
		play: (v: Media) => void;
		close: () => void;
	}

	export const useMediaPlayer = () => {
		return getContext(KEY) as MediaPlayer;
	};
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import YouTubePlayer from 'yt-player';
	import type { Media } from './';
	import TagList from './TagList.svelte';

	let player: HTMLDivElement;
	let ytPlayer: YouTubePlayer;

	export let video: Media | null = null;
	export let show = false;

	const store$ = writable({ show, video, playing: false });

	const close = () => {
		ytPlayer?.stop();
		store$.update((v) => Object.assign(v, { show: false, video, playing: false }));
	};

	const preview = (item: Media) => {
		store$.update((v) => Object.assign(v, { show: true, video: item }));
	};

	const play = (item: { link: string }) => {
		if (!ytPlayer) {
			ytPlayer = new YouTubePlayer(player);
			ytPlayer.on('playing', () => {
				console.log(ytPlayer.getDuration()); // => 351.521
			});
			ytPlayer.on('timeupdate', console.log);
		}
		store$.update((v) => Object.assign(v, { playing: true }));
		ytPlayer.setVolume(100);
		ytPlayer.load(item.link, true);
	};

	setContext<MediaPlayer>(KEY, {
		close,
		preview,
		play,
		subscribe: store$.subscribe
	});

	$: if (browser && show) {
		const { scrollY } = window;
		document.body.setAttribute('style', `position: fixed; top: -${scrollY}px;`);
		document.body.setAttribute('data-scrolly', `${scrollY}`);
	} else if (browser && !show) {
		document.body.removeAttribute('style');
		window.scrollTo(0, Number(document.body.getAttribute('data-scrolly')) || 0);
	}

	const playVideo = (item: { link: string }) => () => {
		play(item);
	};
</script>

<slot />
{#if $store$.show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="overlay" in:fade out:fade on:click|stopPropagation={close} />
{/if}
<div class="modal-box" class:hidden={!$store$.show || !$store$.video}>
	<div class="dialog">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span class="close-btn" on:click={close}
			>{@html `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}</span
		>
		<div class="aspect-ratio">
			<div class="cover">
				<div class="video-player" bind:this={player} />
				{#if $store$.video && !$store$.playing}
					<img out:fade class="cover-img" src={$store$.video.cover} alt={$store$.video.title} />
				{/if}
			</div>
			{#if $store$.video && !$store$.playing}
				<div class="control-list">
					<button class="play-btn" on:click={playVideo($store$.video)}>
						{@html `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1378 10.5689L9.60498 7.30252C8.40816 6.70411 7 7.5744 7 8.91249V15.0876C7 16.4257 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8415 17.3171 11.1586 16.1378 10.5689Z" fill="#fff"/></svg>`}
						<span>Play</span>
					</button>
				</div>
			{/if}
		</div>
		<div class="container">
			{#if $store$.video}
				<section class="content">
					<section class="main">
						<h2>{$store$.video.title}</h2>
						<div class="extra-info">
							{#if $store$.video.client}
								<span class="client"><img src={$store$.video.client.imageUrl} alt="" /></span>
								<span class="name">{$store$.video.client.name}</span>
							{/if}
							<!-- <span class="timerange">{video.time}</span>
							{#each video.labels as item}
								<span>{item}</span>
							{/each} -->
						</div>
						{#if $store$.video.shortDesc}
							<div>{@html $store$.video.shortDesc}</div>
						{:else if $store$.video.lyrics}
							{#each $store$.video.lyrics as [_, lyric]}
								<div>{lyric}</div>
							{/each}
						{/if}
					</section>
					<section class="info">
						<!-- <div>Genre</div> -->
						<div>
							<span class="label"
								>{`Director${$store$.video.directors.length > 1 ? 's' : ''}:`}</span
							>
							<span><TagList items={$store$.video.directors} /></span>
						</div>
						{#if $store$.video.writers}
							<div>
								<span class="label">{`Writer${$store$.video.writers.length > 1 ? 's' : ''}:`}</span>
								<span><TagList items={$store$.video.writers} /></span>
							</div>
						{/if}
						{#if $store$.video.dps}
							<div>
								<span class="label"
									>{`Cinematographer${$store$.video.dps.length > 1 ? 's' : ''}:`}</span
								>
								<span><TagList items={$store$.video.dps} /></span>
							</div>
						{/if}
						{#if $store$.video.editors}
							<div><span class="label">Editor:</span><TagList items={$store$.video.editors} /></div>
						{/if}
						{#if $store$.video.casts}
							<div>
								<span class="label">Cast:</span>
								<TagList items={$store$.video.casts} />
							</div>
						{/if}
						<div><span class="label">Produced By:</span>{$store$.video.produceBy}</div>
					</section>
				</section>
				{#if $store$.video.bts}
					<section style="padding-top: 40px">
						<header>
							<h1>Behind the Scene</h1>
						</header>
						<ul class="related-video-list">
							<li>
								<div class="thumbnail">
									<div class="aspect-ratio">
										<img
											class="cover-img"
											src={$store$.video.bts.imageUrl}
											alt={$store$.video.bts.title}
										/>
									</div>
								</div>
								<div class="video-info">
									<h3>{$store$.video.bts.title}</h3>
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<span on:click={playVideo($store$.video.bts)}>Play now</span>
								</div>
							</li>
						</ul>
					</section>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	$paddingHorizontal: 2rem;

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}

	.modal-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		overflow-y: auto;
		will-change: scroll-position;
		z-index: 3;

		&.hidden {
			display: none;
		}
	}

	.dialog {
		position: absolute;
		width: 100%;
		left: auto;
		top: 0;
		background: #fff;
		min-height: 100px;
		margin: 0 auto;
		overflow: hidden;

		.close-btn {
			position: absolute;
			cursor: pointer;
			top: 1rem;
			right: 1rem;
			border-radius: 50%;
			width: 34px;
			height: 34px;
			justify-content: center;
			align-items: center;
			display: inline-flex;
			transition: background-color 0.5s;
			background-color: #dcdcdc;
			z-index: 1;

			:global(svg) {
				width: calc(100% - 8px);
				height: calc(100% - 8px);
			}
		}

		.aspect-ratio {
			position: relative;
			display: block;
			padding-top: 56.25%;
			height: 0;
			overflow: hidden;
			background: #f5f5f5;

			.cover,
			.cover-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}

		.video-player {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		.control-list {
			position: absolute;
			bottom: 5%;
			left: $paddingHorizontal;

			.play-btn {
				cursor: pointer;
				display: flex;
				align-items: center;
				border: none;
				min-height: 32px;
				padding: 0 2.5rem 0 2rem;
				border-radius: 3px;
				background: red;
				color: #fff;
			}
		}

		.container {
			padding: 1rem 1.5rem;
			padding-bottom: 60px;
		}

		.content {
			display: flex;
			flex-direction: column;
			width: 100%;

			.main {
				flex-grow: 1;
				padding-right: $paddingHorizontal;
			}

			.info {
				min-width: 280px;
				padding: 1rem 0;
				padding-left: 0;
			}
		}

		.extra-info {
			display: flex;
			align-items: center;
			// justify-content: space-around;
			padding: 0.65rem 0;

			.client {
				width: 50px;
				height: 50px;
				border-radius: 2px;
				overflow: hidden;
			}

			.name {
				margin-left: 12px;
			}

			// .timerange {
			// 	display: inline-flex;
			// 	border: 1px solid #dcdcdc;
			// 	line-height: 24px;
			// 	height: 26px;
			// 	padding: 0 8px;
			// 	border-radius: 3px;
			// 	font-size: 12px;
			// }
		}

		.label {
			font-size: 12px;
			color: #3a3d42;
			margin-right: 6px;
		}

		.related-video-list {
			list-style: none;
			list-style-position: inside;
			margin-top: 12px;

			li {
				display: flex;
				flex-direction: column;
				// align-items: center;

				.thumbnail {
					width: 100%;
				}

				.video-info {
					padding: 0.65rem 0;
				}
			}
		}

		@media screen and (min-width: 680px) {
			width: 80%;
			top: 2rem;
			max-width: 1024px;
			border-radius: 12px;
			box-shadow: 0 0 26px rgba(0, 0, 0, 0.3);
			transform-origin: 50% 12.5%;

			.content {
				flex-direction: row;
			}

			.related-video-list {
				li {
					flex-direction: row;

					.thumbnail {
						max-width: 320px;
					}

					.video-info {
						padding: 0.65rem 1rem;
						flex-grow: 1;
					}
				}
			}
		}
	}
</style>
