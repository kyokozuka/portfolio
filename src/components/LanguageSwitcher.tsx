"use client";

import { useState } from "react";

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export default function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
          currentLang === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange("ja")}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
          currentLang === "ja"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        日本語
      </button>
    </div>
  );
}