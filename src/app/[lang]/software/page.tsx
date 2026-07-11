import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  softwareContent,
  getKeyAchievements,
  getCoreExpertise,
  allExperience,
  featuredProjects,
} from '@/content/software';
import {
  HeroSection,
  KeyAchievements,
  CoreExpertise,
  ExperienceSection,
  FeaturedProjects,
  ContactSection,
  SoftwareSkillsSection,
} from '@/features/software/ui';

// software 一覧（Server Component）。言語は URL セグメント由来。
// showAllExperience トグルは ExperienceSection（client の葉）が自己管理する。
export default async function SoftwarePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const currentContent = softwareContent[lang];
  const keyAchievements = getKeyAchievements(lang);
  const coreExpertise = getCoreExpertise(lang);

  return (
    <div className="min-h-screen bg-canvas">
      <Header lang={lang} />

      <main>
        <HeroSection title={currentContent.title} description={currentContent.description} isLoaded={true} />
        <KeyAchievements achievements={keyAchievements} />
        <CoreExpertise expertise={coreExpertise} title={currentContent.coreExpertise.title} />
        <SoftwareSkillsSection title={currentContent.skills.title} currentLang={lang} />
        <ExperienceSection
          experience={allExperience}
          title={currentContent.experience.title}
          showMoreText={currentContent.experience.showMore}
          showLessText={currentContent.experience.showLess}
          currentLang={lang}
        />
        <FeaturedProjects
          projects={featuredProjects}
          title={currentContent.projects.title}
          currentLang={lang}
        />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
