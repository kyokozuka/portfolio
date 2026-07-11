import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import type { SoftwareProjectData } from '@/features/software/types';

// slug → プロジェクトデータのマップ。[slug] 動的ルートの単一ソース。
// 各プロジェクトの実データは content/software/projects/<slug>.yml。
const load = (slug: string) =>
  parse(
    readFileSync(path.join(process.cwd(), 'src/content/software/projects', `${slug}.yml`), 'utf-8'),
  ) as SoftwareProjectData;

export const softwareProjects: Record<string, SoftwareProjectData> = {
  ecommerce: load('ecommerce'),
  'jma-systems': load('jma-systems'),
  techdoctor: load('techdoctor'),
};

export const softwareSlugs = Object.keys(softwareProjects);
