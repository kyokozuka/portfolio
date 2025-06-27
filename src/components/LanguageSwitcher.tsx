"use client";

import { useState, useEffect } from "react";

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [currentLang]);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸", short: "EN" },
    { code: "ja", name: "日本語", flag: "🇯🇵", short: "日本語" }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (languageCode: string) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageClick = (e: React.MouseEvent, languageCode: string) => {
    e.preventDefault();
    e.stopPropagation();
    handleLanguageChange(languageCode);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative language-switcher z-50">
      {/* Main Language Button */}
      <button
        onClick={handleButtonClick}
        className="relative flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden z-[55] cursor-pointer"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Flag Icon */}
        <span className="text-lg">
          {currentLanguage?.flag}
        </span>

        {/* Language Text */}
        <span className="font-medium text-gray-800">
          {currentLanguage?.short}
        </span>

        {/* Dropdown Arrow */}
        <svg
          className={`w-4 h-4 text-gray-600 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-xl border border-white/50 shadow-2xl z-[60]">
          <div className="p-2">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={(e) => handleLanguageClick(e, language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  currentLang === language.code
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                } cursor-pointer`}
                style={{ pointerEvents: 'auto' }}
              >
                {/* Flag */}
                <span className="text-lg">
                  {language.flag}
                </span>

                {/* Language Info */}
                <div className="flex flex-col">
                  <span className="font-medium text-sm">
                    {language.name}
                  </span>
                  <span className={`text-xs ${
                    currentLang === language.code ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {language.code.toUpperCase()}
                  </span>
                </div>

                {/* Check Icon for Active Language */}
                {currentLang === language.code && (
                  <svg
                    className="w-4 h-4 ml-auto text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}