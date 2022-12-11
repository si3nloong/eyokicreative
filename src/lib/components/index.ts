export type BehindTheScreen = Required<Pick<Media, 'title' | 'imageUrl' | 'link' | 'time'>>;

export type Media = {
	title: string;
	shortDesc?: string;
	month: number;
	year: number;
	category: string;
	cover: string;
	imageUrl: string;
	produceBy: string;
	directors?: string[];
	writers?: string[];
	dps?: string[];
	editors?: string[];
	casts?: string[];
	audios: string[];
	subtitles?: string[];
	relatedVideos?: Pick<Media, 'title' | 'link' | 'time' | 'cover' | 'dps' | 'editors'>[];
	client?: {
		name: string;
		imageUrl: string;
	};
	link: string;
	time: string;
};
