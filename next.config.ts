import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgflip.com",
        pathname: "/**", // Allow all images from Imgflip
      },
      {
        protocol: "https",
        hostname: "api.memegen.link",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
