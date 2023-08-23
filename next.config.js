/** @type {import('next').NextConfig} */
const pwa = require("next-pwa");
const nextConfig = {
	images: {
		domains: [
			"www.google.com",
			"avatar.vercel.sh",
			"faisalman.github.io",
			"avatars.dicebear.com",
			"res.cloudinary.com",
			"pbs.twimg.com",
			"d2vwwcvoksz7ty.cloudfront.net",
			"lh3.googleusercontent.com",
			"awesomecoder.dev",
			"fakestoreapi.com",
		],
	},
	// poweredByHeader: false,
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
		serverActions: true,
	},
	// async headers() {
	// 	return [
	// 		{
	// 			source: "/api/auth/stripe/:path*",
	// 			headers: [
	// 				{
	// 					key: "Cache-Control",
	// 					value: "no-cache no-store, max-age=0",
	// 				},
	// 			],
	// 		},
	// 		// {
	// 		// 	source: "/subscriptions",
	// 		// 	headers: [
	// 		// 		{
	// 		// 			key: "Cache-Control",
	// 		// 			value: "no-cache no-store, max-age=0",
	// 		// 		},
	// 		// 	],
	// 		// },
	// 	];
	// },
	...pwa({
		dest: "public",
		register: true,
		skipWaiting: true,
		// disable: process.env.NODE_ENV === 'development',
		// scope: '/app',
		// sw: 'service-worker.js',
	}),
};

module.exports = nextConfig;
