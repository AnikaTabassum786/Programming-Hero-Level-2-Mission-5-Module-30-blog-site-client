

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
};

export default nextConfig;
