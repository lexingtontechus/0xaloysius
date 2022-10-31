module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  //  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storageapi.fleek.co",
        port: "",
        pathname: "",
      },
    ],
  },
};
