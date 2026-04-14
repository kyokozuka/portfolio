"use client";

import { Header, Footer } from "@/shared/ui";
import { useHomePage } from "@/features/home/model";
import {
  HomeHeroSection,
  HomeAchievementsSection,
  HomeRoleCardsSection,
  HomeAboutSection,
  HomeProjectsSection,
} from "@/features/home/ui";

export default function Home() {
  const {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentContent,
  } = useHomePage();

  return (
    <div className="min-h-screen bg-canvas">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        <HomeHeroSection currentContent={currentContent} isLoaded={isLoaded} />
        <HomeAchievementsSection achievements={currentContent.achievements} />
        <HomeRoleCardsSection software={currentContent.software} uiux={currentContent.uiux} />
        <HomeAboutSection about={currentContent.about} />
        <HomeProjectsSection highlights={currentContent.highlights} />
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
