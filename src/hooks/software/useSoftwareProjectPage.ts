import { useState, useEffect } from 'react';
import { SoftwareProjectData } from '@/types/softwareProjects';

export const useSoftwareProjectPage = (projectData: SoftwareProjectData) => {
  const [currentLang, setCurrentLang] = useState<"en" | "ja">("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentData = projectData[currentLang];

  return {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentData,
    projectData
  };
};