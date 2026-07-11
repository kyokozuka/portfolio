import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import type {
  UIUXContent,
  UIUXProject,
  UIUXSkill,
  UIUXExperience,
  UIUXAcademicProject,
} from '@/features/uiux/data';

// uiux コンテンツの単一ソースは content/uiux/data.yml。
type UIUXData = {
  content: Record<string, UIUXContent>;
  projects: UIUXProject[];
  skills: UIUXSkill[];
  experience: UIUXExperience[];
  academicProjects: UIUXAcademicProject[];
  categoryColors: Record<string, string>;
};

const data = parse(
  readFileSync(path.join(process.cwd(), 'src/content/uiux/data.yml'), 'utf-8'),
) as UIUXData;

export const uiuxContent = data.content;
export const uiuxProjects = data.projects;
export const uiuxSkills = data.skills;
export const uiuxExperience = data.experience;
export const uiuxAcademicProjects = data.academicProjects;
export const categoryColors = data.categoryColors;

export type { UIUXContent, UIUXProject, UIUXSkill, UIUXExperience, UIUXAcademicProject };
