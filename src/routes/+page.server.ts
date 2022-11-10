import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		popularVideos: selfProduce.slice().splice(0, 4),
		dps: dp.slice()
	};
}
