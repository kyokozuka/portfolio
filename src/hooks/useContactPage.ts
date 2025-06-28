import { useState, useEffect } from 'react';
import { ContactData } from '@/types/contact';

export const useContactPage = (contactData: ContactData) => {
  const [currentLang, setCurrentLang] = useState<"en" | "ja">("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentData = contactData[currentLang];

  return {
    currentLang,
    setCurrentLang,
    isLoaded,
    currentData
  };
};