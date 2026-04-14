'use client';

import Link from 'next/link';
import { HomeContent } from '@/features/home/data';

interface HomeHeroSectionProps {
  currentContent: HomeContent;
  isLoaded: boolean; // kept for interface compatibility, animation is CSS-driven
}

export default function HomeHeroSection({ currentContent }: HomeHeroSectionProps) {
  return (
    <section aria-labelledby="hero-heading" className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-4xl">

        {/* Label */}
        <p className="hero-l1 font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-10">
          Portfolio · 2025
        </p>

        {/* Name */}
        <h1
          id="hero-heading"
          className="hero-l2 font-display font-light text-ink leading-none mb-7"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.025em' }}
        >
          {currentContent.title}
        </h1>

        {/* Tagline */}
        <p
          className="hero-l3 font-display italic text-ink-muted mb-8"
          style={{ fontSize: 'clamp(1.25rem, 2.8vw, 2rem)', lineHeight: 1.25 }}
        >
          {currentContent.subtitle}
        </p>

        {/* Description */}
        <p
          className="hero-l3 font-body text-ink-muted leading-relaxed max-w-2xl mb-14"
          style={{ fontSize: '1.0625rem' }}
        >
          {currentContent.description}
        </p>

        {/* CTAs */}
        <div className="hero-l4 flex flex-wrap gap-4">
          <Link
            href="/software"
            className="font-body font-medium text-sm px-8 py-3.5 bg-ink text-canvas hover:bg-accent transition-colors duration-200"
          >
            Software Work
          </Link>
          <Link
            href="/uiux"
            className="font-body font-medium text-sm px-8 py-3.5 border border-ink text-ink hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Design Work
          </Link>
        </div>
      </div>
    </section>
  );
}
