/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER: process.env.SERVER,
  },
  images: {
    domains: ['cdn.trakteer.id'],
  },
};

module.exports = nextConfig;
