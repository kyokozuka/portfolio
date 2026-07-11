import type { Locale } from './i18n';
import { defaultLocale } from './i18n';
import type { Dictionary } from '@/content/dictionaries/dictionary';
import { en } from '@/content/dictionaries/en';
import { ja } from '@/content/dictionaries/ja';

const dictionaries: Record<Locale, Dictionary> = { en, ja };

// ロケールに対応する辞書を返す。静的なコンテンツのため同期で解決する。
// 想定外の値には defaultLocale の辞書でフォールバックする。
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
