import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Suppress hydration warnings from form processing IDs
  experimental: {
    // This suppresses the hydration warning due to browser extensions
    strictNextHead: false
  },
};

export default nextConfig;
