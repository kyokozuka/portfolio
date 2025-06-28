import { useState, useEffect } from 'react';
import {
  softwareContent,
  allExperience,
  featuredProjects,
  getKeyAchievements,
  getCoreExpertise,
  SoftwareContent,
  KeyAchievement,
  CoreExpertise,
  Experience,
  FeaturedProject
} from '@/data/softwareData';

export interface UseSoftwarePageReturn {
  showAllExperience: boolean;
  setShowAllExperience: (show: boolean) => void;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
  currentContent: SoftwareContent[keyof SoftwareContent];
  keyAchievements: KeyAchievement[];
  coreExpertise: CoreExpertise[];
  allExperience: Experience[];
  featuredProjects: FeaturedProject[];
}

export const useSoftwarePage = (): UseSoftwarePageReturn => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentContent = softwareContent[currentLang as keyof typeof softwareContent];
  const keyAchievements = getKeyAchievements(currentLang);
  const coreExpertise = getCoreExpertise(currentLang);

  return {
    showAllExperience,
    setShowAllExperience,
    currentLang,
    setCurrentLang,
    isLoaded,
    currentContent,
    keyAchievements,
    coreExpertise,
    allExperience,
    featuredProjects
  };
};