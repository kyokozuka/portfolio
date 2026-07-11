'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/lib/i18n';

const labels: Record<Locale, string> = { en: 'EN', ja: 'JP' };

// 現在のパスのロケールセグメントを対象ロケールに差し替えたリンクを描画する。
// URL でロケールを保持するため、状態の伝播漏れが起きない。
export function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();

  const hrefFor = (target: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && isLocale(segments[0])) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    return '/' + segments.join('/');
  };

  return (
    <span className="flex items-center gap-1.5 font-body text-xs text-ink-muted">
      {locales.map((loc, i) => (
        <Fragment key={loc}>
          {i > 0 && (
            <span className="text-hairline select-none" aria-hidden="true">
              |
            </span>
          )}
          <Link
            href={hrefFor(loc)}
            aria-current={currentLang === loc ? 'true' : undefined}
            className={`transition-colors duration-200 ${
              currentLang === loc ? 'text-ink font-medium' : 'hover:text-ink'
            }`}
          >
            {labels[loc]}
          </Link>
        </Fragment>
      ))}
    </span>
  );
}
