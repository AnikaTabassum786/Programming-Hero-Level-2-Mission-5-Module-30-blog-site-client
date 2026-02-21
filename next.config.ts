

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    API_URL: process.env.API_URL,
    AUTH_URL: process.env.AUTH_URL,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },

   images: {
    formats:["image/avif","image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
