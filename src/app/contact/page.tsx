"use client";

import { Icon } from '@iconify/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactData } from '@/data/contactData';
import { useContactPage } from '@/hooks/useContactPage';

export default function ContactPage() {
  const { currentLang, setCurrentLang, isLoaded, currentData } = useContactPage(contactData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/5 via-blue-100/3 to-purple-100/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Floating elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-float"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={(lang: string) => setCurrentLang(lang as "en" | "ja")} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-20 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <h1 className={`font-display text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {currentData.title}
              </h1>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
            <p className={`font-display text-2xl md:text-3xl text-gray-300 mb-10 font-light tracking-wide transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              {currentData.subtitle}
            </p>
            <p className={`font-body text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.4s' }}>
              {currentData.description}
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-1 gap-12 max-w-2xl mx-auto">
          {/* Contact Information - Centered */}
          <div className="animate-slideInRight">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
              <h3 className="font-display text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
                {currentData.contactInfo.title}
              </h3>
              <p className="font-body text-gray-300 mb-8 text-center">
                {currentData.contactInfo.subtitle}
              </p>
              <div className="space-y-6">
                {/* Email */}
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon icon="mdi:email" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">Email</h4>
                      <a
                        href="mailto:kento.yokozuka@gmail.com"
                        className="font-body text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group-hover:underline"
                      >
                        kento.yokozuka@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                {/* GitHub */}
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon icon="mdi:github" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">GitHub</h4>
                      <a
                        href="https://github.com/kyokozuka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-gray-300 hover:text-white transition-colors duration-300 font-medium group-hover:underline"
                      >
                        @kyokozuka
                      </a>
                    </div>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon icon="mdi:linkedin" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium group-hover:underline"
                      >
                        Kento Yokozuka
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer currentLang={currentLang} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}