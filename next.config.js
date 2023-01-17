/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const nextConfig = withPWA({
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true
})

module.exports = nextConfig
