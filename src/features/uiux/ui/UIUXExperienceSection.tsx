'use client';

import { UIUXExperience } from '@/features/uiux/data';
import { useReveal } from '@/shared/hooks';

interface UIUXExperienceSectionProps {
  experience: UIUXExperience[];
}

export default function UIUXExperienceSection({ experience }: UIUXExperienceSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="uiux-edu-heading"
      className="border-t border-hairline max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
        <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">04</p>
        <h2
          id="uiux-edu-heading"
          className="font-display font-light text-ink leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Education &amp; Experience
        </h2>
      </div>

      <ol className="space-y-0">
        {experience.map((exp, i) => (
          <li
            key={exp.title}
            className={`reveal-item border-t border-hairline first:border-t-0 py-10 grid grid-cols-12 gap-6 ${
              visible ? 'visible' : 'hidden'
            }`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <article className="col-span-12">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <time className="font-body text-xs text-ink-muted">{exp.period}</time>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-body font-medium text-sm text-ink mb-0.5">{exp.title}</h3>
                  <p className="font-body text-xs text-ink-muted mb-4">{exp.institution}</p>
                  <p className="font-body text-sm text-ink-muted leading-relaxed mb-5 max-w-xl">
                    {exp.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Focus areas">
                    {exp.highlights.map((h) => (
                      <li key={h}>
                        <span className="font-body text-xs text-ink-muted border border-hairline px-2.5 py-1">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
