import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: 이 방법은 모든 ESLint 검사를 건너뛰게 되므로 주의해서 사용해야 합니다
    ignoreDuringBuilds: true,
  },
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