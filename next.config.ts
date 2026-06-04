import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.valorant-api.com",
      },
          {
      protocol: "https",
      hostname: "cdn.discordapp.com", 
    },
    ],
  },
};

export default nextConfig;
