import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import type { AchievyData, SixAcresData } from '@/features/uiux/types';

// uiux 詳細ルートの slug 一覧。詳細は案件ごとに設計が異なるため、[slug] ルートで
// 案件別コンポーネントにディスパッチする（実データは content/uiux/projects/<slug>.yml）。
export const uiuxProjectSlugs = ['achievy', 'six-acres'];

const load = <T>(slug: string): T =>
  parse(
    readFileSync(path.join(process.cwd(), 'src/content/uiux/projects', `${slug}.yml`), 'utf-8'),
  ) as T;

export const getAchievyData = () => load<AchievyData>('achievy');
export const getSixAcresData = () => load<SixAcresData>('six-acres');
