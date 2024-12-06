/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optional: Add other commonly used options
  poweredByHeader: false,
  compress: true,
  sassOptions: {
    includePaths: ['./src'],
  },
};

module.exports = nextConfig;
