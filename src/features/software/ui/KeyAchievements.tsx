"use client";

import { KeyAchievement } from "@/features/software/data";
import { useReveal } from "@/shared/hooks";

interface KeyAchievementsProps {
  achievements: KeyAchievement[];
}

export default function KeyAchievements({ achievements }: KeyAchievementsProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="achievements-heading"
      className="border-y border-hairline bg-surface"
    >
      <h2 id="achievements-heading" className="sr-only">Key Achievements</h2>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {achievements.map((item, i) => (
            <div
              key={item.metric}
              className={`reveal-item px-0 md:px-10 first:pl-0 py-2 md:border-l md:first:border-l-0 border-hairline ${
                visible ? 'visible' : 'hidden'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <dd
                className="font-display font-light text-ink leading-none mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
              >
                {item.metric}
              </dd>
              <dt className="font-body text-xs text-ink-muted uppercase tracking-[0.12em] leading-snug">
                {item.description}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
