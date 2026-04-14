'use client';

import Link from 'next/link';
import Image from 'next/image';
import { UIUXProject } from '@/features/uiux/data';
import { useReveal } from '@/shared/hooks';

interface UIUXProjectsSectionProps {
  projects: UIUXProject[];
}

export default function UIUXProjectsSection({ projects }: UIUXProjectsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="uiux-projects-heading"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
        <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">03</p>
        <h2
          id="uiux-projects-heading"
          className="font-display font-light text-ink leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Featured Projects
        </h2>
      </div>

      <ul className="space-y-0">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className={`reveal-item border-t border-hairline first:border-t-0 ${visible ? 'visible' : 'hidden'}`}
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <Link href={`/uiux/${project.id}`} className="group grid grid-cols-12 gap-6 py-10">

              {/* Image */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className="relative aspect-[4/3] bg-surface border border-hairline overflow-hidden">
                  {project.image && project.image !== '/api/placeholder/400/250' ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover saturate-[0.85] contrast-105 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display italic text-ink-muted/40 text-sm">Preview</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-body font-medium text-sm text-ink group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="font-body text-xs text-ink-muted border border-hairline px-2.5 py-1 shrink-0">
                    {project.category}
                  </span>
                </div>

                <p className="font-body text-sm text-ink-muted leading-relaxed mb-5 max-w-lg">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Design tools">
                  {project.tools.map((tool) => (
                    <li key={tool}>
                      <span className="font-body text-xs text-ink-muted border border-hairline px-2 py-0.5">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>

                <span className="font-body text-xs text-ink-muted group-hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5">
                  View case study
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
