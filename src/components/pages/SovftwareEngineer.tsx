"use client";

import MatrixBackground from "@/features/software/components/organisms/MatrixBackground";
import HeroSection from "@/features/software/components/organisms/HeroSection";
import KeyAchievements from "@/features/software/components/organisms/KeyAchievements";
import CoreExpertise from "@/features/software/components/organisms/CoreExpertise";
import ExperienceSection from "@/features/software/components/organisms/ExperienceSection";
import FeaturedProjects from "@/features/software/components/organisms/FeaturedProjects";
import ContactSection from "@/features/software/components/organisms/ContactSection";
import SoftwareStyles from "@/features/software/components/organisms/SoftwareStyles";
import SoftwareSkillsSection from "@/features/software/components/organisms/SoftwareSkillsSection";
import { useSoftwarePage } from "@/features/software/hooks/useSoftwarePage";

export default function SoftwareEngineerPage() {
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
    featuredProjects
  } = useSoftwarePage();

  // Cast currentLang to the expected type
  const lang = currentLang as "en" | "ja";

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <MatrixBackground />

      <section className="relative z-10 container mx-auto px-4 py-12">
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
          currentLang={lang}
        />

        <ExperienceSection
          experience={allExperience}
          title={currentContent.experience.title}
          showMoreText={currentContent.experience.showMore}
          showLessText={currentContent.experience.showLess}
          showAllExperience={showAllExperience}
          onToggleExperience={() => setShowAllExperience(!showAllExperience)}
          currentLang={lang}
        />

        <FeaturedProjects
          projects={featuredProjects}
          title={currentContent.projects.title}
          currentLang={lang}
        />

        <ContactSection />
      </section>

      <SoftwareStyles />
    </article>
  );
}
