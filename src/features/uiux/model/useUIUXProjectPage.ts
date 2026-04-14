import { useEffect, useState } from 'react';
import { useLanguage } from '@/shared/hooks';

export const useUIUXProjectPage = () => {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return {
    currentLang,
    setCurrentLang,
    isLoaded
  };
};
