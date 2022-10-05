/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.js'],
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_FINAL_SPACE_API: process.env.NEXT_PUBLIC_FINAL_SPACE_API,
  },
}

module.exports = nextConfig
