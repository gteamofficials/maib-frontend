/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "res.cloudinary.com"],
  },
  env: {
    strapiApiUrl: "https://maib-backend-staging.herokuapp.com/api/",
  },
};

module.exports = nextConfig;
