"use client";

import { useState, useEffect } from "react";
import { LanguageSwitcherProps } from "../types/LanguageSwitcherProps";

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸", short: "EN" },
    { code: "ja", name: "日本語", flag: "🇯🇵", short: "JP" }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (languageCode: string) => {
    console.log('handleLanguageChange called with:', languageCode);
    onLanguageChange(languageCode);
    setIsOpen(false);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    console.log('handleButtonClick called');
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageClick = (e: React.MouseEvent, languageCode: string) => {
    console.log('handleLanguageClick called with:', languageCode);
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
    <div
      className="relative language-switcher group"
      style={{ zIndex: 99999 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Language Button */}
      <button
        onClick={handleButtonClick}
        className="relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer group-hover:bg-white/20"
        style={{ pointerEvents: 'auto', zIndex: 99999 }}
      >
        {/* Flag Icon with Animation */}
        <span className="text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          {currentLanguage?.flag}
        </span>

        {/* Language Text */}
        <span className="font-medium text-gray-300 transition-colors duration-300 group-hover:text-cyan-400">
          {currentLanguage?.short}
        </span>

        {/* Dropdown Arrow with Animation */}
        <svg
          className={`w-4 h-4 text-gray-400 transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'scale-100'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>

        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500/30 transition-all duration-300"></div>
      </button>

      {/* Transparent bridge to prevent hover loss */}
      {isOpen && (
        <div
          className="absolute top-full right-0 w-48 h-2 bg-transparent"
          style={{ zIndex: 100000 }}
          onMouseEnter={() => setIsOpen(true)}
        />
      )}

      {/* Dropdown Menu with Animation */}
      <div
        className={`absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          zIndex: 100000
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Transparent bridge to prevent hover loss */}
        <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>

        <div className="p-2">
          {languages.map((language, index) => (
            <button
              key={language.code}
              onClick={(e) => handleLanguageClick(e, language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group/item relative overflow-hidden ${
                currentLang === language.code
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-white/10 hover:text-cyan-400'
              } cursor-pointer transform hover:scale-105 hover:translate-x-1`}
              style={{
                pointerEvents: 'auto',
                zIndex: 100000,
                animationDelay: `${index * 0.1}s`,
                animation: isOpen ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
              }}
            >
              {/* Flag with Hover Animation */}
              <span className="text-lg transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
                {language.flag}
              </span>

              {/* Language Info */}
              <div className="flex flex-col">
                <span className="font-medium text-sm transition-all duration-300 group-hover/item:translate-x-1">
                  {language.name}
                </span>
                <span className={`text-xs transition-colors duration-300 ${
                  currentLang === language.code ? 'text-cyan-100' : 'text-gray-400'
                }`}>
                  {language.code.toUpperCase()}
                </span>
              </div>

              {/* Check Icon for Active Language */}
              {currentLang === language.code && (
                <svg
                  className="w-4 h-4 ml-auto text-white transition-all duration-300 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 ${
                currentLang === language.code ? 'hidden' : ''
              }`}></div>

              {/* Shimmer Effect for Active Item */}
              {currentLang === language.code && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              )}
            </button>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-slate-900/95 border border-white/20 transform -translate-x-1/2 rotate-45"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-purple-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-xl border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Floating Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}