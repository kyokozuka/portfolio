import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import type {
  SoftwareContent,
  KeyAchievement,
  CoreExpertise,
  Experience,
  FeaturedProject,
} from '@/features/software/data';

// software コンテンツの単一ソースは content/software/data.yml。
// 言語テキストは YAML、派生（メトリクス・アイコン等の静的構造）は下のアクセサで合成する。
type SoftwareData = {
  content: SoftwareContent;
  experience: Experience[];
  featuredProjects: FeaturedProject[];
};

const data = parse(
  readFileSync(path.join(process.cwd(), 'src/content/software/data.yml'), 'utf-8'),
) as SoftwareData;

export const softwareContent = data.content;
export const allExperience = data.experience;
export const featuredProjects = data.featuredProjects;

export const getKeyAchievements = (currentLang: string): KeyAchievement[] => {
  const c = softwareContent[currentLang as keyof typeof softwareContent];
  return [
    { metric: '80%', description: c.achievements.deployments, icon: '🚀' },
    { metric: '50%', description: c.achievements.effort, icon: '⚡' },
    { metric: '400ms', description: c.achievements.loadTime, icon: '⚡' },
    { metric: '10+', description: c.achievements.experience, icon: '💼' },
  ];
};

export const getCoreExpertise = (currentLang: string): CoreExpertise[] => {
  const c = softwareContent[currentLang as keyof typeof softwareContent];
  return [
    {
      category: c.coreExpertise.cloud.title,
      description: c.coreExpertise.cloud.description,
      technologies: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker'],
      color: 'blue',
      icon: 'mdi:cloud',
      iconColor: 'text-blue-500',
    },
    {
      category: c.coreExpertise.languages.title,
      description: c.coreExpertise.languages.description,
      technologies: ['Python', 'TypeScript', 'JavaScript', 'PHP'],
      color: 'emerald',
      icon: 'mdi:code-braces',
      iconColor: 'text-emerald-500',
    },
    {
      category: c.coreExpertise.frameworks.title,
      description: c.coreExpertise.frameworks.description,
      technologies: ['FastAPI', 'React', 'WordPress', 'MySQL'],
      color: 'violet',
      icon: 'mdi:puzzle',
      iconColor: 'text-violet-500',
    },
    {
      category: c.coreExpertise.tools.title,
      description: c.coreExpertise.tools.description,
      technologies: ['GitHub', 'Slack', 'Backlog', 'GraphQL'],
      color: 'rose',
      icon: 'mdi:tools',
      iconColor: 'text-rose-500',
    },
  ];
};

export type { SoftwareContent, KeyAchievement, CoreExpertise, Experience, FeaturedProject };
