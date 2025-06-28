'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
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
    <header className={`relative bg-gradient-to-b from-slate-900/95 via-gray-900/90 to-black/95 backdrop-blur-md border-b border-white/10 sticky top-0 transition-all duration-500 overflow-visible ${
      mounted && isScrolled ? 'shadow-2xl bg-slate-900/98' : ''
    }`} style={{ zIndex: 99999 }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <Link
            href="/"
            className="text-2xl font-bold hover:text-blue-400 transition-all duration-300 transform hover:scale-105 animate-slideInLeft relative z-10 cursor-pointer group"
            prefetch={true}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pointer-events-none group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
              Kento Yokozuka
            </span>
          </Link>

          {/* Navigation with enhanced hover effects */}
          <nav className="hidden md:flex items-center space-x-8 relative z-10">
            <Link
              href="/"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/')
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
              prefetch={true}
            >
              <span className="relative z-10 flex items-center">
                <Icon icon="mdi:home" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {getNavText('home')}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                isActive('/') ? 'w-full' : ''
              }`}></span>
            </Link>
            <Link
              href="/software"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/software')
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
              prefetch={true}
            >
              <span className="relative z-10 flex items-center">
                <Icon icon="mdi:code-braces" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {getNavText('software')}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                isActive('/software') ? 'w-full' : ''
              }`}></span>
            </Link>
            <Link
              href="/uiux"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/uiux')
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-purple-400'
              }`}
              prefetch={true}
            >
              <span className="relative z-10 flex items-center">
                <Icon icon="mdi:palette" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {getNavText('uiux')}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full ${
                isActive('/uiux') ? 'w-full' : ''
              }`}></span>
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-all duration-300 relative group cursor-pointer ${
                isActive('/contact')
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
              prefetch={true}
            >
              <span className="relative z-10 flex items-center">
                <Icon icon="mdi:email" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {getNavText('contact')}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full ${
                isActive('/contact') ? 'w-full' : ''
              }`}></span>
            </Link>
          </nav>

          {/* Language Switcher and Social Links with enhanced animations */}
          <div className="flex items-center space-x-4 animate-slideInRight relative z-10">
            {onLanguageChange && (
              <div className="relative" style={{ zIndex: 100000 }}>
                <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
              </div>
            )}
            <a
              href="https://www.linkedin.com/in/kento-yokozuka-26a1731b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer group"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/kyokozuka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 cursor-pointer group"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:kento.yokozuka@gmail.com"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-400 hover:text-red-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer group"
              aria-label="Email"
            >
              <Icon icon="mdi:email" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>
    </header>
  );
}