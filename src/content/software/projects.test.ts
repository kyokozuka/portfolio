import { describe, it, expect } from 'vitest';
import { softwareProjects, softwareSlugs } from './projects';
import { locales } from '@/lib/i18n';

// [slug] ルートの generateStaticParams / notFound を支えるデータ不変条件。
describe('softwareProjects', () => {
  it('softwareSlugs はマップのキーと一致する', () => {
    expect(softwareSlugs.sort()).toEqual(Object.keys(softwareProjects).sort());
  });

  it('想定の slug を含む', () => {
    expect(softwareSlugs).toEqual(
      expect.arrayContaining(['ecommerce', 'jma-systems', 'techdoctor']),
    );
  });

  it('各プロジェクトが全ロケールのデータを持つ', () => {
    for (const slug of softwareSlugs) {
      for (const locale of locales) {
        expect(softwareProjects[slug][locale], `${slug}.${locale}`).toBeDefined();
      }
    }
  });
});
