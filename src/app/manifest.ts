import type { MetadataRoute } from 'next';

// output: 'export' で静的に書き出すため force-static。
export const dynamic = 'force-static';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kento Yokozuka — Software Engineer & UI/UX Designer',
    short_name: 'KY Portfolio',
    description: 'Portfolio of Kento Yokozuka — software engineering and UI/UX design.',
    start_url: `${base}/en/`,
    scope: `${base}/`,
    display: 'standalone',
    background_color: '#F7F5F0',
    theme_color: '#F7F5F0',
    icons: [
      { src: `${base}/icon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: `${base}/icon.svg`, sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
    ],
  };
}
