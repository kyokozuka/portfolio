"use client";

import { useUIUXPage } from "@/features/uiux/hooks/useUIUXPage";
import UIUXBackgroundEffects from "@/features/uiux/components/UIUXBackgroundEffects";
import UIUXHeroSection from "@/features/uiux/components/UIUXHeroSection";
import UIUXSkillsSection from "@/features/uiux/components/UIUXSkillsSection";
import UIUXFeaturedProjects from "@/features/uiux/components/UIUXFeaturedProjects";
import UIUXEducationSection from "@/features/uiux/components/UIUXEducationSection";
import UIUXAcademicProjects from "@/features/uiux/components/UIUXAcademicProjects";
import UIUXContactSection from "@/features/uiux/components/UIUXContactSection";

export default function UIUXPage() {
  const { currentLang, setCurrentLang, isLoaded, currentContent, projects, skillsByCategory, experience, academicProjects, categoryColors, creativeElements, designIcons } = useUIUXPage();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <UIUXBackgroundEffects creativeElements={creativeElements} designIcons={designIcons} />

      <article className="relative z-10 container mx-auto px-4 py-12">
        <UIUXHeroSection
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          description={currentContent.description}
          isLoaded={isLoaded}
        />

        <UIUXSkillsSection skillsByCategory={skillsByCategory} categoryColors={categoryColors} />

        <UIUXFeaturedProjects projects={projects} />

        <UIUXEducationSection experience={experience} />

        <UIUXAcademicProjects academicProjects={academicProjects} />

        <UIUXContactSection contactText={currentContent.contact} />
      </article>

    </main>
  );
}