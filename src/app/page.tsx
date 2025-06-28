"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blueParticles, purpleParticles } from '../data/particles';
import Image from 'next/image';

export default function Home() {
  const [currentLang, setCurrentLang] = useState("en");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  useEffect(() => {
    setIsLoaded(true);
    setMounted(true);

    let animationFrameId: number;
    let lastMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates
      animationFrameId = requestAnimationFrame(() => {
        // Add easing for smoother movement
        const easing = 0.15;
        const newX = lastMousePosition.x + (e.clientX - lastMousePosition.x) * easing;
        const newY = lastMousePosition.y + (e.clientY - lastMousePosition.y) * easing;

        setMousePosition({ x: newX, y: newY });
        lastMousePosition = { x: newX, y: newY };
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const content = {
    en: {
      title: "Kento Yokozuka",
      subtitle: "Software Engineer & UI/UX Designer",
      description: "Passionate technologist with 8+ years of experience building scalable cloud infrastructure and creating intuitive user experiences. Specialized in AWS, Python, and modern design practices with a proven track record of delivering measurable business impact.",
      achievements: {
        deployments: "Faster Deployments",
        effort: "Dev Effort Reduction",
        loadTime: "Page Load Time",
        experience: "Years Experience"
      },
      resume: {
        button: "View Resume",
        download: "Download PDF"
      },
      software: {
        title: "Software Engineer",
        description: "Full-stack development, cloud infrastructure, data analytics platforms, and DevOps practices. Experience with major manufacturers and healthcare systems.",
        skills: ["AWS", "Python", "TypeScript", "React", "Terraform"]
      },
      uiux: {
        title: "UI/UX Designer",
        description: "User-centered design thinking, design sprints, prototyping, and usability testing. Creating intuitive digital experiences through research-driven design.",
        skills: ["Figma", "Design Sprints", "User Research", "Prototyping", "Design Systems"]
      },
      about: {
        title: "About Me",
        experience: {
          title: "Professional Journey",
          content: "With 8+ years of software engineering experience, I've led development teams at major manufacturers, healthcare platforms, and e-commerce systems. Recently expanded into UI/UX design, completing design sprints and creating user-centered solutions."
        },
        philosophy: {
          title: "Design Philosophy",
          content: "I believe in the power of user-centered design combined with technical excellence. Whether building infrastructure or designing interfaces, I focus on creating solutions that are both beautiful and functional, scalable and maintainable."
        }
      },
      highlights: {
        title: "Recent Projects",
        software: "Software Engineering",
        uiux: "UI/UX Design"
      }
    },
    ja: {
      title: "横塚 健人",
      subtitle: "ソフトウェアエンジニア & UI/UXデザイナー",
      description: "8年以上の経験を持つ情熱的な技術者。スケーラブルなクラウドインフラの構築と直感的なユーザー体験の創造を専門としています。AWS、Python、モダンなデザインプラクティスに特化し、測定可能なビジネスインパクトを提供する実績があります。",
      achievements: {
        deployments: "デプロイ時間短縮",
        effort: "開発工数削減",
        loadTime: "ページ読み込み時間",
        experience: "年経験"
      },
      resume: {
        button: "履歴書を見る",
        download: "PDFをダウンロード"
      },
      software: {
        title: "ソフトウェアエンジニア",
        description: "フルスタック開発、クラウドインフラ、データ分析プラットフォーム、DevOpsプラクティス。大手メーカーやヘルスケアシステムでの経験があります。",
        skills: ["AWS", "Python", "TypeScript", "React", "Terraform"]
      },
      uiux: {
        title: "UI/UXデザイナー",
        description: "ユーザー中心のデザイン思考、デザインスプリント、プロトタイピング、ユーザビリティテスト。リサーチ駆動のデザインによる直感的なデジタル体験の創造。",
        skills: ["Figma", "デザインスプリント", "ユーザーリサーチ", "プロトタイピング", "デザインシステム"]
      },
      about: {
        title: "私について",
        experience: {
          title: "専門的な歩み",
          content: "8年以上のソフトウェアエンジニアリング経験を持ち、大手メーカー、ヘルスケアプラットフォーム、Eコマースシステムで開発チームを率いてきました。最近はUI/UXデザインにも拡張し、デザインスプリントを完了し、ユーザー中心のソリューションを作成しています。"
        },
        philosophy: {
          title: "デザイン哲学",
          content: "ユーザー中心のデザインと技術的卓越性の力を信じています。インフラを構築するにしても、インターフェースをデザインするにしても、美しく機能的で、スケーラブルで保守性の高いソリューションの作成に焦点を当てています。"
        }
      },
      highlights: {
        title: "最近のプロジェクト",
        software: "ソフトウェアエンジニアリング",
        uiux: "UI/UXデザイン"
      }
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {blueParticles.map((particle, index) => (
          <div
            key={`blue-${index}`}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
        {purpleParticles.map((particle, index) => (
          <div
            key={`purple-${index}`}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      {mounted && (
        <div
          className="fixed w-8 h-8 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full pointer-events-none z-40 mix-blend-multiply filter blur-lg opacity-80 transition-transform duration-200 ease-out"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: `scale(${isLoaded ? 1 : 0}) translate3d(0, 0, 0)`,
            willChange: 'transform'
          }}
        />
      )}

      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
        <Image
            src="self/PXL_20250401_232454450.PORTRAIT.jpg"
            alt="Kento Yokozuka Background"
            fill
            className="object-cover"
          priority
        />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Profile Image */}
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl group-hover:shadow-3xl transition-all duration-500 animate-bounce-slow backdrop-blur-sm">
                  <Image
                    src="self/PXL_20250401_232454450.PORTRAIT.jpg"
                    alt="Kento Yokozuka"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Icon icon="akar-icons:check" className="w-6 h-6 text-white" />
                </div>
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow-reverse">
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>

            {/* Title and Description */}
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 drop-shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                {currentContent.title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                    {word}{' '}
                  </span>
                ))}
              </span>
            </h1>
            <p className={`text-2xl md:text-3xl text-blue-100 mb-8 font-medium transition-all duration-1000 drop-shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>
              {currentContent.subtitle}
            </p>
            <p className={`text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 drop-shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.7s' }}>
              {currentContent.description}
            </p>

            {/* Resume Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.9s' }}>
              {/* View Resume Button */}
              <a
                href="https://docs.google.com/document/d/1jPtRuI8ydBeFbcl2gWQsps6JiGIwFDlwDu46G_BHDLQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-white/30"
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  <Icon icon="akar-icons:file" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span>{currentContent.resume.button}</span>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-300"></div>
              </a>

              {/* Download PDF Button */}
              <a
                href="https://docs.google.com/document/d/1jPtRuI8ydBeFbcl2gWQsps6JiGIwFDlwDu46G_BHDLQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden hover:bg-white/20"
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  <Icon icon="akar-icons:download" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>{currentContent.resume.download}</span>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🚀", value: "80%", color: "from-blue-600 to-indigo-600", label: currentContent.achievements.deployments },
              { icon: "⚡", value: "50%", color: "from-emerald-600 to-teal-600", label: currentContent.achievements.effort },
              { icon: "⚡", value: "400ms", color: "from-violet-600 to-purple-600", label: currentContent.achievements.loadTime },
              { icon: "💼", value: "8+", color: "from-rose-600 to-pink-600", label: currentContent.achievements.experience }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">{achievement.icon}</div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Software Engineer Card */}
              <Link href="/software" className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/50 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center h-full flex flex-col justify-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Icon icon="mdi:code-braces" className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                      {currentContent.software.title}
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {currentContent.software.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {currentContent.software.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm hover:bg-blue-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>

              {/* UI/UX Designer Card */}
              <Link href="/uiux" className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-white/50 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center h-full flex flex-col justify-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                      <Icon icon="mdi:palette-outline" className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                      {currentContent.uiux.title}
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {currentContent.uiux.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {currentContent.uiux.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold border border-purple-200 shadow-sm hover:bg-purple-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center hover:text-blue-600 transition-colors duration-300">
                {currentContent.about.title}
              </h3>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="group">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {currentContent.about.experience.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {currentContent.about.experience.content}
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {currentContent.about.philosophy.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {currentContent.about.philosophy.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center hover:text-blue-600 transition-colors duration-300">
              {currentContent.highlights.title}
            </h3>

            {/* Software Engineering Projects */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {currentContent.highlights.software}
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "JMA Systems", desc: "Data Analytics Platform", tags: ["AWS", "Python", "PySpark"] },
                  { name: "TechDoctor", desc: "Healthcare Platform", tags: ["Python", "FastAPI", "AWS"] },
                  { name: "One Stop Innovation", desc: "E-commerce & Analytics", tags: ["PHP", "WordPress", "Terraform"] }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-white/50 group cursor-pointer"
        >
                    <h5 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors duration-300">{project.name}</h5>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 transition-all duration-300 hover:scale-110 group-hover:animate-pulse"
                          style={{ animationDelay: `${tagIndex * 0.1}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UI/UX Design Projects */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {currentContent.highlights.uiux}
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Six Acres Restaurant", desc: "Website Redesign", tags: ["Figma", "User Research", "Prototyping"] },
                  { name: "Task Management System", desc: "Design Sprint Project", tags: ["Design Sprint", "Figma", "User Testing"] }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 border border-white/50 group cursor-pointer"
        >
                    <h5 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors duration-300">{project.name}</h5>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-100 transition-all duration-300 hover:scale-110 group-hover:animate-pulse"
                          style={{ animationDelay: `${tagIndex * 0.1}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
