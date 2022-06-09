/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true
})

module.exports = nextConfig
