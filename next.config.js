/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiApiUrl: "https://maib-backend-staging.herokuapp.com/api",
    baseUrl: "https://maib-backend-staging.herokuapp.com",
  },
  images: {
    domains: ["maib-backend-staging.herokuapp.com"],
  },
};

module.exports = nextConfig;
