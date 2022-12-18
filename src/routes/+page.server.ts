import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ request }) => {
	return {
		popularVideos: selfProduce.slice().splice(0, 4),
		dps: dp.slice(),
		latestVideos: [...selfProduce]
			.sort((a, b) => {
				const d1 = new Date(a.year, a.month, 1);
				const d2 = new Date(b.year, b.month, 1);
				return Number(d2) - Number(d1);
			})
			.slice(0, 5)
	};
};
