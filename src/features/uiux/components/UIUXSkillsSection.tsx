import { UIUXSkill } from '@/types/i18n/i18n';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { SkillCard } from '@/components/molecules/SkillCard';

interface UIUXSkillsSectionProps {
  skillsByCategory: Record<string, UIUXSkill[]>;
  categoryColors: Record<string, string>;
}

export const UIUXSkillsSection = ({
  skillsByCategory,
  categoryColors
}: UIUXSkillsSectionProps) => {
  return (
    <section className="mb-20 animate-slideInLeft">
      <SectionHeader
        title="Design Skills"
        description="A comprehensive toolkit for creating exceptional user experiences"
        gradientFrom="blue-600"
        gradientTo="cyan-600"
      />

      <article className="max-w-6xl mx-auto">
        {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
          <section key={category} className="mb-12">
            <header className="text-center mb-8">
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent mb-4`}>
                {category}
              </h3>
              <span className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto rounded-full block" />
            </header>

            <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                  animationDelay={`${categoryIndex * 0.1 + skillIndex * 0.05}s`}
                />
              ))}
            </nav>
          </section>
        ))}
      </article>
    </section>
  );
};

export default UIUXSkillsSection;
