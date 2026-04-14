"use client";

interface HeroSectionProps {
  title: string;
  description: string;
  isLoaded: boolean; // kept for interface compatibility
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <section aria-labelledby="sw-hero-heading" className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20">
      <div className="max-w-3xl">

        <p className="hero-l1 font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-8">
          01 · Software Engineering
        </p>

        <h1
          id="sw-hero-heading"
          className="hero-l2 font-display font-light text-ink leading-none mb-7"
          style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.025em' }}
        >
          {title}
        </h1>

        <p
          className="hero-l3 font-body text-ink-muted leading-relaxed max-w-2xl"
          style={{ fontSize: '1.0625rem' }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
