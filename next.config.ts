import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable server actions
  },
  // Transpile three.js packages
  transpilePackages: ["three"],
};

export default nextConfig;
