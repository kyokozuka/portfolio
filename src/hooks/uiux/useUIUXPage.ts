import { useState, useEffect } from 'react';
import {
  uiuxContent,
  uiuxProjects,
  uiuxSkills,
  uiuxExperience,
  uiuxAcademicProjects,
  categoryColors
} from '@/data/uiux/uiuxData';

export interface UseUIUXPageReturn {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
  currentContent: any;
  projects: any[];
  skillsByCategory: Record<string, any[]>;
  experience: any[];
  academicProjects: any[];
  categoryColors: Record<string, string>;
}

export const useUIUXPage = (): UseUIUXPageReturn => {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentContent = uiuxContent[currentLang as keyof typeof uiuxContent];

  // Group skills by category
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