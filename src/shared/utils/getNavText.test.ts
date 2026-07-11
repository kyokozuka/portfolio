import { describe, it, expect } from 'vitest';
import { getNavText } from './getNavText';

describe('getNavText', () => {
  it('指定言語のラベルを返す（ja）', () => {
    expect(getNavText('home', 'ja')).toBe('ホーム');
    expect(getNavText('contact', 'ja')).toBe('お問い合わせ');
  });

  it('指定言語のラベルを返す（en）', () => {
    expect(getNavText('home', 'en')).toBe('Home');
    expect(getNavText('software', 'en')).toBe('Software');
  });

  it('未知の言語のときは en にフォールバックする', () => {
    expect(getNavText('home', 'fr')).toBe('Home');
  });

  it('未知のキーのときはキー自身を返す', () => {
    expect(getNavText('unknown-key', 'en')).toBe('unknown-key');
  });
});
