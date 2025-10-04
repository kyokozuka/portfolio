import { UIUXExperience } from '@/types/i18n/i18n';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ExperienceCard } from '@/components/molecules/ExperienceCard';

interface UIUXExperienceSectionProps {
  experience: UIUXExperience[];
}

export const UIUXExperienceSection = ({ experience }: UIUXExperienceSectionProps) => {
  return (
    <section className="mb-20 animate-slideInRight">
      <SectionHeader
        title="Experience & Education"
        description="My journey in UI/UX design and continuous learning"
        gradientFrom="green-600"
        gradientTo="emerald-600"
      />

      <article className="max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={exp.title}
            title={exp.title}
            institution={exp.institution}
            period={exp.period}
            description={exp.description}
            highlights={exp.highlights}
            color={exp.color}
            animationDelay={`${index * 0.2}s`}
          />
        ))}
      </article>
    </section>
  );
};

export default UIUXExperienceSection;
