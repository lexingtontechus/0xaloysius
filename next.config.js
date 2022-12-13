/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/**",
      },
      images.unoptimized = true
    ],
    domains: ["storageapi.fleek.co"],
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  }
};

module.exports = nextConfig;

