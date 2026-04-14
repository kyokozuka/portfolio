import React from 'react';
import { Header, Footer } from '@/shared/ui';

interface SoftwareProjectLayoutProps {
  children: React.ReactNode;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  theme?: 'blue' | 'green' | 'purple';
}

export default function SoftwareProjectLayout({
  children,
  currentLang,
  setCurrentLang,
  theme = 'blue'
}: SoftwareProjectLayoutProps) {
  const themeClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100',
      orb1: 'bg-gradient-to-r from-blue-400/10 to-cyan-400/10',
      orb2: 'bg-gradient-to-r from-indigo-400/10 to-blue-400/10',
      orb3: 'bg-gradient-to-r from-cyan-400/10 to-blue-400/10',
      accent: 'text-blue-600'
    },
    green: {
      bg: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100',
      orb1: 'bg-gradient-to-r from-green-400/10 to-emerald-400/10',
      orb2: 'bg-gradient-to-r from-teal-400/10 to-green-400/10',
      orb3: 'bg-gradient-to-r from-emerald-400/10 to-teal-400/10',
      accent: 'text-green-600'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-100',
      orb1: 'bg-gradient-to-r from-purple-400/10 to-violet-400/10',
      orb2: 'bg-gradient-to-r from-fuchsia-400/10 to-purple-400/10',
      orb3: 'bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10',
      accent: 'text-purple-600'
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`min-h-screen ${currentTheme.bg} relative overflow-hidden`}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${currentTheme.orb1} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] ${currentTheme.orb2} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '3s'}}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${currentTheme.orb3} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main className="relative z-10">
        {children}
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
