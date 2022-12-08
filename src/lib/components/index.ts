export type BehindTheScreen = Required<Pick<Media, 'title' | 'imageUrl' | 'link' | 'time'>>;

export type Media = {
	title: string;
	shortDesc?: string;
	date: [month: number, year: number];
	category: 'Commercial' | 'Short Film' | 'MV';
	cover: string;
	imageUrl: string;
	produceBy: string;
	directors: string[];
	writers?: string[];
	dps: string[];
	// lyrics?: [time: number, lryic: string][];
	editors: string[];
	casts?: string[];
	audios: string[];
	subtitles?: string[];
	relatedVideos?: Media[];
	client?: {
		name: string;
		imageUrl: string;
	};
	link: string;
	time: string;
};
