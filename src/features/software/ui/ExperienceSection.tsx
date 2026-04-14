"use client";

import { useState } from "react";
import { Experience } from "@/features/software/data";
import { useReveal } from "@/shared/hooks";

interface ExperienceSectionProps {
  experience: Experience[];
  title: string;
  showMoreText: string;
  showLessText: string;
  showAllExperience: boolean;
  onToggleExperience: () => void;
  currentLang: string;
}

export default function ExperienceSection({
  experience,
  title,
  showMoreText,
  showLessText,
  showAllExperience,
  onToggleExperience,
  currentLang,
}: ExperienceSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const displayed = showAllExperience ? experience : experience.slice(0, 3);

  return (
    <section
      ref={ref}
      aria-labelledby="experience-heading"
      className="border-t border-hairline max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
        <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">03</p>
        <h2
          id="experience-heading"
          className="font-display font-light text-ink leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {title}
        </h2>
      </div>

      <ol className="space-y-0">
        {displayed.map((exp, i) => {
          const content = currentLang === 'ja' ? exp.ja : exp.en;
          const isExpanded = expandedIndex === i;

          return (
            <li
              key={`${content.company}-${i}`}
              className={`reveal-item border-t border-hairline first:border-t-0 ${visible ? 'visible' : 'hidden'}`}
              style={{ transitionDelay: `${(i + 1) * 70}ms` }}
            >
              <article>
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full text-left py-7 grid grid-cols-12 gap-4 group"
                  aria-expanded={isExpanded}
                >
                  <div className="col-span-12 md:col-span-3">
                    <time className="font-body text-xs text-ink-muted">{content.period}</time>
                  </div>
                  <div className="col-span-11 md:col-span-8">
                    <h3 className="font-body font-medium text-sm text-ink mb-0.5 group-hover:text-accent transition-colors duration-200">
                      {content.title}
                    </h3>
                    <p className="font-body text-xs text-ink-muted">{content.company}</p>
                    <p className="font-body text-xs text-ink-muted/70 mt-0.5">{content.focus}</p>
                  </div>
                  <div className="col-span-1 flex items-start justify-end pt-0.5">
                    <span
                      className="font-body text-sm text-ink-muted transition-transform duration-200"
                      style={{ transform: isExpanded ? 'rotate(45deg)' : 'none' }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="pb-8 grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-start-4 md:col-span-8">
                      <p className="font-body text-sm text-ink-muted mb-5 leading-relaxed">
                        {content.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {content.achievements.map((achievement) => (
                          <li key={achievement} className="font-body text-sm text-ink-muted flex gap-3">
                            <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">—</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                        {content.keyTechnologies.map((tech) => (
                          <li key={tech}>
                            <span className="font-body text-xs text-ink-muted border border-hairline px-2.5 py-1">
                              {tech}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-hairline pt-8 mt-4">
        <button
          type="button"
          onClick={onToggleExperience}
          className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
        >
          {showAllExperience ? showLessText : showMoreText}
          <span
            className="transition-transform duration-200"
            style={{ transform: showAllExperience ? 'rotate(180deg)' : 'none' }}
            aria-hidden="true"
          >
            ↓
          </span>
        </button>
      </div>
    </section>
  );
}
