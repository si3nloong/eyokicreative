import selfProduce from '$lib/data/self-produce';
import dp from '$lib/data/dp';
import socialMedias from '$lib/data/social-media';
import type { PageServerLoad } from './$types';
import data from '$lib/data';
import type { Media } from '$lib/components';
import { isMobile } from '$lib/utils';
import { redirect } from '@sveltejs/kit';

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
		socialMedias: socialMedias.slice(),
		video
	};
	if (video) {
		if (isMobile(request.headers)) {
			throw redirect(303, `/work/${video.link}`);
		}

		return Object.assign(resp, {
			image: `${uri.origin}${video.imageUrl}` || '',
			title: `EYOKI - ${video.title}`,
			description: video.shortDesc || ''
		});
	}
	return resp;
};
