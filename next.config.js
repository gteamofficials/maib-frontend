/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiApiUrl: "https://maib-backend-staging.herokuapp.com/api/",
  },
  images: {
    domains: ["source.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
