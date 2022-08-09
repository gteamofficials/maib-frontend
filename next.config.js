/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "res.cloudinary.com"],
  },
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
