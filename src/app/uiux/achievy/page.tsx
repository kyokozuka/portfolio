"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { achievyData } from '@/data/uiux/achievyData';
import { useUIUXProjectPage } from '@/hooks/uiux/useUIUXProjectPage';

export default function AchievyPage() {
  const { currentLang, setCurrentLang, isLoaded } = useUIUXProjectPage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const t = achievyData[currentLang as 'ja' | 'en'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 relative overflow-x-hidden">
      <Header currentLang={currentLang} onLanguageChange={(lang: string) => setCurrentLang(lang as "en" | "ja")} />
      <main className="container mx-auto px-4 py-16">
        {/* Enhanced Hero Section */}
        <section
          ref={heroRef}
          className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] mb-20 overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 rounded-3xl shadow-2xl border border-blue-200/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={`cyan-${i}`}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Interactive Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-cyan-200/20 to-indigo-200/20 transition-all duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)`,
            }}
          />

          {/* Floating Hero Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="projects/achievy/Hero.svg"
              alt={'Achievy Hero Visual'}
              fill
              style={{ objectFit: 'cover', zIndex: 1, opacity: 0.15 }}
              className={`pointer-events-none select-none transition-transform duration-700 ${
                isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
              }`}
            />
          </div>

          {/* Floating Icon with Enhanced Animation */}
          <div className="absolute top-8 right-8 md:top-12 md:right-16 z-20">
            <div className={`transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
              <Image
                src="projects/achievy/achievy-icon.svg"
                alt={'Achievy icon'}
                width={80}
                height={80}
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-8">
            <div className="mb-8">
              <Link
                href="/uiux"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-6 group"
              >
                <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                {currentLang === "en" ? "Back to UI/UX Projects" : "UI/UXプロジェクトに戻る"}
              </Link>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-blue-900 mb-6 tracking-tight">
              {t.hero.title.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
              {t.hero.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
              {t.hero.tagline}
            </p>
          </div>

          {/* Wave SVG Effect */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-20"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="fill-blue-100"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="fill-blue-200"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="fill-blue-300"
              ></path>
            </svg>
          </div>
        </section>

        {/* Design Sprint Info Card */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                {currentLang === "en" ? "Design Sprint Methodology" : "デザインスプリント手法"}
              </h2>
              <p className="text-lg text-blue-700">
                {currentLang === "en"
                  ? "This project follows the Google Design Sprint methodology, a 5-day process for solving big problems and testing new ideas."
                  : "このプロジェクトは、大きな問題を解決し新しいアイデアをテストするための5日間のプロセスであるGoogleデザインスプリント手法に従っています。"}
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {[
                { day: "1", phase: currentLang === "en" ? "Map" : "マップ", desc: currentLang === "en" ? "Define the problem" : "問題を定義" },
                { day: "2", phase: currentLang === "en" ? "Sketch" : "スケッチ", desc: currentLang === "en" ? "Generate solutions" : "解決策を生成" },
                { day: "3", phase: currentLang === "en" ? "Decide" : "決定", desc: currentLang === "en" ? "Choose the best" : "最良を選択" },
                { day: "4", phase: currentLang === "en" ? "Prototype" : "プロトタイプ", desc: currentLang === "en" ? "Build a prototype" : "プロトタイプを構築" },
                { day: "5", phase: currentLang === "en" ? "Test" : "テスト", desc: currentLang === "en" ? "Validate with users" : "ユーザーで検証" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Day {item.day}</div>
                  <div className="font-semibold text-blue-800 mb-1">{item.phase}</div>
                  <div className="text-sm text-blue-600">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.gv.com/sprint/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon icon="mdi:external-link" className="w-5 h-5 mr-2" />
                {currentLang === "en" ? "Learn More About Design Sprints" : "デザインスプリントについて詳しく"}
              </a>
            </div>
          </div>
        </section>

        {/* Project Sections */}
        <div className="space-y-20">
          {/* Background Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.background.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800">
              <p className="whitespace-pre-line">{t.background.text}</p>
            </div>
          </section>

          {/* Research Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.research.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800">
              <p className="whitespace-pre-line">{t.research.text}</p>
            </div>
          </section>

          {/* Insights Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.insight.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800 mb-8">
              <p className="whitespace-pre-line">{t.insight.text}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.insight.hmw.map((question, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <div className="text-lg font-semibold text-blue-800 mb-3">
                    {currentLang === "en" ? "How might we..." : "どうすれば..."}
                  </div>
                  <p className="text-blue-700">{question}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ideation Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.ideation.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800">
              <p className="whitespace-pre-line">{t.ideation.text}</p>
            </div>
          </section>

          {/* Design Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.design.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800">
              <p className="whitespace-pre-line">{t.design.text}</p>
            </div>
          </section>

          {/* Testing Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.testing.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800">
              <p className="whitespace-pre-line">{t.testing.text}</p>
            </div>
          </section>

          {/* Results Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t.result.title}</h2>
            <div className="prose prose-lg max-w-none text-blue-800">
              <p className="whitespace-pre-line">{t.result.text}</p>
            </div>
          </section>

          {/* Quote Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-8 md:p-12 border border-blue-200">
              <blockquote className="text-2xl md:text-3xl font-bold text-blue-900 italic">
                "{t.quote}"
              </blockquote>
            </div>
          </section>

          {/* Figma Prototype Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
              {currentLang === "en" ? "Interactive Prototype" : "インタラクティブプロトタイプ"}
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYourPrototypeID%2FAchievy%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.figma.com/proto/YourPrototypeID/Achievy?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon icon="mdi:external-link" className="w-5 h-5 mr-2" />
                {currentLang === "en" ? "Open in Figma" : "Figmaで開く"}
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}