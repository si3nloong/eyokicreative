import data from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const video = data.find((v) => v.link == params.id)!!;
	return {
		title: video.title,
		description: video.shortDesc || '',
		video
	};
};
