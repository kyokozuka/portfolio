"use client";

import Link from "next/link";
import { useReveal } from "@/shared/hooks";

export default function ContactSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="sw-contact-heading"
      className="border-t border-hairline max-w-7xl mx-auto px-6 lg:px-12 py-32"
    >
      <div className={`reveal-item ${visible ? 'visible' : 'hidden'}`}>
        <h2
          id="sw-contact-heading"
          className="font-display font-light text-ink leading-none mb-8"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
        >
          Let&apos;s build<br />
          <em>something great.</em>
        </h2>
        <Link
          href="/contact"
          className="font-body font-medium text-sm px-8 py-3.5 bg-ink text-canvas hover:bg-accent transition-colors duration-200 inline-block"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
