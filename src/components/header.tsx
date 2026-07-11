'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/i18n';
import { LanguageSwitcher } from './language-switcher';

// 横断再利用ヘッダー（components/）。ロケールは URL 由来（props.lang）。
// NOTE: nav の遷移先は移行途中のため現状の絶対パス（/software 等）を指す。
// 各ルートが app/[lang] へ移設された Phase で /[lang]/... に更新する。
export default function Header({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dict = getDictionary(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // software/uiux は移設済み → /[lang]/...。contact は後続 Phase で移設予定のため現状パス。
  const navLinks = [
    { href: `/${lang}/software`, label: dict.nav.software },
    { href: `/${lang}/uiux`, label: dict.nav.uiux },
    { href: '/contact', label: dict.nav.contact },
  ];

  const isActive = (path: string) => pathname === path || pathname === path + '/';

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canvas border-b border-hairline' : 'bg-canvas/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link
          href={`/${lang}`}
          className="font-display italic text-xl leading-none text-ink hover:text-accent transition-colors duration-200"
        >
          Kento Yokozuka
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-body text-sm relative pb-0.5 transition-colors duration-200 ${
                    isActive(href)
                      ? 'text-ink after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher currentLang={lang} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
