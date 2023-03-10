export const SITE = {
	name: 'Agreent',

	origin: 'https://agreent.com',
	basePathname: '/',
	trailingSlash: false,

	title: 'Agreent — Your Journey to Building a Product',
	description: 'Join us on a journey towards building a successful product using robust web technologies.',

	googleAnalyticsId: 'G-EC0LF54JJ8',
	googleSiteVerificationId: false,
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
