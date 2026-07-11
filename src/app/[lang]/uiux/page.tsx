import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  uiuxContent,
  uiuxProjects,
  uiuxSkills,
  uiuxExperience,
  uiuxAcademicProjects,
  type UIUXSkill,
} from '@/content/uiux';
import {
  UIUXHeroSection,
  UIUXSkillsSection,
  UIUXProjectsSection,
  UIUXExperienceSection,
  UIUXAcademicProjectsSection,
  UIUXContactSection,
} from '@/features/uiux/ui';

// uiux 一覧（Server Component）。言語は URL セグメント由来。
export default async function UIUXPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const currentContent = uiuxContent[lang];
  const skillsByCategory = uiuxSkills.reduce<Record<string, UIUXSkill[]>>((acc, skill) => {
    (acc[skill.category] ??= []).push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-canvas">
      <Header lang={lang} />

      <main>
        <UIUXHeroSection
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          description={currentContent.description}
          isLoaded={true}
        />
        <UIUXSkillsSection skillsByCategory={skillsByCategory} />
        <UIUXProjectsSection projects={uiuxProjects} lang={lang} />
        <UIUXExperienceSection experience={uiuxExperience} />
        <UIUXAcademicProjectsSection academicProjects={uiuxAcademicProjects} />
        <UIUXContactSection contactText={currentContent.contact} lang={lang} />
      </main>

      <Footer />
    </div>
  );
}
