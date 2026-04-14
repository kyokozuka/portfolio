'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNavText } from '@/shared/utils';

interface HeaderProps {
  currentLang?: string;
  onLanguageChange?: (lang: string) => void;
}

export default function Header({ currentLang = 'en', onLanguageChange }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname === path + '/';

  const navLinks = [
    { href: '/software', key: 'software' },
    { href: '/uiux',     key: 'uiux'     },
    { href: '/contact',  key: 'contact'  },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canvas border-b border-hairline' : 'bg-canvas/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        {/* Wordmark */}
        <Link
          href="/"
          className="font-display italic text-xl leading-none text-ink hover:text-accent transition-colors duration-200"
        >
          Kento Yokozuka
        </Link>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map(({ href, key }) => (
              <li key={key}>
                <Link
                  href={href}
                  className={`font-body text-sm relative pb-0.5 transition-colors duration-200 ${
                    isActive(href)
                      ? 'text-ink after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {getNavText(key, currentLang)}
                </Link>
              </li>
            ))}

            {/* Language toggle */}
            {onLanguageChange && (
              <li className="flex items-center gap-1.5 font-body text-xs text-ink-muted">
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`transition-colors duration-200 cursor-pointer ${
                    currentLang === 'en' ? 'text-ink font-medium' : 'hover:text-ink'
                  }`}
                  aria-pressed={currentLang === 'en'}
                >
                  EN
                </button>
                <span className="text-hairline select-none" aria-hidden="true">|</span>
                <button
                  onClick={() => onLanguageChange('ja')}
                  className={`transition-colors duration-200 cursor-pointer ${
                    currentLang === 'ja' ? 'text-ink font-medium' : 'hover:text-ink'
                  }`}
                  aria-pressed={currentLang === 'ja'}
                >
                  JP
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
