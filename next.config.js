/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // may cause double rendering

  // Optional: Add other commonly used options
  poweredByHeader: false,
  compress: true,
  sassOptions: {
    includePaths: ['./src'],
  },
};

module.exports = nextConfig;
