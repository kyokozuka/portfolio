"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProjectData {
  id: string;
  en: {
    title: string;
    subtitle: string;
    role: string;
    tools: string;
    duration: string;
    overview: string;
    finalSolution: string;
    keyFeatures: string[];
    technicalDetails: {
      frontend: { title: string; description: string; technologies: string[] };
      backend: { title: string; description: string; technologies: string[] };
      infrastructure: { title: string; description: string; technologies: string[] };
    };
    performance: {
      title: string;
      metrics: Array<{ label: string; value: string; improvement: string }>;
    };
  };
  ja: {
    title: string;
    subtitle: string;
    role: string;
    tools: string;
    duration: string;
    overview: string;
    finalSolution: string;
    keyFeatures: string[];
    technicalDetails: {
      frontend: { title: string; description: string; technologies: string[] };
      backend: { title: string; description: string; technologies: string[] };
      infrastructure: { title: string; description: string; technologies: string[] };
    };
    performance: {
      title: string;
      metrics: Array<{ label: string; value: string; improvement: string }>;
    };
  };
  image: string;
}

export default function TechDoctorPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // TechDoctor project data
  const projectData: ProjectData = {
    id: "techdoctor",
    en: {
      title: "TechDoctor - Healthcare Platform",
      subtitle: "Digital Biomarker Development Platform",
      role: "Software Engineer",
      tools: "Python, FastAPI, AWS, MySQL, Docker, GraphQL",
      duration: "6 Months",
      overview: "Developed a comprehensive digital biomarker development platform for healthcare services using FastAPI and AWS. The platform enables healthcare providers to develop, test, and deploy digital biomarkers for patient monitoring and diagnosis.",
      finalSolution: "A robust healthcare platform featuring comprehensive testing, automated CI/CD, and detailed documentation. Achieved 0% to 80% test coverage and eliminated knowledge silos through improved documentation practices.",
      keyFeatures: [
        "Digital biomarker development tools",
        "Comprehensive testing framework",
        "Automated CI/CD pipeline",
        "Real-time patient monitoring",
        "Secure data handling",
        "API-first architecture"
      ],
      technicalDetails: {
        frontend: {
          title: "Frontend & API",
          description: "GraphQL API with comprehensive documentation and testing",
          technologies: ["GraphQL", "FastAPI", "Swagger", "API Documentation"]
        },
        backend: {
          title: "Backend Development",
          description: "Python-based backend with FastAPI and comprehensive testing",
          technologies: ["Python", "FastAPI", "Pytest", "MySQL", "Docker"]
        },
        infrastructure: {
          title: "Cloud Infrastructure",
          description: "AWS-based infrastructure with automated deployment and monitoring",
          technologies: ["AWS Fargate", "AWS S3", "Docker", "CI/CD", "Monitoring"]
        }
      },
      performance: {
        title: "Performance Metrics",
        metrics: [
          { label: "Test Coverage", value: "0% to 80%", improvement: "Comprehensive testing" },
          { label: "Documentation", value: "100% coverage", improvement: "Eliminated knowledge silos" },
          { label: "Deployment", value: "Automated", improvement: "CI/CD pipeline" },
          { label: "Security", value: "HIPAA compliant", improvement: "Healthcare standards" }
        ]
      }
    },
    ja: {
      title: "TechDoctor - ヘルスケアプラットフォーム",
      subtitle: "デジタルバイオマーカー開発プラットフォーム",
      role: "ソフトウェアエンジニア",
      tools: "Python, FastAPI, AWS, MySQL, Docker, GraphQL",
      duration: "6ヶ月",
      overview: "FastAPIとAWSを使用してヘルスケアサービスのための包括的なデジタルバイオマーカー開発プラットフォームを開発。医療提供者が患者監視と診断のためのデジタルバイオマーカーを開発、テスト、デプロイできるプラットフォーム。",
      finalSolution: "包括的なテスト、自動化されたCI/CD、詳細なドキュメントを特徴とする堅牢なヘルスケアプラットフォーム。テストカバレッジ0%から80%に向上し、改善されたドキュメントプラクティスにより知識のサイロ化を解消。",
      keyFeatures: [
        "デジタルバイオマーカー開発ツール",
        "包括的なテストフレームワーク",
        "自動化されたCI/CDパイプライン",
        "リアルタイム患者監視",
        "安全なデータ処理",
        "APIファーストアーキテクチャ"
      ],
      technicalDetails: {
        frontend: {
          title: "フロントエンド・API",
          description: "包括的なドキュメントとテストを備えたGraphQL API",
          technologies: ["GraphQL", "FastAPI", "Swagger", "APIドキュメント"]
        },
        backend: {
          title: "バックエンド開発",
          description: "FastAPIと包括的なテストを備えたPythonベースのバックエンド",
          technologies: ["Python", "FastAPI", "Pytest", "MySQL", "Docker"]
        },
        infrastructure: {
          title: "クラウドインフラ",
          description: "自動化されたデプロイと監視を備えたAWSベースのインフラ",
          technologies: ["AWS Fargate", "AWS S3", "Docker", "CI/CD", "監視"]
        }
      },
      performance: {
        title: "パフォーマンス指標",
        metrics: [
          { label: "テストカバレッジ", value: "0%から80%", improvement: "包括的なテスト" },
          { label: "ドキュメント", value: "100%カバレッジ", improvement: "知識のサイロ化を解消" },
          { label: "デプロイ", value: "自動化", improvement: "CI/CDパイプライン" },
          { label: "セキュリティ", value: "HIPAA準拠", improvement: "ヘルスケア標準" }
        ]
      }
    },
    image: "/projects/techdoctor/healthcare-platform.jpg"
  };

  const currentData = projectData[currentLang as keyof typeof projectData] as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Healthcare-themed elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Floating medical elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400/40 rounded-full animate-float"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>

        {/* Medical nodes */}
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-green-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fadeIn">
          <div className="mb-8">
            <Link
              href="/software"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 mb-6 group"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              {currentLang === "en" ? "Back to Software Projects" : "ソフトウェアプロジェクトに戻る"}
            </Link>
          </div>

          <h1 className={`font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent mb-6 transition-all duration-1000 drop-shadow-2xl ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {currentData.title}
          </h1>
          <p className={`font-body text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 drop-shadow-lg ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.3s' }}>
            {currentData.subtitle}
          </p>
        </header>

        {/* Project Overview */}
        <section className="mb-16 animate-slideInUp">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-6 drop-shadow-lg">
                  {currentLang === "en" ? "Project Overview" : "プロジェクト概要"}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {currentData.overview}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon icon="mdi:account" className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-gray-300">
                      <strong className="text-white">{currentLang === "en" ? "Role:" : "役割:"}</strong> {currentData.role}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:tools" className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-gray-300">
                      <strong className="text-white">{currentLang === "en" ? "Tools:" : "ツール:"}</strong> {currentData.tools}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:calendar" className="w-5 h-5 text-emerald-400 mr-3" />
                    <span className="text-gray-300">
                      <strong className="text-white">{currentLang === "en" ? "Duration:" : "期間:"}</strong> {currentData.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center border border-emerald-400/30">
                  <Icon icon="mdi:medical-bag" className="w-32 h-32 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Solution */}
        <section className="mb-16 animate-slideInLeft">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
            <h2 className="font-display text-3xl font-bold text-white mb-6 drop-shadow-lg">
              {currentLang === "en" ? "Final Solution" : "最終ソリューション"}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {currentData.finalSolution}
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16 animate-slideInRight">
          <h2 className="font-display text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
            {currentLang === "en" ? "Key Features" : "主要機能"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.keyFeatures.map((feature: string, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-400/30 group-hover:to-green-400/30 transition-all duration-500 group-hover:scale-110 border border-emerald-400/30">
                    <Icon icon="mdi:check-circle" className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16 animate-slideInUp">
          <h2 className="font-display text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
            {currentLang === "en" ? "Technical Details" : "技術詳細"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(currentData.technicalDetails).map(([key, detail]: [string, any], index: number) => (
              <div
                key={key}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-400/30 group-hover:to-green-400/30 transition-all duration-500 group-hover:scale-110 border border-emerald-400/30`}>
                    <Icon
                      icon={
                        key === 'frontend' ? 'mdi:monitor' :
                        key === 'backend' ? 'mdi:server' : 'mdi:cloud'
                      }
                      className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {detail.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                    {detail.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {detail.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold border border-emerald-400/30 shadow-sm hover:bg-emerald-400/30 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16 animate-slideInUp">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
            <h2 className="font-display text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
              {currentData.performance.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentData.performance.metrics.map((metric: any, index: number) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group cursor-pointer"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {metric.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center animate-fadeIn">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/software/jma-systems"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2" />
              {currentLang === "en" ? "Previous Project: JMA Systems" : "前のプロジェクト: JMA Systems"}
            </Link>

            <Link
              href="/software"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-emerald-400/30 backdrop-blur-md"
            >
              <Icon icon="mdi:view-grid" className="w-5 h-5 mr-2" />
              {currentLang === "en" ? "View All Projects" : "すべてのプロジェクトを見る"}
            </Link>
          </div>
        </section>
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

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slideInUp {
          animation: slideInFromTop 0.8s ease-out forwards;
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