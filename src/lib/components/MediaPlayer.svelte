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

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import YouTubePlayer from 'yt-player';
	import type { Media } from './';
	import TagList from './TagList.svelte';
	import { isMobile } from '$lib/utils';
	import VideoDetail from './VideoDetail.svelte';
	import Modal from './Modal.svelte';

	let player: HTMLDivElement;
	let ytPlayer: YouTubePlayer;

	export let video: Media | null = null;
	export let show = false;

	let playing = false;
	const small = browser ? isMobile() : false;
	const store$ = writable({ show, video, playing: false });

	const handleClose = () => {
		ytPlayer?.stop();
		show = false;
		video = null;
		playing = false;
		store$.update((v) => Object.assign(v, { show, video, playing }));
	};

	const setupAndPlay = (link: string) => {
		if (!ytPlayer) {
			ytPlayer = new YouTubePlayer(player, {
				captions: false,
				fullscreen: true,
				// controls: false,
				related: false
			});
			// ytPlayer.on('playing', () => {
			// 	console.log(ytPlayer.getDuration()); // => 351.521
			// });
			// ytPlayer.on('timeupdate', console.log);
		}
		playing = true;
		store$.update((v) => Object.assign(v, { playing }));
		ytPlayer.setVolume(100);
		ytPlayer.load(link, true);
	};

	const preview = (item: Media) => {
		show = true;
		video = item;
		store$.update((v) => Object.assign(v, { show, video: item }));
		if (small) {
			setTimeout(() => {
				setupAndPlay(item.link);
			}, 100);
		}
	};

	const play = (item: { link: string }) => {
		setupAndPlay(item.link);
	};

	setContext<MediaPlayer>(KEY, {
		close: handleClose,
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

	const handleClosePlayer = () => {
		playing = false;
	};
</script>

<slot />

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="overlay" in:fade out:fade />
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-box" class:small class:hidden={!show || !video} on:click={handleClose}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="dialog" role="dialog" on:click|stopPropagation>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span class="close-btn" on:click={handleClose}
			>{@html `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}</span
		>
		<div class="aspect-ratio">
			<div class="cover">
				{#if video}
					<img class="cover-img" src={video.cover} alt={video.title} />
				{/if}
			</div>
			{#if video}
				<div class="control-list">
					<button class="play-btn" on:click={playVideo(video)}>
						{@html `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1378 10.5689L9.60498 7.30252C8.40816 6.70411 7 7.5744 7 8.91249V15.0876C7 16.4257 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8415 17.3171 11.1586 16.1378 10.5689Z" fill="#fff"/></svg>`}
						<span>Play</span>
					</button>
				</div>
			{/if}
		</div>
		<div class="content-box">
			{#if video}
				<VideoDetail {video} />
				{#if video.relatedVideos}
					<section style="padding-top: 50px">
						<ul class="related-video-list">
							{#each video.relatedVideos as item}
								<li on:click={playVideo(item)}>
									<div class="thumbnail">
										<div class="aspect-ratio">
											<img class="cover-img" src={item.imageUrl} alt={item.title} />
										</div>
									</div>
									<div class="video-details">
										<h3>{item.title}</h3>
										<section style="margin-top: 15px">
											<div><span class="label">Editor:</span><TagList items={item.editors} /></div>
											<div>
												<span class="label">Cinematographer:</span><TagList items={item.dps} />
											</div>
										</section>
										<div class="video-info" style="margin-top: 10px">
											<span>{`${item.time}mins`}</span>
										</div>
									</div>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			{/if}
		</div>
	</div>
</div>

<Modal show={playing} on:close={handleClosePlayer}>
	<div class="video-player-box">
		<div class="video-player" bind:this={player} />
	</div>
</Modal>

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
		z-index: 1;
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
		z-index: 1;

		&.hidden {
			display: none;
		}

		&.small {
			.box {
				display: none;
			}

			.dialog {
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			.control-list {
				display: none;
			}

			.close-btn {
				position: fixed;
				top: 15px;
				right: 15px;
			}
		}
	}

	.dialog {
		position: absolute;
		width: 100%;
		left: auto;
		top: 0;
		background: var(--background-color);
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
			background-color: var(--background-color);
			background-color: #f5f5f5;
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
			background-color: var(--image-placeholder-color);

			.cover,
			.cover-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
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

		.content-box {
			padding: 1rem 1.5rem;
			padding-bottom: 60px;
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

				.video-details {
					flex-grow: 1;
					padding: 0.65rem var(--padding);
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

			// .content {
			// 	flex-direction: row;
			// }

			.related-video-list {
				li {
					cursor: pointer;
					flex-direction: row;

					.thumbnail {
						max-width: 320px;
					}
				}
			}
		}
	}

	.video-player-box {
		position: relative;
		display: block;
		padding-top: 56.25%;
		height: 0;
		overflow: hidden;
		background-color: var(--image-placeholder-color);

		.video-player {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
