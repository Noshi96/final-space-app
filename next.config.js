/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.js'],
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
