import { useEffect, useState } from 'react';
import {
  uiuxContent,
  uiuxProjects,
  uiuxSkills,
  uiuxExperience,
  uiuxAcademicProjects,
  categoryColors,
  UIUXContent,
  UIUXProject,
  UIUXSkill,
  UIUXExperience,
  UIUXAcademicProject
} from '@/features/uiux/data';
import { useLanguage } from '@/shared/hooks';

export interface UseUIUXPageReturn {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
  currentContent: UIUXContent;
  projects: UIUXProject[];
  skillsByCategory: Record<string, UIUXSkill[]>;
  experience: UIUXExperience[];
  academicProjects: UIUXAcademicProject[];
  categoryColors: Record<string, string>;
}

export const useUIUXPage = (): UseUIUXPageReturn => {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentContent = uiuxContent[currentLang as keyof typeof uiuxContent];

  const skillsByCategory = uiuxSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof uiuxSkills>);

  return {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentContent,
    projects: uiuxProjects,
    skillsByCategory,
    experience: uiuxExperience,
    academicProjects: uiuxAcademicProjects,
    categoryColors
  };
};
