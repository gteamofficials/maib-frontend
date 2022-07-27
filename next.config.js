/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
  },
  env: {
    strapiApiUrl: "https://maib-backend-staging.herokuapp.com/api/",
    salahScheduleApiUrl: "https://api.myquran.com/v1/sholat/jadwal/1433",
    hijriCalendarApiUrl: "http://api.aladhan.com/v1/hToGCalendar/"
  },
};

module.exports = nextConfig;
