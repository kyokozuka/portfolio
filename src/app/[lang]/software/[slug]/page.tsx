import { notFound } from 'next/navigation';
import { locales, isLocale } from '@/lib/i18n';
import { softwareProjects, softwareSlugs } from '@/content/software/projects';
import { SoftwareProjectPage } from '@/features/software/ui';

// en/ja × 全 slug を静的生成する（output:export 対応）。
export function generateStaticParams() {
  return locales.flatMap((lang) => softwareSlugs.map((slug) => ({ lang, slug })));
}

export default async function SoftwareProjectRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const data = softwareProjects[slug];
  if (!data) notFound();

  return <SoftwareProjectPage projectData={data} lang={lang} />;
}
