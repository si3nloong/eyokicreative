import data from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const video = data.find((v) => v.link == params.id)!!;

	return {
		image: video.cover || '',
		title: `EYOKI - ${video.title}`,
		description: video.shortDesc || '',
		video
	};
};
