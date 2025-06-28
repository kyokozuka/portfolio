import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? '/portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/**',
      },
      {
        protocol: 'https',
        hostname: 'backlog.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
