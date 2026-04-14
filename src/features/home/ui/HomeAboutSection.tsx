'use client';

import { HomeContent } from '@/features/home/data';
import { useReveal } from '@/shared/hooks';

interface HomeAboutSectionProps {
  about: HomeContent['about'];
}

export default function HomeAboutSection({ about }: HomeAboutSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="about-heading"
      className="border-t border-hairline bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className={`lg:col-span-4 reveal-item ${visible ? 'visible' : 'hidden'}`}>
            <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-4">
              03
            </p>
            <h2
              id="about-heading"
              className="font-display font-light text-ink leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              {about.title}
            </h2>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {[about.experience, about.philosophy].map((section, i) => (
              <article
                key={section.title}
                className={`reveal-item ${visible ? 'visible' : 'hidden'}`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <h3 className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-4">
                  {section.title}
                </h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
