<script context="module" lang="ts">
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
	import type { Media } from '.';
	import Button from './Button.svelte';
	import { useMediaPlayer } from './MediaPlayer.svelte';
	import TagList from './TagList.svelte';

	export let video: Media;

	const player = useMediaPlayer();

	const playVideo = () => {
		player.preview(video);
	};
</script>

<section class="content">
	<section class="main-info">
		<h2>{video.title}</h2>
		<div class="extra-info">
			{#if video.client}
				<span class="client"><img src={video.client.imageUrl} alt="" /></span>
				<span class="name">{video.client.name}</span>
			{/if}
		</div>
		<div class="video-info">
			<span>{`${monthNames[video.date[0] - 1].substring(0, 3)} ${video.date[1]}`}</span>
			<span class="pipe">|</span>
			<span>{video.category}</span>
			<span class="pipe">|</span>
			<span>{`${video.time}mins`}</span>
		</div>
		{#if video.shortDesc}
			<div>{@html video.shortDesc}</div>
			<!-- {:else if video.lyrics}
			{#each video.lyrics as [_, lyric]}
				<div>{lyric}</div>
			{/each} -->
		{/if}
		<!-- <Button on:click={playVideo} style="margin-top: 1rem; width: 100%">PLAY NOW</Button> -->
	</section>
	<section class="addon-info">
		<div>
			{#if video.directors}
				<div>
					<span class="label">{`Director${video.directors.length > 1 ? 's' : ''}:`}</span>
					<span><TagList items={video.directors} /></span>
				</div>
			{/if}
			{#if video.writers}
				<div>
					<span class="label">{`Writer${video.writers.length > 1 ? 's' : ''}:`}</span>
					<span><TagList items={video.writers} /></span>
				</div>
			{/if}
			{#if video.dps}
				<div>
					<span class="label">{`Cinematographer${video.dps.length > 1 ? 's' : ''}:`}</span>
					<span><TagList items={video.dps} /></span>
				</div>
			{/if}
			{#if video.editors}
				<div>
					<span class="label">{`Editor${video.dps.length > 1 ? 's' : ''}:`}</span><TagList
						items={video.editors}
					/>
				</div>
			{/if}
			{#if video.casts}
				<div>
					<span class="label">Cast:</span>
					<TagList items={video.casts} />
				</div>
			{/if}
			<div>
				<span class="label">Produced By:</span><TagList items={[video.produceBy]} />
			</div>
		</div>

		<div style="margin-top: 30px">
			<!-- <div><span class="label">Genres:</span><TagList items={video.labels} /></div> -->
			<div>
				<span class="label">Audio:</span><TagList items={video.audios} />
			</div>
			{#if video.subtitles}
				<div>
					<span class="label">Subtitles:</span><TagList items={video.subtitles} />
				</div>
			{/if}
		</div>
	</section>
</section>

<style lang="scss" global>
	$paddingHorizontal: 2rem;

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;

		.main-info {
			flex-grow: 1;
		}

		.addon-info {
			max-width: 320px;
			min-width: 280px;
			padding: 1rem 0;
			padding-left: 0;
		}

		@media screen and (min-width: 680px) {
			flex-direction: row;

			.main-info {
				padding-right: var(--padding);
			}
		}
	}

	.video-info {
		color: var(--sub-text-color);
		font-size: 0.9rem;
		padding-bottom: var(--padding-sm);

		.pipe {
			padding: 0 4px;
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
	}

	.label {
		font-size: 12px;
		color: var(--sub-text-color);
		margin-right: 6px;
	}
</style>
