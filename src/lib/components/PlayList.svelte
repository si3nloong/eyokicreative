<script context="module" lang="ts">
	type Item = {
		id: string;
		title: string;
		cover: string;
		shortDesc: string;
		imageUrl: string;
		directors: string[];
		writers?: string[];
		dps: string[];
		editors: string[];
		casts: string[];
		produces: string[];
		labels: string[];
		link: string;
		time: string;
	};
</script>

<script lang="ts">
	import { mediaPlayer } from '$lib/store';
	import YouTubePlayer from 'yt-player';
	import { fade } from 'svelte/transition';

	import Image from './Image.svelte';
	import TagList from './TagList.svelte';

	export let items: Item[] = [];

	let videoPLayer: HTMLDivElement;
	let selectedItem: Item | null = null;
	let player: YouTubePlayer;
	let showDialog = false;
	const onPreview = (item: Item) => () => {
		selectedItem = item;
		showDialog = true;
		const { scrollY } = window;
		document.body.setAttribute('style', `position: fixed; margin-top: -${scrollY}px`);
		document.body.setAttribute('data-scrolly', `${scrollY}`);
	};

	const onPlay = (item: Item) => (e: Event) => {
		mediaPlayer.play(item.link);
	};

	const closeDialog = () => {
		player?.stop();
		showDialog = false;
		playing = false;
		document.body.removeAttribute('style');
		window.scrollTo(0, Number(document.body.getAttribute('data-scrolly')) || 0);
	};

	let playing = false;
	const playVideo = () => {
		if (!player) {
			player = new YouTubePlayer(videoPLayer);
		}
		if (selectedItem) {
			player.load(selectedItem.link, true);
			playing = true;
		}
	};
</script>

<ul>
	{#each items as item (item.id)}
		<li on:click={onPreview(item)}>
			<Image src={item.imageUrl} alt={item.title} />
			<div class="body">
				<div class="caption">{item.title}</div>
				<!-- <div class="desc">{item.shortDesc}</div> -->
			</div>
			<span class="time">{item.time}</span>
			<!-- <span class="icon"
				>{@html `<svg width="14" height="16" viewBox="0 0 20 22" fill="#fff" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.59 12.51L13.42 16.49M13.41 5.51L6.59 9.49M19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.65685 8 7 9.34315 7 11ZM19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}</span
			> -->
			<span class="icon" on:click|stopPropagation={onPlay(item)}>
				{@html `<svg width="16" height="20" viewBox="0 0 16 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L15 10L1 19V1Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			</span>
		</li>
	{/each}
</ul>

{#if showDialog && selectedItem}
	<div class="modal">
		<div class="overlay" in:fade out:fade on:click|stopPropagation={closeDialog} />
		<div class="dialog">
			<span class="close-btn" on:click={closeDialog}
				>{@html `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}</span
			>
			<div class="aspect-ratio-box">
				<div class="cover">
					<div class="video-player" bind:this={videoPLayer} />
					{#if !playing}
						<img class="cover-img" src={selectedItem.cover} alt={selectedItem.title} />
					{/if}
				</div>
				{#if !playing}
					<footer>
						<button class="play-btn" on:click={playVideo}>
							<span>Play</span>
							{@html `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.1378 10.5689L9.60498 7.30252C8.40816 6.70411 7 7.5744 7 8.91249V15.0876C7 16.4257 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8415 17.3171 11.1586 16.1378 10.5689Z" fill="#fff"/></svg>`}
						</button>
					</footer>
				{/if}
			</div>
			<div class="content">
				<section class="main">
					<h2>{selectedItem.title}</h2>
					<!-- <div>Client</div> -->
					<div>{selectedItem.time}</div>
					<div>{@html selectedItem.shortDesc}</div>
				</section>
				<section class="info">
					<!-- <div>Genre</div> -->
					<div>
						<span class="label">Director:</span>
						<span><TagList items={selectedItem.directors} /></span>
					</div>
					{#if selectedItem.writers}
						<div>
							<span class="label">Writer:</span>
							<span><TagList items={selectedItem.writers} /></span>
						</div>
					{/if}
					{#if selectedItem.dps}
						<div>
							<span class="label">Director of Photography:</span>
							<span><TagList items={selectedItem.dps} /></span>
						</div>
					{/if}
					{#if selectedItem.editors}
						<div><span class="label">Editor:</span>{selectedItem.editors.join(', ')}</div>
					{/if}
					<div><span class="label">Cast:</span>{selectedItem.casts.join(', ')}</div>
					<div><span class="label">Produced By:</span> Eyoki Creative</div>
				</section>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	$paddingH: 2rem;

	ul {
		color: #424653;
		list-style: none;
		list-style-position: inside;
		display: flex;
		flex-direction: column;

		li {
			cursor: default;
			display: flex;
			align-items: center;
			padding: 0.65rem 0;
			// color: #aeb8ca;
			// border-bottom: 1px solid #424653;
			border-bottom: 1px solid #aeb8ca;

			.body {
				padding-left: 10px;
				flex-grow: 1;
			}

			.time {
				font-size: 0.8rem;
				padding: 0 10px;
				color: #aeb8ca;
			}

			.icon {
				cursor: pointer;
				width: 20px;
				height: 20px;
				text-align: center;
				margin: 0 0.25rem;

				& > svg {
					width: 100%;
					height: 100%;
					display: inline-flex;
					justify-items: center;
					align-items: center;
				}
			}
		}
		li:last-child {
			border: none;
		}
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 10;

		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			overflow-y: auto;
			min-height: 100%;
			background: rgba(0, 0, 0, 0.3);
		}

		.dialog {
			position: relative;
			// display: flex;
			top: 2rem;
			background: #fff;
			width: 80%;
			min-height: 100px;
			margin: 0 auto;
			max-width: 1280px;
			overflow: hidden;
			border-radius: 5px;
			box-shadow: 0 0 26px rgba(0, 0, 0, 0.3);

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

				// &:hover {
				// 	background-color: #dcdcdc;
				// }
			}

			.content {
				display: flex;
				padding-bottom: 100px;
				width: 100%;

				.main {
					flex-grow: 1;
					padding: 1rem $paddingH;
				}

				.info {
					min-width: 280px;
					padding: 1rem $paddingH;
					padding-left: 0;
				}
			}

			footer {
				position: absolute;
				bottom: 5%;
				left: $paddingH;
			}
			.play-btn {
				display: flex;
				align-items: center;
				border: none;
				min-height: 32px;
				padding: 0 2rem 0 2.5rem;
				border-radius: 3px;
				background: red;
				color: #fff;
			}
		}
	}

	.aspect-ratio-box {
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

	.label {
		font-size: 12px;
		color: #3a3d42;
		margin-right: 6px;
	}
</style>
