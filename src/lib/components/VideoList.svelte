<script lang="ts">
	import type { Media } from '.';
	import { useMediaPlayer } from './MediaPlayer.svelte';
	import Video from './Video.svelte';

	export let items: Media[] = [];

	const result = items.slice().splice(0, 4);

	const player = useMediaPlayer();

	const onPreview = (item: Media) => () => {
		player.preview(item);
	};
</script>

<ul class="video-list">
	{#each result as item, i (`video-${i}`)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li on:click={onPreview(item)}><Video video={item} /></li>
	{/each}
</ul>

<style lang="scss">
	.video-list {
		list-style: none;
		list-style-position: inside;
		display: flex;
		justify-content: space-between;

		li {
			cursor: pointer;
			width: 23.5%;
			transition: all 0.5s;

			&:hover {
				transform: scale(1.05);
			}
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;

			li {
				width: 100%;
				margin-bottom: 1rem;
			}
		}
	}
</style>
