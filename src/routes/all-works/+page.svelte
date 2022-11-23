<script lang="ts">
	import type { Media } from '$lib/components';
	import { useMediaPlayer } from '$lib/components/MediaPlayer.svelte';

	export let data: { producedBys: Media[]; dps: Media[] } = { dps: [], producedBys: [] };

	const player = useMediaPlayer();

	const onPreview = (item: Media) => () => {
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
		padding: 2rem 0;
	}

	.video-list {
		list-style: none;
		list-style-position: inside;
		display: flex;
		padding-top: 0.5rem;
		margin: 0 -10px;
		flex-flow: row wrap;
		justify-content: space-between;

		li {
			width: 100%;
			padding: 10px;

			.thumbnail {
				cursor: pointer;
				background: #f5f5f5;
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			@media screen and (min-width: 480px) {
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
