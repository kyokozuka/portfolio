import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import type { HomeContent } from '@/features/home/data';

// home コンテンツの単一ソースは content/home.yml。
// ビルド時（Server Component）に fs で読み込み、型付けしてエクスポートする。
const file = path.join(process.cwd(), 'src/content/home.yml');
export const homeContent = parse(readFileSync(file, 'utf-8')) as Record<string, HomeContent>;

export type { HomeContent };
