export const SITE = {
	title: 'Get That Job',
	description: 'Preparation to best get the job you want',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://get-that-job.yamasakidesign.com/assets/resumes-and-cover-letters.jpg',
		alt:
			'resumes and cover letters',
	},
	twitter: '',
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
			{ text: 'Meet Job Requirements', link: 'en/resume/meet-job-requirements'},
			{ text: 'Job Hunting Takes Time', link: 'en/resume/it-takes-time'},
		],
		'Case Studies (Resumes)': [
			{ text: 'Case Study A', link: 'en/resume/case-study-A'},
			{ text: 'Case Study A, part 2', link: 'en/resume/case-study-A-pt2'},
			{ text: 'Case Study A, part 3', link: 'en/resume/case-study-A-pt3'},
			{ text: 'Case Study A, recommendations', link: 'en/resume/case-study-A-recommendation'},
			{ text: 'Case Study B', link: 'en/resume/case-study-B-pt1'},
			{ text: 'Case Study B, part 2', link: 'en/resume/case-study-B-pt2'},
			{ text: 'Case Study B, part 3', link: 'en/resume/case-study-B-pt3'},
			{ text: 'Case Study B, recommendations', link: 'en/resume/case-study-B-recommendation'},
			{ text: 'Case Study C', link: 'en/resume/case-study-C-pt1'},
			{ text: 'Case Study C, part 2', link: 'en/resume/case-study-C-pt2'},
			{ text: 'Case Study C, recommendations', link: 'en/resume/case-study-C-recommendation'},
			{ text: 'Case Study D', link: 'en/resume/case-study-D-pt1'},
			{ text: 'Case Study D, part 2', link: 'en/resume/case-study-D-pt2'},
			{ text: 'Case Study D, recommendations', link: 'en/resume/case-study-D-recommendation'},
			{ text: 'Case Study E', link: 'en/resume/case-study-E-pt1'},
			{ text: 'Case Study E, part 2', link: 'en/resume/case-study-E-pt2'},
			{ text: 'Case Study E, recommendations', link: 'en/resume/case-study-E-recommendation'}
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
			{ text: 'What to Bring', link: 'en/first-day'},
			{ text: 'Income Taxes', link: 'en/first-day/taxes'},
			{ text: 'Sign Your Life Away', link: 'en/first-day/contracts1'},
			{ text: 'Retirement Plans', link: 'en/first-day/retirement-plans'},
			{ text: 'Company Stock', link: 'en/first-day/company-stock'},
			{ text: 'Health Insurance', link: 'en/first-day/health-insurance'},
		],
		'Common Ideas': [
			{ text: 'Being Uncomfortable', link: 'en/common-ideas/being-uncomfortable'},
			{ text: 'Elevator Pitches', link: 'en/common-ideas/elevator-pitches'},
			{ text: 'Get Organized', link: 'en/common-ideas/get-organized'},
			{ text: 'Networking', link: 'en/common-ideas/networking'},
			{ text: 'Portolios', link: 'en/common-ideas/portfolios'},
			{ text: 'Recruiters are Busy', link: 'en/common-ideas/recruiters-are-busy'},
			{ text: 'Speed Dating', link: 'en/common-ideas/speed-dating'},
			{ text: 'Interviewing Tips', link: 'en/common-ideas/interviewing-book-recommendation'}
		],
		'About':[{text: 'About this website', link: 'en/about'}]
	},
};
