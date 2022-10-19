<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Video } from './';
	import TagList from './TagList.svelte';

	export let video: Video;

	let show = false;
	let player: HTMLDivElement;
	let playing = false;

	const closeDialog = () => {
		// player?.stop();
		show = false;
		playing = false;
		document.body.removeAttribute('style');
		window.scrollTo(0, Number(document.body.getAttribute('data-scrolly')) || 0);
	};

	const playVideo = () => {};
</script>

<div class="overlay" in:fade out:fade on:click|stopPropagation={closeDialog} />
<div class="modal-box">
	<div class="dialog">
		<span class="close-btn" on:click={closeDialog}
			>{@html `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}</span
		>
		<div class="aspect-ratio">
			<div class="cover">
				<div class="video-player" bind:this={player} />
				{#if !playing}
					<img class="cover-img" src={video.cover} alt={video.title} />
				{/if}
			</div>
			{#if !playing}
				<div class="control-list">
					<button class="play-btn" on:click={playVideo}>
						{@html `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1378 10.5689L9.60498 7.30252C8.40816 6.70411 7 7.5744 7 8.91249V15.0876C7 16.4257 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8415 17.3171 11.1586 16.1378 10.5689Z" fill="#fff"/></svg>`}
						<span>Play</span>
					</button>
				</div>
			{/if}
		</div>
		<div class="content">
			<section class="main">
				<h2>{video.title}</h2>
				<div class="extra-info">
					<span>{video.time}</span>
					{#each video.labels as item}
						<span>{item}</span>
					{/each}
				</div>
				<div>{@html video.shortDesc}</div>
			</section>
			<section class="info">
				<!-- <div>Genre</div> -->
				<div>
					<span class="label">Director:</span>
					<span><TagList items={video.directors} /></span>
				</div>
				{#if video.writers}
					<div>
						<span class="label">Writer:</span>
						<span><TagList items={video.writers} /></span>
					</div>
				{/if}
				{#if video.dps}
					<div>
						<span class="label">Director of Photography:</span>
						<span><TagList items={video.dps} /></span>
					</div>
				{/if}
				{#if video.editors}
					<div><span class="label">Editor:</span>{video.editors.join(', ')}</div>
				{/if}
				<div><span class="label">Cast:</span>{video.casts.join(', ')}</div>
				<div><span class="label">Produced By:</span> Eyoki Creative</div>
			</section>
		</div>
	</div>
	<div style="display: block; height: 20px" />
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
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		overflow-y: auto;
		will-change: scroll-position;
		z-index: 3;
	}

	.dialog {
		position: absolute;
		width: 80%;
		left: auto;
		top: 2em;
		transform-origin: 50% 12.5%;
		background: #fff;
		width: 80%;
		min-height: 100px;
		margin: 0 auto;
		max-width: 1024px;
		overflow: hidden;
		border-radius: 8px;
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

		.content {
			display: flex;
			padding-bottom: 60px;
			width: 100%;

			.main {
				flex-grow: 1;
				padding: 1rem $paddingHorizontal;
			}

			.info {
				min-width: 280px;
				padding: 1rem $paddingHorizontal;
				padding-left: 0;
			}
		}

		.extra-info {
			padding: 0.5rem 0;
		}

		.label {
			font-size: 12px;
			color: #3a3d42;
			margin-right: 6px;
		}
	}
</style>
