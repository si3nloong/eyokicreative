<script context="module" lang="ts">
	type Item = {
		id: string;
		title: string;
		shortDesc: string;
		imageUrl: string;
		directors: string[];
		writers?: string[];
		casts: string[];
		labels: string[];
		link: string;
		time: string;
	};
</script>

<script lang="ts">
	import { mediaPlayer } from '$lib/store';
	import { fade } from 'svelte/transition';

	import Image from './Image.svelte';

	export let items: Item[] = [];

	let selectedItem: Item | null = null;
	let showDialog = false;
	const onPreview = (item: Item) => () => {
		selectedItem = item;
		showDialog = true;
	};

	const onPlay = (item: Item) => (e: Event) => {
		mediaPlayer.play(item.link);
	};
</script>

<ul>
	{#each items as item (item.id)}
		<li on:click={onPreview(item)}>
			<Image src={item.imageUrl} alt="" />
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
		<div class="overlay" in:fade out:fade on:click|stopPropagation={() => (showDialog = false)} />
		<div class="dialog">
			<div class="cover">
				<footer>
					<button class="play-btn">Play</button>
				</footer>
			</div>
			<div class="content">
				<section class="main">
					<h2>{selectedItem.title}</h2>
					<div>Client</div>
					<div>{selectedItem.time}</div>
					<div>{selectedItem.shortDesc}</div>
				</section>
				<section class="info">
					<!-- <div>Genre</div> -->
					<div><span class="label">Director:</span>{selectedItem.directors.join(', ')}</div>
					{#if selectedItem.writers}
						<div><span class="label">Writers:</span>{selectedItem.writers.join(', ')}</div>
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
			height: 100%;
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
			overflow: hidden;
			border-radius: 5px;
			box-shadow: 0 0 26px rgba(0, 0, 0, 0.3);

			.cover {
				position: relative;
				height: 350px;
				background: #f5f5f5;
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
					max-width: 280px;
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
				display: block;
				border: none;
				min-height: 32px;
				padding: 0 2.5rem;
				border-radius: 3px;
				background: red;
				color: #fff;
			}
		}
	}

	.label {
		font-size: 12px;
		color: #3a3d42;
		margin-right: 6px;
	}
</style>
