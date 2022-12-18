/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "res.cloudinary.com",
      "strapi-aeud-production.up.railway.app",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
