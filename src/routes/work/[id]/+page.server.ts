import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const video = selfProduce.concat(dp).find((v) => v.link == params.id);
	return {
		video
	};
};
