import { notFound } from 'next/navigation';
import { locales, isLocale } from '@/lib/i18n';
import { uiuxProjectSlugs, getAchievyData, getSixAcresData } from '@/content/uiux/projects';
import { UIUXAchievyPage, UIUXSixAcresPage } from '@/features/uiux/ui';

export function generateStaticParams() {
  return locales.flatMap((lang) => uiuxProjectSlugs.map((slug) => ({ lang, slug })));
}

// 詳細は案件ごとに設計・データ型が異なるため、slug ごとに YAML を読み込んで
// 案件別コンポーネントへ data を渡す（client コンポーネントは fs を使えないため server で読む）。
export default async function UIUXProjectRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  if (slug === 'achievy') return <UIUXAchievyPage lang={lang} data={getAchievyData()} />;
  if (slug === 'six-acres') return <UIUXSixAcresPage lang={lang} data={getSixAcresData()} />;
  notFound();
}
