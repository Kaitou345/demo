/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["powerful-crag-03533.herokuapp.com"],
  },
};

module.exports = nextConfig;
