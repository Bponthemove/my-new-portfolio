/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  iframes: {
    domains: [
      'www.bbc.co.uk',
      'www.freecodecamp.org',

    ]
  }
})


