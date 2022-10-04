<script lang="ts">
	import { browser } from '$app/environment';
	import YTPlayer from 'yt-player';
	import {
		fromEvent,
		debounceTime,
		tap,
		takeUntil,
		from,
		throttleTime,
		interval,
		bufferToggle,
		EMPTY,
		timer
	} from 'rxjs';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let video: HTMLVideoElement;
	let loaded = false;
	let clientWidth = 0;

	// after hover, then we play the video without sound on
	onMount(() => {
		const clicks = fromEvent(document, 'click');
		const openings = interval(1000);
		const buffered = clicks.pipe(bufferToggle(openings, (i) => (i % 2 ? timer(500) : EMPTY)));
		buffered.subscribe((x) => console.log(x));

		console.log(clientWidth);
		const player = new YTPlayer(video);
		player.load('sk4eLERT1No');
		player.setSize(clientWidth, 180);
		player.on('unstarted', () => {
			loaded = true;
			console.log('unstarted!');
		});
		player.on('cued', () => {
			loaded = true;
			console.log(player.getState());
		});
		player.on('playing', () => {
			loaded = true;
			console.log(player.getProgress());
		});

		const mouseout$ = fromEvent(video, 'mouseout');
		fromEvent(container, 'mouseover')
			.pipe(
				throttleTime(1000),
				tap(() => {
					player.setVolume(0);
					player.play();
					console.log('HERE');
					// video.play();
				})
				// takeUntil(mouseout$)
			)
			.subscribe(console.log);

		fromEvent(container, 'mouseout').subscribe(() => {
			player.stop();
		});
		console.log(video);

		// player.console.log(player);
	});
</script>

<div bind:this={container} class="video" bind:clientWidth style="background: red">
	<video bind:this={video} width="100%" controls playsinline={true} muted={true}>
		<!-- <source src="/SK Magic Jiksoo Ria Water Purifier.mp4" type="video/mp4" /> -->
	</video>
	{#if !loaded}
		<div class="cover"><img src="/favicon.png" alt="cover" /></div>
	{/if}
</div>

<style lang="scss">
	.video {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 180px;
		text-align: center;

		img {
			display: block;
		}

		video {
			display: none;
		}
	}
</style>
