import { describe, it, expect } from 'vitest';
import { locales, defaultLocale, isLocale } from './i18n';

describe('locales / defaultLocale', () => {
  it('en と ja をサポートする', () => {
    expect(locales).toContain('en');
    expect(locales).toContain('ja');
  });

  it('デフォルトロケールは en', () => {
    expect(defaultLocale).toBe('en');
  });
});

describe('isLocale', () => {
  it('サポートするロケールは true', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('ja')).toBe(true);
  });

  it('未対応の値は false', () => {
    expect(isLocale('fr')).toBe(false);
    expect(isLocale('')).toBe(false);
    expect(isLocale('EN')).toBe(false);
  });
});
