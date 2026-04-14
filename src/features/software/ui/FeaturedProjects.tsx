"use client";

import Link from "next/link";
import { FeaturedProject } from "@/features/software/data";
import { useReveal } from "@/shared/hooks";

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
  title: string;
  currentLang: string;
}

export default function FeaturedProjects({ projects, title, currentLang }: FeaturedProjectsProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="projects-heading"
      className="border-t border-hairline max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
        <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">05</p>
        <h2
          id="projects-heading"
          className="font-display font-light text-ink leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {title}
        </h2>
      </div>

      <ul className="space-y-0">
        {projects.map((project, i) => {
          const content = currentLang === 'ja' ? project.ja : project.en;

          return (
            <li
              key={project.id}
              className={`reveal-item border-t border-hairline first:border-t-0 ${visible ? 'visible' : 'hidden'}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <Link
                href={`/software/${project.id}`}
                className="grid grid-cols-12 gap-4 py-8 group"
              >
                <div className="col-span-12 md:col-span-3">
                  <time className="font-body text-xs text-ink-muted">{content.period}</time>
                </div>
                <div className="col-span-11 md:col-span-8">
                  <h3 className="font-body font-medium text-sm text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {content.title}
                  </h3>
                  <p className="font-body text-sm text-ink-muted mb-4 leading-relaxed max-w-lg">
                    {content.description}
                  </p>
                  <p className="font-body text-sm text-accent mb-4 leading-relaxed">
                    {content.impact}
                  </p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {content.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="font-body text-xs text-ink-muted border border-hairline px-2.5 py-1">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1 flex items-start justify-end pt-0.5">
                  <span
                    className="font-body text-sm text-ink-muted transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
