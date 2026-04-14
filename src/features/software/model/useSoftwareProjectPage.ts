import { useEffect, useState } from 'react';
import { SoftwareProjectData } from '@/features/software/types';
import { useLanguage } from '@/shared/hooks';

export const useSoftwareProjectPage = (projectData: SoftwareProjectData) => {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentData = projectData[currentLang as "en" | "ja"];

  return {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentData,
    projectData
  };
};
