/**
 * useTranslations hook
 * Custom hook for accessing translations
 */

import { useState, useEffect } from 'react';
import { Locale } from './config';
import { Translations } from '@/types/i18n';

export const useTranslations = (initialLocale: Locale = 'en') => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const data = await import(`@/i18n/${locale}.json`);
        setTranslations(data.default);
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error);
      }
    };

    loadTranslations();
  }, [locale]);

  return {
    locale,
    setLocale,
    t: translations,
  };
};
