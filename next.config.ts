import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          typescript: true,
          dimensions: false,
        }
      }],
    });
    return config;
  },
};

export default nextConfig;