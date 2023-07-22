/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.computerhoy.com"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
