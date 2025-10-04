import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { Locale } from '@/lib/i18n/config';
import { TechnicalSkillsTranslations } from '@/types/i18n/i18n';
import { skillCategories } from '@/constants/skillCategories';
import SkillIcon from '@/components/atoms/icons/SkillIcon';
import SkillLevelBadge from '@/components/atoms/icons/SkillLevelBadge';

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  category: string;
  icon: string;
  experience: string;
  source: string;
}

export default function TechnicalSkills(
  {
    currentLang
  }: {
    currentLang: Locale;
  }
) {
  const { t } = useTranslations(currentLang);

  if (!t) return null;

  const levelMap = {
    Expert: t.technicalSkills.levels.expert,
    Advanced: t.technicalSkills.levels.advanced,
    Intermediate: t.technicalSkills.levels.intermediate,
    Beginner: t.technicalSkills.levels.beginner
  };

  return (
    <section className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category) => (
        <article key={category.name} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 drop-shadow-lg">
            <span className={`w-4 h-4 rounded-full bg-${category.color}-400 shadow-lg block`}></span>
            {t.technicalSkills.categories[category.translationKey]}
          </h3>
          <nav className="space-y-4">
            {category.skills.map((skill) => (
              <article key={skill.name} className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <section className="flex items-center gap-4">
                  <figure className="p-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-sm border border-white/20">
                    <SkillIcon skill={skill} />
                  </figure>
                  <section>
                    <h4 className="font-semibold text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-300">{skill.experience}</p>
                    <p className="text-xs text-gray-400 mt-1">Source: {skill.source}</p>
                  </section>
                </section>
                <SkillLevelBadge level={skill.level} label={levelMap[skill.level]} />
              </article>
            ))}
          </nav>
        </article>
      ))}
    </section>
  );
}
