import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
