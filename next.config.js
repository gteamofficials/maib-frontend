/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiApiUrl: "https://maib-backend-staging.herokuapp.com/api/",
  },
};

module.exports = nextConfig;
