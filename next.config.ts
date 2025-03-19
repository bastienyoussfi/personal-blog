import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['firebasestorage.googleapis.com'], // Add your Firebase storage domain
  },
  // Add trailing slashes for better SEO
  trailingSlash: true,
};

export default nextConfig;
