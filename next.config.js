/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/**",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["storageapi.fleek.co"],
    loader: "custom",
  },
};

module.exports = nextConfig;
