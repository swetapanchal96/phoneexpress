import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "getdemo.in",
        pathname: "/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
