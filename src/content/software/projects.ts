import { ecommerceData, jmaSystemsData, techDoctorData } from '@/features/software/data';
import type { SoftwareProjectData } from '@/features/software/types';

// slug → プロジェクトデータのマップ。[slug] 動的ルートの単一ソース。
// プロジェクト追加はこのマップに1行足すだけで静的生成に追随する。
export const softwareProjects: Record<string, SoftwareProjectData> = {
  ecommerce: ecommerceData,
  'jma-systems': jmaSystemsData,
  techdoctor: techDoctorData,
};

export const softwareSlugs = Object.keys(softwareProjects);
