import { useState, useEffect } from 'react';

export const useUIUXProjectPage = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "ja">("en");
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