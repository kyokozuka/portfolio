"use client";

import { Header, Footer } from "@/shared/ui";
import {
  HeroSection,
  KeyAchievements,
  CoreExpertise,
  ExperienceSection,
  FeaturedProjects,
  ContactSection,
  SoftwareSkillsSection,
} from "@/features/software/ui";
import { useSoftwarePage } from "@/features/software/model";

export default function SoftwarePage() {
  const {
    showAllExperience,
    setShowAllExperience,
    currentLang,
    setCurrentLang,
    isLoaded,
    currentContent,
    keyAchievements,
    coreExpertise,
    allExperience,
    featuredProjects,
  } = useSoftwarePage();

  return (
    <div className="min-h-screen bg-canvas">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        <HeroSection
          title={currentContent.title}
          description={currentContent.description}
          isLoaded={isLoaded}
        />
        <KeyAchievements achievements={keyAchievements} />
        <CoreExpertise
          expertise={coreExpertise}
          title={currentContent.coreExpertise.title}
        />
        <SoftwareSkillsSection
          title={currentContent.skills.title}
          currentLang={currentLang}
        />
        <ExperienceSection
          experience={allExperience}
          title={currentContent.experience.title}
          showMoreText={currentContent.experience.showMore}
          showLessText={currentContent.experience.showLess}
          showAllExperience={showAllExperience}
          onToggleExperience={() => setShowAllExperience(!showAllExperience)}
          currentLang={currentLang}
        />
        <FeaturedProjects
          projects={featuredProjects}
          title={currentContent.projects.title}
          currentLang={currentLang}
        />
        <ContactSection />
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
