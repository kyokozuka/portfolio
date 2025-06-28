'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

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
    <footer className={`relative bg-gradient-to-t from-slate-900 via-gray-900 to-black border-t border-white/10 py-12 mt-16 transition-all duration-1000 overflow-hidden ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-purple-500/3 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand & Description */}
          <div className="text-center md:text-left animate-slideInLeft">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Kento Yokozuka
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {currentLang === "ja"
                ? "フルスタックエンジニアとして、革新的なソリューションを創造し、ユーザー体験を向上させることに情熱を注いでいます。"
                : "Passionate full-stack engineer creating innovative solutions and enhancing user experiences."
              }
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="text-center animate-slideInUp">
            <h3 className="text-white font-semibold mb-4 text-lg">
              {currentLang === "ja" ? "ナビゲーション" : "Navigation"}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 relative group"
              >
                <span className="flex items-center justify-center md:justify-start">
                  <Icon icon="mdi:home" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {getNavText('home')}
                </span>
              </Link>
              <Link
                href="/software"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 relative group"
              >
                <span className="flex items-center justify-center md:justify-start">
                  <Icon icon="mdi:code-braces" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {getNavText('software')}
                </span>
              </Link>
              <Link
                href="/uiux"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:translate-x-2 relative group"
              >
                <span className="flex items-center justify-center md:justify-start">
                  <Icon icon="mdi:palette" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {getNavText('uiux')}
                </span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 relative group"
              >
                <span className="flex items-center justify-center md:justify-start">
                  <Icon icon="mdi:email" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {getNavText('contact')}
                </span>
              </Link>
            </nav>
          </div>

          {/* Right: Social Links & Contact */}
          <div className="text-center md:text-right animate-slideInRight">
            <h3 className="text-white font-semibold mb-4 text-lg">
              {currentLang === "ja" ? "ソーシャル" : "Social"}
            </h3>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="mailto:kento.yokozuka@gmail.com"
                aria-label="Email"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-white/20"
              >
                <Icon icon="mdi:email" className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
              </a>
              <a
                href="https://github.com/kyokozuka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-white/20"
              >
                <Icon icon="mdi:github" className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-white/20"
              >
                <Icon icon="mdi:linkedin" className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              {currentLang === "ja" ? "お気軽にお問い合わせください" : "Let's connect and create something amazing"}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright & Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Kento Yokozuka. {currentLang === "ja" ? "All rights reserved." : "All rights reserved."}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Icon icon="mdi:heart" className="w-4 h-4 text-red-400 animate-pulse" />
              <span>{currentLang === "ja" ? "Made with passion" : "Made with passion"}</span>
            </div>
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

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInFromTop 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}