'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface FooterProps {
  currentLang?: string;
}

export default function Footer({ currentLang = "en" }: FooterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <footer className={`bg-gradient-to-t from-gray-100 to-[#FFF7EB] border-t border-gray-200 py-8 mt-16 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo & Copyright with slide-in animation */}
        <div className="flex flex-col items-center md:items-start animate-slideInLeft">
          <span className="text-lg font-bold tracking-wide text-gray-800 mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Kento Yokozuka
          </span>
          <span className="text-xs text-gray-500 animate-pulse">
            &copy; {new Date().getFullYear()} {currentLang === "ja" ? "All rights reserved." : "All rights reserved."}
          </span>
        </div>

        {/* Center: Navigation with hover effects */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700 animate-slideInUp">
          <Link
            href="/"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
          >
            {getNavText('home')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/software"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
          >
            {getNavText('software')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/uiux"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
          >
            {getNavText('uiux')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
          >
            {getNavText('contact')}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right: Social Icons with rotation effects */}
        <div className="flex gap-4 animate-slideInRight">
          <a
            href="mailto:contact@example.com"
            aria-label="Email"
            className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-white/90"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href="https://github.com/kentoyokozuka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:bg-white/90"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-white/90"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}