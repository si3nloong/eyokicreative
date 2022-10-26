type Media = {
	id: string;
	title: string;
	shortDesc?: string;
	cover: string;
	imageUrl: string;
	directors: string[];
	writers?: string[];
	dps: string[];
	lyrics?: [time: number, lryic: string][];
	editors: string[];
	casts: string[];
	produces: string[];
	labels: string[];
	link: string;
	time: string;
};

export type Video = Media;
