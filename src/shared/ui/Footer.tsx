'use client';

import { Icon } from '@iconify/react';

interface FooterProps {
  currentLang?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Footer({ currentLang }: FooterProps) {
  return (
    <footer className="mt-32 border-t border-hairline bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Identity */}
          <div>
            <p className="font-display italic text-xl text-ink leading-none mb-1">
              Kento Yokozuka
            </p>
            <p className="font-body text-sm text-ink-muted">
              Software Engineer &amp; UI/UX Designer
            </p>
          </div>

          {/* Contact links */}
          <address className="not-italic flex items-center gap-6">
            <a
              href="mailto:kento.yokozuka@gmail.com"
              className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200"
            >
              kento.yokozuka@gmail.com
            </a>
            <a
              href="https://github.com/kyokozuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted hover:text-ink transition-colors duration-200"
            >
              <Icon icon="mdi:github" className="text-xl" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted hover:text-ink transition-colors duration-200"
            >
              <Icon icon="mdi:linkedin" className="text-xl" aria-hidden="true" />
            </a>
          </address>

          {/* Copyright */}
          <p className="font-body text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Kento Yokozuka
          </p>
        </div>
      </div>
    </footer>
  );
}
