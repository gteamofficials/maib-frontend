/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiApiUrl: "localhost:1337/api",
  },
};

module.exports = nextConfig;
