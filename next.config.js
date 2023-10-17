/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com**",
      },
      {
        protocol: "https",
        hostname: "images.pokemontcg.io**",
      },
      {
        protocol: "https",
        hostname: "archives.bulbagarden.net**",
      },
    ],
  },
};

module.exports = nextConfig;
