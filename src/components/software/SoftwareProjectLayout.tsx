import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SoftwareProjectData } from '@/types/softwareProjects';

interface SoftwareProjectLayoutProps {
  children: React.ReactNode;
  projectData: SoftwareProjectData;
  currentLang: "en" | "ja";
  setCurrentLang: (lang: "en" | "ja") => void;
  isLoaded: boolean;
  currentData: SoftwareProjectData['en' | 'ja'];
  theme: 'ecommerce' | 'jma-systems' | 'techdoctor';
}

export const SoftwareProjectLayout: React.FC<SoftwareProjectLayoutProps> = ({
  children,
  projectData,
  currentLang,
  setCurrentLang,
  isLoaded,
  currentData,
  theme
}) => {
  const getThemeConfig = () => {
    switch (theme) {
      case 'ecommerce':
        return {
          bgGradient: 'from-slate-900 via-blue-900 to-indigo-900',
          accentColor: 'green',
          accentGradient: 'from-green-400 via-emerald-400 to-blue-400',
          backLinkColor: 'text-green-400 hover:text-green-300'
        };
      case 'jma-systems':
        return {
          bgGradient: 'from-slate-900 via-blue-900 to-indigo-900',
          accentColor: 'blue',
          accentGradient: 'from-blue-400 via-indigo-400 to-cyan-400',
          backLinkColor: 'text-blue-400 hover:text-blue-300'
        };
      case 'techdoctor':
        return {
          bgGradient: 'from-slate-900 via-emerald-900 to-green-900',
          accentColor: 'emerald',
          accentGradient: 'from-emerald-400 via-green-400 to-teal-400',
          backLinkColor: 'text-emerald-400 hover:text-emerald-300'
        };
      default:
        return {
          bgGradient: 'from-slate-900 via-blue-900 to-indigo-900',
          accentColor: 'blue',
          accentGradient: 'from-blue-400 via-indigo-400 to-cyan-400',
          backLinkColor: 'text-blue-400 hover:text-blue-300'
        };
    }
  };

  const themeConfig = getThemeConfig();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeConfig.bgGradient} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/5 to-indigo-100/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={(lang: string) => setCurrentLang(lang as "en" | "ja")} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/software"
            className={`inline-flex items-center ${themeConfig.backLinkColor} transition-colors duration-300 mb-6 group`}
          >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            {currentData.back}
          </Link>
        </div>

        {children}

        <Footer />
      </div>
    </div>
  );
};