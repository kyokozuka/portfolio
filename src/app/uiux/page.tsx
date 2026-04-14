"use client";

import { Header, Footer } from "@/shared/ui";
import { useUIUXPage } from "@/features/uiux/model";
import {
  UIUXHeroSection,
  UIUXSkillsSection,
  UIUXProjectsSection,
  UIUXExperienceSection,
  UIUXAcademicProjectsSection,
  UIUXContactSection,
} from "@/features/uiux/ui";

export default function UIUXPage() {
  const {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentContent,
    projects,
    skillsByCategory,
    experience,
    academicProjects,
  } = useUIUXPage();

  return (
    <div className="min-h-screen bg-canvas">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        <UIUXHeroSection
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          description={currentContent.description}
          isLoaded={isLoaded}
        />
        <UIUXSkillsSection skillsByCategory={skillsByCategory} />
        <UIUXProjectsSection projects={projects} />
        <UIUXExperienceSection experience={experience} />
        <UIUXAcademicProjectsSection academicProjects={academicProjects} />
        <UIUXContactSection contactText={currentContent.contact} />
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
