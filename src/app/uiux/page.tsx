"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUIUXPage } from "@/hooks/uiux/useUIUXPage";
import UIUXHeroSection from "@/components/uiux/UIUXHeroSection";
import UIUXProjectsSection from "@/components/uiux/UIUXProjectsSection";
import UIUXSkillsSection from "@/components/uiux/UIUXSkillsSection";
import UIUXExperienceSection from "@/components/uiux/UIUXExperienceSection";
import UIUXAcademicProjectsSection from "@/components/uiux/UIUXAcademicProjectsSection";
import UIUXContactSection from "@/components/uiux/UIUXContactSection";

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
    categoryColors
  } = useUIUXPage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <UIUXHeroSection
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          description={currentContent.description}
          isLoaded={isLoaded}
        />

        <UIUXProjectsSection projects={projects} />

        <UIUXSkillsSection
          skillsByCategory={skillsByCategory}
          categoryColors={categoryColors}
        />

        <UIUXExperienceSection experience={experience} />

        <UIUXAcademicProjectsSection academicProjects={academicProjects} />

        <UIUXContactSection contactText={currentContent.contact} />
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}