'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  currentLang?: string;
  onLanguageChange?: (lang: string) => void;
}

export default function Header({ currentLang = "en", onLanguageChange }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getNavText = (key: string) => {
    if (currentLang === "ja") {
      const jaTexts = {
        home: "ホーム",
        software: "ソフトウェア",
        uiux: "UI/UX",
        contact: "お問い合わせ"
      };
      return jaTexts[key as keyof typeof jaTexts] || key;
    }
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <header className={`bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
      mounted && isScrolled ? 'shadow-lg bg-white/95' : ''
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with slide-in animation */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 animate-slideInLeft relative z-10 cursor-pointer"
            prefetch={true}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pointer-events-none">
              Kento Yokozuka
            </span>
          </Link>

          {/* Navigation with hover effects */}
          <nav className="hidden md:flex items-center space-x-8 relative z-10">
            <Link
              href="/"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              prefetch={true}
            >
              <span className="relative z-10">{getNavText('home')}</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                isActive('/') ? 'w-full' : ''
              }`}></span>
            </Link>
            <Link
              href="/software"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/software')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              prefetch={true}
            >
              <span className="relative z-10">{getNavText('software')}</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                isActive('/software') ? 'w-full' : ''
              }`}></span>
            </Link>
            <Link
              href="/uiux"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/uiux')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              prefetch={true}
            >
              <span className="relative z-10">{getNavText('uiux')}</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                isActive('/uiux') ? 'w-full' : ''
              }`}></span>
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/contact')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              prefetch={true}
            >
              <span className="relative z-10">{getNavText('contact')}</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                isActive('/contact') ? 'w-full' : ''
              }`}></span>
            </Link>
          </nav>

          {/* Language Switcher and Social Links with animations */}
          <div className="flex items-center space-x-4 animate-slideInRight relative z-[100]">
            {onLanguageChange && (
              <div className="relative z-[101]">
                <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
              </div>
            )}
            <a
              href="https://www.linkedin.com/in/kento-yokozuka-26a1731b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-pulse cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 animate-pulse cursor-pointer"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-600 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3 animate-pulse cursor-pointer"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}