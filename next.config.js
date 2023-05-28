/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"images.unsplash.com",
			"oaidalleapiprodscus.blob.core.windows.net",
		],
	},
};

module.exports = nextConfig;

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
	module.exports,
	{
		silent: true,
		org: "evolve-20",
		project: "recipes-nextjs",
	},
	{
		widenClientFileUpload: true,
		transpileClientSDK: true,
		tunnelRoute: "/monitoring",
		hideSourceMaps: true,
		disableLogger: true,
	},
);
