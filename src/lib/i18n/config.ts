/**
 * i18n Configuration
 * Centralized internationalization setup
 */

export const i18nConfig = {
  locales: ['en', 'ja'] as const,
  defaultLocale: 'en' as const,
} as const;

export type Locale = typeof i18nConfig.locales[number];

export const getLocaleLabel = (locale: Locale): string => {
  const labels: Record<Locale, string> = {
    en: 'English',
    ja: '日本語',
  };
  return labels[locale];
};
