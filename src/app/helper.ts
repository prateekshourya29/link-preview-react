export const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	'(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

export interface LinkPreviewResponse {
	author: string | null;
	date: string | null;
	title: string | null;
	description: string | null;
	image: string | null;
	logo: string | null;
	publisher: string | null;
	url: string | null;
}

export type CardType = "Type 1" | "Type 2";

export interface Customization {
	cardRadius: number;
	cardWidth: number;
	cardHeight: number;
	imageRadius: number;
}

export const customizationObj: Customization = {
	cardRadius: 15,
	imageRadius: 7,
	cardWidth: 300,
	cardHeight: 0,
};

export const noResponseObj: LinkPreviewResponse = {
	author: null,
	date: null,
	description:
		"No Description Found.",
	image: "https://media.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif",
	logo: null,
	publisher: "Click Here to know more",
	title: "No Title Found",
	url: "#",
};