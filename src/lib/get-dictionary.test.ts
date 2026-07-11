import { describe, it, expect } from 'vitest';
import { getDictionary } from './get-dictionary';

describe('getDictionary', () => {
  it('en の辞書を返す', () => {
    const dict = getDictionary('en');
    expect(dict.nav.home).toBe('Home');
    expect(dict.nav.contact).toBe('Contact');
  });

  it('ja の辞書を返す', () => {
    const dict = getDictionary('ja');
    expect(dict.nav.home).toBe('ホーム');
    expect(dict.nav.contact).toBe('お問い合わせ');
  });

  it('全ロケールで nav の全キーが揃っている', () => {
    for (const locale of ['en', 'ja'] as const) {
      const nav = getDictionary(locale).nav;
      expect(Object.keys(nav).sort()).toEqual(['contact', 'home', 'software', 'uiux']);
    }
  });
});
