import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n/useTranslations';
import {
  KeyAchievement,
  CoreExpertise,
  Experience,
  FeaturedProject
} from '@/types/i18n/i18n';

export interface UseSoftwarePageReturn {
  showAllExperience: boolean;
  setShowAllExperience: (show: boolean) => void;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
  currentContent: {
    title: string;
    description: string;
    coreExpertise: { title: string };
    skills: { title: string };
    experience: { title: string; showMore: string; showLess: string };
    projects: { title: string };
  };
  keyAchievements: KeyAchievement[];
  coreExpertise: CoreExpertise[];
  allExperience: Experience[];
  featuredProjects: FeaturedProject[];
}

export const useSoftwarePage = (): UseSoftwarePageReturn => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const { locale, setLocale, t } = useTranslations('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const softwarePage = t?.softwarePage;

  const currentContent = {
    title: softwarePage?.title || '',
    description: softwarePage?.description || '',
    coreExpertise: {
      title: softwarePage?.coreExpertise?.title || ''
    },
    skills: {
      title: softwarePage?.skills?.title || ''
    },
    experience: {
      title: softwarePage?.experience?.title || '',
      showMore: softwarePage?.experience?.showMore || '',
      showLess: softwarePage?.experience?.showLess || ''
    },
    projects: {
      title: softwarePage?.projects?.title || ''
    }
  };

  const keyAchievements = (softwarePage?.keyAchievements || []) as KeyAchievement[];
  const coreExpertise = (softwarePage?.coreExpertiseList || []) as CoreExpertise[];
  const allExperience = (softwarePage?.experienceList || []) as Experience[];
  const featuredProjects = (softwarePage?.featuredProjects || []) as FeaturedProject[];

  return {
    showAllExperience,
    setShowAllExperience,
    currentLang: locale,
    setCurrentLang: (lang: string) => setLocale(lang as 'en' | 'ja'),
    isLoaded,
    currentContent,
    keyAchievements,
    coreExpertise,
    allExperience,
    featuredProjects
  };
};