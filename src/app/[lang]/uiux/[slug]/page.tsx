import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/lib/i18n';
import { uiuxProjectSlugs } from '@/content/uiux/projects';
import { UIUXAchievyPage, UIUXSixAcresPage } from '@/features/uiux/ui';

// 詳細は案件ごとに設計が異なるため、slug → 案件別コンポーネントにディスパッチする。
const registry: Record<string, ComponentType<{ lang: Locale }>> = {
  achievy: UIUXAchievyPage,
  'six-acres': UIUXSixAcresPage,
};

export function generateStaticParams() {
  return locales.flatMap((lang) => uiuxProjectSlugs.map((slug) => ({ lang, slug })));
}

export default async function UIUXProjectRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const ProjectPage = registry[slug];
  if (!ProjectPage) notFound();

  return <ProjectPage lang={lang} />;
}
