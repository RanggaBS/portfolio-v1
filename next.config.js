/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: "export",
	productionBrowserSourceMaps: false,
	images: {
		remotePatterns: [
			{
				hostname: "github.com",
				protocol: "https",
			},
			{
				hostname: "raw.githubusercontent.com",
				protocol: "https",
			},
		],
	},
};

module.exports = nextConfig;
