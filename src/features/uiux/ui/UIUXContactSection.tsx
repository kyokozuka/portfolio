'use client';

import Link from 'next/link';
import { useReveal } from '@/shared/hooks';

interface UIUXContactSectionProps {
  contactText: string;
}

export default function UIUXContactSection({ contactText }: UIUXContactSectionProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="uiux-contact-heading"
      className="border-t border-hairline max-w-7xl mx-auto px-6 lg:px-12 py-32"
    >
      <div className={`reveal-item ${visible ? 'visible' : 'hidden'}`}>
        <h2
          id="uiux-contact-heading"
          className="font-display font-light text-ink leading-none mb-8"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
        >
          {contactText}<br />
          <em>Let&apos;s design together.</em>
        </h2>
        <Link
          href="/contact"
          className="font-body font-medium text-sm px-8 py-3.5 bg-ink text-canvas hover:bg-accent transition-colors duration-200 inline-block"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
