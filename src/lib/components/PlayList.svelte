<script lang="ts">
	import Image from './Image.svelte';
	import type { Media } from './';
	import { useMediaPlayer } from './MediaPlayer.svelte';
	import { isMobile } from '$lib/utils';
	import { goto } from '$app/navigation';

	export let items: Media[] = [];

	const player = useMediaPlayer();

	const onPreview = (item: Media) => () => {
		if (isMobile()) {
			goto(`/work/${item.link}`);
			return;
		}
		player.preview(item);
	};
</script>

<ul class="play-list">
	{#each items as item, i (`play-${i}`)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li on:click={onPreview(item)}>
			<Image src={item.imageUrl} alt={item.title} />
			<div class="body">
				<div class="caption">{item.title}</div>
				<div class="category">{item.category}</div>
			</div>
			<span class="time">{item.time}</span>
			<!-- <span class="icon"
				>{@html `<svg width="14" height="16" viewBox="0 0 20 22" fill="#fff" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.59 12.51L13.42 16.49M13.41 5.51L6.59 9.49M19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.65685 8 7 9.34315 7 11ZM19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`}</span
			> -->
			<span class="icon">
				{@html `<svg width="16" height="20" viewBox="0 0 16 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L15 10L1 19V1Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`}
			</span>
		</li>
	{/each}
</ul>

<style lang="scss">
	.play-list {
		// color: #424653;
		list-style: none;
		list-style-position: inside;
		display: flex;
		flex-direction: column;

		li {
			cursor: default;
			display: flex;
			align-items: center;
			padding: 0.65rem 0;
			border-bottom: 1px solid var(--border-color);

			.body {
				padding: 0 var(--padding-sm);
				flex-grow: 1;
				min-width: 0;

				.caption {
					width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.category {
					color: var(--sub-text-color);
					font-size: var(--font-size-sm);
				}
			}

			.time {
				font-size: var(--font-size-sm);
				padding: 0 var(--padding-sm);
				color: var(--sub-text-color);
			}

			.icon {
				cursor: pointer;
				width: 20px;
				height: 20px;
				min-width: 20px;
				text-align: center;
				margin: 0 0.25rem;

				:global(svg) {
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
</style>
