"use client";

import { useReveal } from "@/shared/hooks";

interface SoftwareSkillsSectionProps {
  title: string;
  currentLang: string;
}

const SKILL_GROUPS = [
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'AWS CDK', 'GCP', 'Azure', 'Terraform', 'Docker', 'Redshift', 'Glue', 'DynamoDB'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'PHP'],
  },
  {
    category: 'Frameworks & Tools',
    skills: ['FastAPI', 'React', 'NestJS', 'WordPress', 'GraphQL', 'MySQL'],
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['GitHub Actions', 'CodePipeline', 'CodeBuild', 'Docker', 'Monitoring'],
  },
];

export default function SoftwareSkillsSection({ title }: SoftwareSkillsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="skills-heading"
      className="border-t border-hairline bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
          <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">04</p>
          <h2
            id="skills-heading"
            className="font-display font-light text-ink leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className={`reveal-item bg-surface p-8 ${visible ? 'visible' : 'hidden'}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <h3 className="font-body text-xs text-ink-muted uppercase tracking-[0.12em] mb-5">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-body text-sm text-ink">
                    {skill}
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
