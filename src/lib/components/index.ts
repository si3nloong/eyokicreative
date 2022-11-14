export type Media = {
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
	produceBy: string;
	labels: string[];
	bts?: string;
	client?: {
		name: string;
		imageUrl: string;
	};
	link: string;
	time: string;
};
