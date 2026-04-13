// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you're using static export, remove this
  output: 'standalone', // recommended for Vercel
  images: {
    unoptimized: true, // if you use next/image with external assets
  },
}

module.exports = nextConfig