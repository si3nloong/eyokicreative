import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';
import type { PageServerLoad } from './$types';
import data from '$lib/data';
import type { Media } from '$lib/components';

export const load: PageServerLoad = ({ request }) => {
	const uri = new URL(request.url);
	let video: Media | null = null;
	if (uri.searchParams.has('id')) {
		const id = uri.searchParams.get('id') || '';
		video = data.find((v) => v.link === id) || null;
	}
	let resp = {
		producedBys: selfProduce.slice(),
		dps: dp.slice(),
		video
	};
	if (video) {
		return Object.assign(resp, {
			image: `${uri.origin}${video.imageUrl}` || '',
			title: `EYOKI - ${video.title}`,
			description: video.shortDesc || ''
		});
	}
	return resp;
};
