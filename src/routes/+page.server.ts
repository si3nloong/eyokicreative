import selfProduce from '$lib/data/self-produce';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const sortedList = selfProduce.slice().sort((a, b) => b.score - a.score);
	const allTimeFavorite = sortedList.slice().splice(0, 4);
	const popularVideos = sortedList.slice(4, 9);

	return {
		latestHit: sortedList.slice().splice(0, 4),
		allTimeFavorite,
		popularVideos,
		latestVideos: sortedList
			.slice(10)
			.sort((a, b) => {
				const d1 = new Date(a.year, a.month, 1);
				const d2 = new Date(b.year, b.month, 1);
				return Number(d2) - Number(d1);
			})
			.slice(0, 5)
	};
};
