'use client';

import Link from 'next/link';
import { HomeContent } from '@/features/home/data';
import { useReveal } from '@/shared/hooks';

interface HomeRoleCardsSectionProps {
  software: HomeContent['software'];
  uiux: HomeContent['uiux'];
}

export default function HomeRoleCardsSection({ software, uiux }: HomeRoleCardsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  const cards = [
    { data: software, href: '/software', num: '01' },
    { data: uiux,     href: '/uiux',     num: '02' },
  ];

  return (
    <section
      ref={ref}
      aria-labelledby="roles-heading"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      <h2 id="roles-heading" className="sr-only">Disciplines</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
        {cards.map(({ data, href, num }, i) => (
          <article
            key={num}
            className={`reveal-item bg-canvas p-10 lg:p-14 group relative ${
              visible ? 'visible' : 'hidden'
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Section number */}
            <span
              className="font-display font-light text-ink-muted/20 select-none absolute top-8 right-10 leading-none"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              aria-hidden="true"
            >
              {num}
            </span>

            <h3
              className="font-display font-medium text-ink mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              {data.title}
            </h3>

            <p className="font-body text-sm text-ink-muted leading-relaxed mb-8 max-w-sm">
              {data.description}
            </p>

            {/* Skill tags */}
            <ul className="flex flex-wrap gap-2 mb-10" aria-label="Key skills">
              {data.skills.map((skill) => (
                <li key={skill}>
                  <span className="font-body text-xs text-ink-muted border border-hairline px-3 py-1">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={href}
              className="font-body text-sm font-medium text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 group/link"
            >
              View work
              <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
