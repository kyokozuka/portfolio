'use client';

import { HomeContent } from '@/features/home/data';
import { useReveal } from '@/shared/hooks';

interface HomeAchievementsSectionProps {
  achievements: HomeContent['achievements'];
}

const METRICS = [
  { value: '80%', key: 'deployments' as const },
  { value: '50%', key: 'effort'      as const },
  { value: '2s',  key: 'loadTime'   as const },
  { value: '8+',  key: 'experience' as const },
];

export default function HomeAchievementsSection({ achievements }: HomeAchievementsSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="achievements-heading"
      className="border-y border-hairline bg-surface"
    >
      <h2 id="achievements-heading" className="sr-only">Key Metrics</h2>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {METRICS.map(({ value, key }, i) => (
            <div
              key={key}
              className={`reveal-item px-0 md:px-10 first:pl-0 py-2 md:border-l md:first:border-l-0 border-hairline ${
                visible ? 'visible' : 'hidden'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <dd
                className="font-display font-light text-ink leading-none mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
              >
                {value}
              </dd>
              <dt className="font-body text-sm text-ink-muted uppercase tracking-[0.12em]">
                {achievements[key]}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
