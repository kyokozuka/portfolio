// サポートするロケール定義。ロケールルーティング（app/[lang]）と
// 辞書ロードの単一ソース。middleware を使わない静的書き出し前提のため、
// generateStaticParams はこの locales を返す。
export const locales = ['en', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
