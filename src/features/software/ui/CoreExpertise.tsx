"use client";

import { CoreExpertise as CoreExpertiseType } from "@/features/software/data";
import { useReveal } from "@/shared/hooks";

interface CoreExpertiseProps {
  expertise: CoreExpertiseType[];
  title: string;
}

export default function CoreExpertise({ expertise, title }: CoreExpertiseProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="expertise-heading"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-24"
    >
      <div className={`reveal-item mb-14 ${visible ? 'visible' : 'hidden'}`}>
        <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-3">02</p>
        <h2
          id="expertise-heading"
          className="font-display font-light text-ink leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
        {expertise.map((item, i) => (
          <article
            key={item.category}
            className={`reveal-item bg-canvas p-8 lg:p-10 ${visible ? 'visible' : 'hidden'}`}
            style={{ transitionDelay: `${(i + 1) * 80}ms` }}
          >
            <h3 className="font-body font-medium text-sm text-ink mb-2">{item.category}</h3>
            <p className="font-body text-sm text-ink-muted mb-5 leading-relaxed">{item.description}</p>
            <ul className="flex flex-wrap gap-1.5" aria-label={`${item.category} technologies`}>
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <span className="font-body text-xs text-ink-muted border border-hairline px-2.5 py-1">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
