/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiApiUrl: "https://maib-backend-staging.herokuapp.com/api",
    baseUrl: "https://maib-backend-staging.herokuapp.com",
  },
  images: {
    domains: [
      "maib-backend-staging.herokuapp.com",
      "source.unsplash.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
