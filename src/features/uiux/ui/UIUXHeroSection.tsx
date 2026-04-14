'use client';

interface UIUXHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  isLoaded: boolean; // kept for interface compatibility
}

export default function UIUXHeroSection({ title, subtitle, description }: UIUXHeroSectionProps) {
  return (
    <section aria-labelledby="uiux-hero-heading" className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20">
      <div className="max-w-3xl">

        <p className="hero-l1 font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-8">
          01 · UI/UX Design
        </p>

        <h1
          id="uiux-hero-heading"
          className="hero-l2 font-display font-light text-ink leading-none mb-7"
          style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.025em' }}
        >
          {title}
        </h1>

        <p
          className="hero-l3 font-display italic text-ink-muted mb-8"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.3 }}
        >
          {subtitle}
        </p>

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
