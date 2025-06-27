"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  // Pre-generated static values for animations to avoid hydration mismatch
  const blueParticles = [
    { left: "10%", top: "20%", delay: "0s", duration: "4s" },
    { left: "85%", top: "15%", delay: "1s", duration: "5s" },
    { left: "20%", top: "80%", delay: "2s", duration: "3s" },
    { left: "90%", top: "70%", delay: "0.5s", duration: "6s" },
    { left: "50%", top: "10%", delay: "1.5s", duration: "4s" },
    { left: "15%", top: "60%", delay: "0.8s", duration: "5s" },
    { left: "75%", top: "85%", delay: "2.5s", duration: "3s" },
    { left: "40%", top: "30%", delay: "1.2s", duration: "4s" },
    { left: "60%", top: "50%", delay: "0.3s", duration: "5s" },
    { left: "25%", top: "90%", delay: "1.8s", duration: "3s" },
    { left: "80%", top: "40%", delay: "0.7s", duration: "4s" },
    { left: "35%", top: "75%", delay: "2.2s", duration: "5s" },
    { left: "70%", top: "25%", delay: "1.4s", duration: "3s" },
    { left: "5%", top: "45%", delay: "0.9s", duration: "4s" },
    { left: "95%", top: "55%", delay: "2.8s", duration: "5s" },
    { left: "45%", top: "65%", delay: "1.6s", duration: "4s" },
    { left: "55%", top: "35%", delay: "0.4s", duration: "3s" },
    { left: "30%", top: "40%", delay: "2.1s", duration: "5s" },
    { left: "65%", top: "70%", delay: "1.9s", duration: "4s" },
    { left: "85%", top: "25%", delay: "0.6s", duration: "3s" }
  ];

  const purpleParticles = [
    { left: "30%", top: "25%", delay: "0.2s", duration: "5s" },
    { left: "70%", top: "35%", delay: "1.3s", duration: "4s" },
    { left: "45%", top: "65%", delay: "0.8s", duration: "6s" },
    { left: "85%", top: "45%", delay: "2.1s", duration: "3s" },
    { left: "15%", top: "75%", delay: "1.6s", duration: "5s" },
    { left: "55%", top: "85%", delay: "0.4s", duration: "4s" },
    { left: "25%", top: "15%", delay: "2.4s", duration: "6s" },
    { left: "75%", top: "65%", delay: "1.1s", duration: "3s" },
    { left: "40%", top: "95%", delay: "0.6s", duration: "5s" },
    { left: "90%", top: "25%", delay: "2.7s", duration: "4s" },
    { left: "20%", top: "50%", delay: "1.8s", duration: "3s" },
    { left: "60%", top: "20%", delay: "0.9s", duration: "5s" },
    { left: "35%", top: "80%", delay: "2.3s", duration: "4s" },
    { left: "80%", top: "55%", delay: "1.5s", duration: "3s" },
    { left: "50%", top: "30%", delay: "0.7s", duration: "6s" }
  ];

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Profile Image */}
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 animate-bounce-slow">
                  <img
                    src="/self/PXL_20250401_232454450.PORTRAIT.jpg"
                    alt="Kento Yokozuka"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow-reverse">
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                {currentContent.title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                    {word}{' '}
                  </span>
                ))}
              </span>
            </h1>
            <p className={`text-2xl md:text-3xl text-gray-600 mb-8 font-medium transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>
              {currentContent.subtitle}
            </p>
            <p className={`text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.7s' }}>
              {currentContent.description}
            </p>
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
                      <svg className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
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
                      <svg className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
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
