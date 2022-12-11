import data from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, request }) => {
	const uri = new URL(request.url);
	const video = data.find((v) => v.link == params.id)!!;

	return {
		image: `${uri.origin}${video.imageUrl}` || '',
		title: `EYOKI - ${video.title}`,
		description: video.shortDesc || '',
		video
	};
};
