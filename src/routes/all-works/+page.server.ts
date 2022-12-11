import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';
import type { PageServerLoad } from './$types';
import data from '$lib/data';
import type { Media } from '$lib/components';

export const load: PageServerLoad = ({ request }) => {
	let video: Media | null = null;
	const uri = new URL(request.url);
	if (uri.searchParams.has('id')) {
		const id = uri.searchParams.get('id') || '';
		video = data.find((v) => v.link === id) || null;
	}
	return {
		producedBys: selfProduce.slice(),
		dps: dp.slice(),
		video
	};
};
