/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'wisehealth.com.br' },
    ],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
