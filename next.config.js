/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'api.catpuccino.org',
      'gatinder.catpuccino.org',
    ]
  }
}

module.exports = nextConfig
