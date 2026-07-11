// home ルートのコンテンツ単一ソース（Phase 2）。
// 現状は features/home/data から再エクスポートし、content/ への物理移設は
// 後続 Phase で行う（このパスを先に確立して参照を content/ に寄せる）。
export { homeContent } from '@/features/home/data';
export type { HomeContent } from '@/features/home/data';
