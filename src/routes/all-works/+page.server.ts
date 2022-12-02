import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		producedBys: selfProduce.slice(),
		dps: dp.slice()
	};
};
