export type BehindTheScreen = Required<Pick<Media, 'title' | 'imageUrl' | 'link' | 'time'>>;

export type Media = {
	title: string;
	date: [month: number, year: number];
	shortDesc?: string;
	cover: string;
	imageUrl: string;
	directors: string[];
	writers?: string[];
	dps: string[];
	lyrics?: [time: number, lryic: string][];
	category: 'Commercial' | 'Short Film';
	editors: string[];
	casts?: string[];
	produceBy: string;
	audios: string[];
	subtitles?: string[];
	bts?: BehindTheScreen;

	client?: {
		name: string;
		imageUrl: string;
	};
	link: string;
	time: string;
};
