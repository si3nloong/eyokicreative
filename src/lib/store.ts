import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import YouTubePlayer from 'yt-player';
import type { Media } from './components';

interface MediaPlayer {
	show: boolean;
	video: Media | null;
}

function createStore() {
	const { subscribe, set, update } = writable<MediaPlayer>({ show: false, video: null });

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
		preview(video: Media) {
			console.log('HERE ->', video);
			update((v) => Object.assign(v, { show: true, video }));
		},
		play: (id: string) => {
			console.log('YouTube ->', id);
			update((v) => Object.assign(v, { show: true }));
			setTimeout(() => {
				player = new YouTubePlayer('#video');
				player?.load(id, true);
			});
		},
		stop: stopVideo,
		subscribe
		// reset: () => set({ show: false })
	};
}

export const store = createStore();
