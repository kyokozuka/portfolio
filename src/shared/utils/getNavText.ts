const navLabels: Record<string, Record<string, string>> = {
  en: {
    home:     "Home",
    software: "Software",
    uiux:     "UI/UX",
    contact:  "Contact",
  },
  ja: {
    home:     "ホーム",
    software: "ソフトウェア",
    uiux:     "UI/UX",
    contact:  "お問い合わせ",
  },
};

export const getNavText = (key: string, lang: string): string => {
  return navLabels[lang]?.[key] ?? navLabels.en[key] ?? key;
};
