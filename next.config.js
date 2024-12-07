/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // may cause double rendering

  images: {
    domains: ['dummyimage.com'], // domain for the images
  },

  // Optional: Add other commonly used options
  poweredByHeader: false,
  compress: true,
  sassOptions: {
    includePaths: ['./src'],
  },
};

module.exports = nextConfig;
