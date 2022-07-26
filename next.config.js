/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.kindacode.com',
      'instagram.faep4-3.fna.fbcdn.net',
      'instagram.faep4-2.fna.fbcdn.net',
    ]
  }
}

module.exports = nextConfig
