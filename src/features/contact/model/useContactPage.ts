import { useEffect, useState } from 'react';
import { ContactData } from '@/features/contact/types';
import { useLanguage } from '@/shared/hooks';

export const useContactPage = (contactData: ContactData) => {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentData = contactData[currentLang as "en" | "ja"];

  return {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentData
  };
};
