import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import { homeContent } from '@/content/home';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  HomeHeroSection,
  HomeAchievementsSection,
  HomeRoleCardsSection,
  HomeAboutSection,
  HomeProjectsSection,
} from '@/features/home/ui';

// home ルート（Server Component）。言語は URL セグメント（params.lang）由来で、
// 壊れていた useLanguage を置き換える。セクションは props 駆動の既存
// コンポーネントを再利用する。
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const currentContent = homeContent[lang];

  return (
    <div className="min-h-screen bg-canvas">
      <Header lang={lang} />

      <main>
        <HomeHeroSection currentContent={currentContent} isLoaded={true} lang={lang} />
        <HomeAchievementsSection achievements={currentContent.achievements} />
        <HomeRoleCardsSection software={currentContent.software} uiux={currentContent.uiux} lang={lang} />
        <HomeAboutSection about={currentContent.about} />
        <HomeProjectsSection highlights={currentContent.highlights} lang={lang} />
      </main>

      <Footer />
    </div>
  );
}
