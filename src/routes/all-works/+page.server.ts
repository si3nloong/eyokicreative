import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		producedBys: selfProduce.slice(),
		dps: dp.slice()
	};
}
