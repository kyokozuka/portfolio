"use client";

import { Icon } from '@iconify/react';
import { Header, Footer } from "@/shared/ui";
import { contactData } from '@/features/contact/data';
import { useContactPage } from '@/features/contact/model';
import { useReveal } from '@/shared/hooks';

function ContactContent() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="contact-heading"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-32"
    >
      <div className={`reveal-item max-w-3xl ${visible ? 'visible' : 'hidden'}`}>
        <p className="font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-10">
          04 · Contact
        </p>

        <h1
          id="contact-heading"
          className="font-display font-light text-ink leading-none mb-16"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.025em' }}
        >
          Let&apos;s work<br />
          <em>together.</em>
        </h1>
      </div>

      <div className={`reveal-item ${visible ? 'visible' : 'hidden'}`} style={{ transitionDelay: '200ms' }}>
        <address className="not-italic space-y-0 border-t border-hairline">

          {/* Email */}
          <div className="border-b border-hairline py-8 grid grid-cols-12 gap-4 group">
            <div className="col-span-12 md:col-span-2">
              <span className="font-body text-xs text-ink-muted uppercase tracking-[0.12em]">Email</span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <a
                href="mailto:kento.yokozuka@gmail.com"
                className="font-display font-light text-ink hover:text-accent transition-colors duration-200"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)', letterSpacing: '-0.01em' }}
              >
                kento.yokozuka@gmail.com
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="border-b border-hairline py-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-2">
              <span className="font-body text-xs text-ink-muted uppercase tracking-[0.12em]">GitHub</span>
            </div>
            <div className="col-span-12 md:col-span-10 flex items-center gap-3">
              <Icon icon="mdi:github" className="text-xl text-ink-muted" aria-hidden="true" />
              <a
                href="https://github.com/kyokozuka"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200"
              >
                @kyokozuka
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="border-b border-hairline py-8 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-2">
              <span className="font-body text-xs text-ink-muted uppercase tracking-[0.12em]">LinkedIn</span>
            </div>
            <div className="col-span-12 md:col-span-10 flex items-center gap-3">
              <Icon icon="mdi:linkedin" className="text-xl text-ink-muted" aria-hidden="true" />
              <a
                href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200"
              >
                Kento Yokozuka
              </a>
            </div>
          </div>
        </address>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const { currentLang, setCurrentLang } = useContactPage(contactData);

  return (
    <div className="min-h-screen bg-canvas">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        <ContactContent />
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
