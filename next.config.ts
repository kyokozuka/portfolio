import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? '/portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  // PWA（manifest / Service Worker 登録）で basePath を参照するためクライアントへ公開
  env: { NEXT_PUBLIC_BASE_PATH: basePath || '' },
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
};

export default nextConfig;
