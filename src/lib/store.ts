import { browser } from '$app/environment';
import { writable } from 'svelte/store';
// import type YouTubePlayer from 'yt-player';
import YouTubePlayer from 'yt-player';

interface MediaPlayer {
	show: boolean;
}

function createStore() {
	const { subscribe, set, update } = writable<MediaPlayer>({ show: false });

	let player: YouTubePlayer | null;

	const stopVideo = () => {
		player?.stop();
		player = null;
		update((v) => Object.assign(v, { show: false }));
	};

	if (browser) {
		window.addEventListener('keyup', (e) => {
			if (e.key == 'Escape') {
				stopVideo();
			}
		});
	}

	return {
		play: (id: string) => {
			console.log('YouTube ->', id);
			update((v) => Object.assign(v, { show: true }));
			setTimeout(() => {
				player = new YouTubePlayer('#video');
				player?.load(id, true);
			});
		},
		stop: stopVideo,
		subscribe,
		reset: () => set({ show: false })
	};
}

export const mediaPlayer = createStore();
