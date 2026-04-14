'use client';

import { UIUXSkill } from '@/features/uiux/data';
import { useReveal } from '@/shared/hooks';

interface UIUXSkillsSectionProps {
  skillsByCategory: Record<string, UIUXSkill[]>;
}

export default function UIUXSkillsSection({ skillsByCategory }: UIUXSkillsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="uiux-skills-heading"
      className="border-t border-hairline bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
          <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">02</p>
          <h2
            id="uiux-skills-heading"
            className="font-display font-light text-ink leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Skills &amp; Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
          {Object.entries(skillsByCategory).map(([category, skills], i) => (
            <div
              key={category}
              className={`reveal-item bg-surface p-8 lg:p-10 ${visible ? 'visible' : 'hidden'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="font-body text-xs text-ink-muted uppercase tracking-[0.12em] mb-6">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li key={skill.name} className="font-body text-sm text-ink">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
