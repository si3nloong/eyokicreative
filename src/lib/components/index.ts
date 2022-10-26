export type Video = {
	id: string;
	title: string;
	cover: string;
	shortDesc: string;
	imageUrl: string;
	directors: string[];
	writers?: string[];
	dps: string[];
	editors: string[];
	casts: string[];
	produces: string[];
	labels: string[];
	link: string;
	time: string;
};
