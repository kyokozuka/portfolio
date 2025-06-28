"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";
import MatrixBackground from "@/components/software/MatrixBackground";
import HeroSection from "@/components/software/HeroSection";
import KeyAchievements from "@/components/software/KeyAchievements";
import CoreExpertise from "@/components/software/CoreExpertise";
import ExperienceSection from "@/components/software/ExperienceSection";
import FeaturedProjects from "@/components/software/FeaturedProjects";
import ContactSection from "@/components/software/ContactSection";
import SoftwareStyles from "@/components/software/SoftwareStyles";
import {
  softwareContent,
  allExperience,
  featuredProjects,
  getKeyAchievements,
  getCoreExpertise
} from "@/data/softwareData";

export default function SoftwarePage() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentContent = softwareContent[currentLang as keyof typeof softwareContent];
  const keyAchievements = getKeyAchievements(currentLang);
  const coreExpertise = getCoreExpertise(currentLang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <MatrixBackground />

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
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

        <section className="mb-16 animate-slideInRight">
          <h2 className="font-display text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
            {currentContent.skills.title}
          </h2>
          <TechnicalSkills currentLang={currentLang} />
        </section>

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
      </div>

      <Footer currentLang={currentLang} />

      <SoftwareStyles />
    </div>
  );
}