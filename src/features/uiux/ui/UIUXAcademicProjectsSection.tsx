'use client';

import { UIUXAcademicProject } from '@/features/uiux/data';
import { useReveal } from '@/shared/hooks';

interface UIUXAcademicProjectsSectionProps {
  academicProjects: UIUXAcademicProject[];
}

export default function UIUXAcademicProjectsSection({ academicProjects }: UIUXAcademicProjectsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="academic-heading"
      className="border-t border-hairline bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
          <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">05</p>
          <h2
            id="academic-heading"
            className="font-display font-light text-ink leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Academic Projects
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {academicProjects.map((project, i) => (
            <li
              key={project.title}
              className={`reveal-item ${visible ? 'visible' : 'hidden'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <article className="bg-surface p-8 lg:p-10 h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-body font-medium text-sm text-ink leading-snug">{project.title}</h3>
                  <span
                    className={`font-body text-xs px-2.5 py-1 shrink-0 border ${
                      project.status === 'Completed'
                        ? 'border-ink-muted/30 text-ink-muted'
                        : 'border-accent/30 text-accent'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="font-body text-sm text-ink-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5" aria-label="Tools used">
                  {project.tools.map((tool) => (
                    <li key={tool}>
                      <span className="font-body text-xs text-ink-muted border border-hairline px-2 py-0.5">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
