import { useState } from 'react';

export const useLanguage = () => {
  const [currentLang, setLang] = useState<"en" | "ja">("en");

  const setCurrentLang = (lang: string) => {
    setLang(lang === "ja" ? "ja" : "en");
  };

  return { currentLang, setCurrentLang };
};
