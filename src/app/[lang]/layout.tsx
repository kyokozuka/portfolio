import { locales } from '@/lib/i18n';

// output: 'export' では middleware が使えないため、ここで全ロケールを
// 静的生成する。ルート layout（<html>）は app/layout.tsx が担うため、
// このセグメント layout は子をそのまま通す。
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return children;
}
