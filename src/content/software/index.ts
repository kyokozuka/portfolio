// software ルートのコンテンツ単一ソース（Phase 3）。
// 現状は features/software/data から再エクスポートし、物理移設は後続 Phase で行う。
export {
  softwareContent,
  allExperience,
  featuredProjects,
  getKeyAchievements,
  getCoreExpertise,
} from '@/features/software/data';
export type {
  SoftwareContent,
  KeyAchievement,
  CoreExpertise,
  Experience,
  FeaturedProject,
} from '@/features/software/data';
