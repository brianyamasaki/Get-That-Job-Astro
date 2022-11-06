export const SITE = {
	title: 'Get That Job',
	description: 'Preparation to best get the job you want',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
	section?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Hiring Process': [
			{ text: 'The Hiring Process', link: 'en/hiring-process'}
		],
		'Preparation': [
			{ text: 'Prepare to Job Hunt', link: 'en/prepare-in-advance' },
			{ text: 'Keep Track of Stuff', link: 'en/prepare-in-advance/keep-track' },
			{ text: 'Networking', link: 'en/prepare-in-advance/networking' },
		],
		'Resumes': [
			{ text: 'What is a Resume?', link: 'en/resume'},
			{ text: 'Master Resumes', link: 'en/resume/master-resume'},
			{ text: 'Resume Ingredients', link: 'en/resume/what-goes-in'},
			{ text: 'Section Ordering', link: 'en/resume/section-ordering'},
			{ text: 'Be Skimmable', link: 'en/resume/easy-to-read'},
			{ text: 'Descriptions', link: 'en/resume/describe-your-experiences'},
			{ text: 'Find Job Requirements', link: 'en/resume/job-requirements'},
			{ text: 'Meet Job Requirements', link: 'en/resume/meet-job-requirements'}
		],
		'Cover Letters': [
			{ text: 'Your Cover Letter', link: 'en/cover-letter'},
			{ text: 'Structure', link: 'en/cover-letter/letter-structure'},
			{ text: 'Speed Dating', link: 'en/cover-letter/speed-dating'},
			{ text: 'Elevator Pitches', link: 'en/cover-letter/elevator-pitches'},
		],
		'Interviews': [
			{ text: 'Your Interview', link: 'en/interviews'},
			{ text: 'Open Ended Questions', link: 'en/interviews/open-ended-questions'},
			{ text: 'Bring a Portfolio', link: 'en/interviews/bring-portfolio'},
			{ text: 'Elevator Pitches', link: 'en/interviews/elevator-pitches'},
			{ text: 'Speed Dating', link: 'en/interviews/speed-dating'},
		],
		'First Day': [
			{ text: 'What to Bring', link: 'en/first-day/index'}
		],
		'About':[{text: 'About this website', link: 'en/about'}]
	},
};
