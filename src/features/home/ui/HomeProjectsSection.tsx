'use client';

import Link from 'next/link';
import { HomeContent, softwareProjects, uiuxProjects } from '@/features/home/data';
import { useReveal } from '@/shared/hooks';

interface HomeProjectsSectionProps {
  highlights: HomeContent['highlights'];
}

export default function HomeProjectsSection({ highlights }: HomeProjectsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="projects-heading"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      {/* Header */}
      <div className={`flex items-end justify-between mb-14 reveal-item ${visible ? 'visible' : 'hidden'}`}>
        <div>
          <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">04</p>
          <h2
            id="projects-heading"
            className="font-display font-light text-ink leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {highlights.title}
          </h2>
        </div>
      </div>

      {/* Two disciplines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-hairline border border-hairline">

        {/* Software projects */}
        <div className={`reveal-item bg-canvas p-10 ${visible ? 'visible' : 'hidden'}`} style={{ transitionDelay: '120ms' }}>
          <h3 className="font-body text-xs text-ink-muted uppercase tracking-[0.12em] mb-8">
            {highlights.software}
          </h3>
          <ul className="space-y-6">
            {softwareProjects.map((project) => (
              <li key={project.name} className="border-t border-hairline pt-6 first:border-t-0 first:pt-0">
                <article>
                  <h4 className="font-body font-medium text-sm text-ink mb-1">{project.name}</h4>
                  <p className="font-body text-sm text-ink-muted mb-3">{project.desc}</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="font-body text-xs text-ink-muted border border-hairline px-2 py-0.5">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
          <Link
            href="/software"
            className="font-body text-sm font-medium text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 mt-8"
          >
            All software work <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* UI/UX projects */}
        <div className={`reveal-item bg-canvas p-10 ${visible ? 'visible' : 'hidden'}`} style={{ transitionDelay: '200ms' }}>
          <h3 className="font-body text-xs text-ink-muted uppercase tracking-[0.12em] mb-8">
            {highlights.uiux}
          </h3>
          <ul className="space-y-6">
            {uiuxProjects.map((project) => (
              <li key={project.name} className="border-t border-hairline pt-6 first:border-t-0 first:pt-0">
                <article>
                  <h4 className="font-body font-medium text-sm text-ink mb-1">{project.name}</h4>
                  <p className="font-body text-sm text-ink-muted mb-3">{project.desc}</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Tools">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="font-body text-xs text-ink-muted border border-hairline px-2 py-0.5">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
          <Link
            href="/uiux"
            className="font-body text-sm font-medium text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 mt-8"
          >
            All design work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
