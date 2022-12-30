import type { Media } from '$lib/components';
import data from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, request }) => {
	const uri = new URL(request.url);
	const video = data.find((v) => v.link == params.id)!! as Media;

	let imageUrl = '';
	if (video.pictures) {
		imageUrl = video.pictures?.jpeg || video.pictures?.webp || '';
	}
	return {
		image: `${uri.origin}${imageUrl}`,
		title: `EYOKI - ${video.title}`,
		description: video.shortDesc || '',
		video
	};
};
