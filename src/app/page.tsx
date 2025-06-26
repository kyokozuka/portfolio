"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentLang, setCurrentLang] = useState("en");

  const content = {
    en: {
      title: "Kento Yokozuka",
      subtitle: "Software Engineer & UI/UX Designer",
      description: "8+ years of experience building scalable cloud infrastructure, data analytics platforms, and full-stack applications. Specialized in AWS, Python, and modern DevOps practices with a proven track record of delivering measurable business impact.",
      achievements: {
        deployments: "Faster Deployments",
        effort: "Dev Effort Reduction",
        loadTime: "Page Load Time",
        experience: "Years Experience"
      },
      software: {
        title: "Software Engineer",
        description: "Full-stack development, cloud infrastructure, data analytics platforms, and DevOps practices. Experience with major manufacturers and healthcare systems."
      },
      uiux: {
        title: "UI/UX Designer",
        description: "User-centered design thinking, prototyping, usability testing, and design projects that create intuitive digital experiences."
      },
      about: {
        title: "About Me",
        experience: {
          title: "Professional Experience",
          content: "With 8+ years of software engineering experience, I've led development teams at major manufacturers, healthcare platforms, and e-commerce systems. Specialized in AWS cloud infrastructure, data analytics, and modern DevOps practices with measurable business impact."
        },
        philosophy: {
          title: "Technical Philosophy",
          content: "I prioritize scalable architecture, performance optimization, and user experience while balancing technical constraints. Focus on Infrastructure as Code, CI/CD automation, and data-driven decision making to deliver robust, maintainable solutions."
        }
      },
      highlights: {
        title: "Recent Experience Highlights"
      }
    },
    ja: {
      title: "横塚 健人",
      subtitle: "ソフトウェアエンジニア & UI/UXデザイナー",
      description: "8年以上の経験を持ち、スケーラブルなクラウドインフラ、データ分析プラットフォーム、フルスタックアプリケーションの構築を専門としています。AWS、Python、モダンなDevOpsプラクティスに特化し、測定可能なビジネスインパクトを提供する実績があります。",
      achievements: {
        deployments: "デプロイ時間短縮",
        effort: "開発工数削減",
        loadTime: "ページ読み込み時間",
        experience: "年経験"
      },
      software: {
        title: "ソフトウェアエンジニア",
        description: "フルスタック開発、クラウドインフラ、データ分析プラットフォーム、DevOpsプラクティス。大手メーカーやヘルスケアシステムでの経験があります。"
      },
      uiux: {
        title: "UI/UXデザイナー",
        description: "ユーザー中心のデザイン思考、プロトタイピング、ユーザビリティテスト、直感的なデジタル体験を創出するデザインプロジェクト。"
      },
      about: {
        title: "私について",
        experience: {
          title: "専門経験",
          content: "8年以上のソフトウェアエンジニアリング経験を持ち、大手メーカー、ヘルスケアプラットフォーム、Eコマースシステムで開発チームを率いてきました。AWSクラウドインフラ、データ分析、モダンなDevOpsプラクティスに特化し、測定可能なビジネスインパクトを提供しています。"
        },
        philosophy: {
          title: "技術哲学",
          content: "技術的制約とのバランスを取りながら、スケーラブルなアーキテクチャ、パフォーマンス最適化、ユーザーエクスペリエンスを優先します。Infrastructure as Code、CI/CD自動化、データ駆動の意思決定に焦点を当て、堅牢で保守性の高いソリューションを提供します。"
        }
      },
      highlights: {
        title: "最近の経験ハイライト"
      }
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/self/PXL_20250401_232454450.PORTRAIT.jpg"
                    alt="Kento Yokozuka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              {currentContent.description}
            </p>
          </div>
        </header>

        {/* Key Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">🚀</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">80%</div>
            <div className="text-sm text-gray-600 font-medium">{currentContent.achievements.deployments}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">50%</div>
            <div className="text-sm text-gray-600 font-medium">{currentContent.achievements.effort}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">400ms</div>
            <div className="text-sm text-gray-600 font-medium">{currentContent.achievements.loadTime}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">💼</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">8+</div>
            <div className="text-sm text-gray-600 font-medium">{currentContent.achievements.experience}</div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Software Engineer Card */}
            <Link href="/software" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentContent.software.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {currentContent.software.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
                      AWS
                    </span>
                    <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-200 shadow-sm">
                      Python
                    </span>
                    <span className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-semibold border border-violet-200 shadow-sm">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* UI/UX Engineer Card */}
            <Link href="/uiux" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentContent.uiux.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {currentContent.uiux.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold border border-purple-200 shadow-sm">
                      Figma
                    </span>
                    <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold border border-pink-200 shadow-sm">
                      Adobe XD
                    </span>
                    <span className="px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-semibold border border-rose-200 shadow-sm">
                      Sketch
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {currentContent.about.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {currentContent.about.experience.title}
                </h4>
                <p className="text-gray-600">
                  {currentContent.about.experience.content}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {currentContent.about.philosophy.title}
                </h4>
                <p className="text-gray-600">
                  {currentContent.about.philosophy.content}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Experience Highlights */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {currentContent.highlights.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2">JMA Systems</h4>
                <p className="text-sm text-gray-600 mb-3">Data Analytics Platform</p>
                <p className="text-xs text-gray-500">AWS, Python, PySpark, AWS CDK</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2">TechDoctor</h4>
                <p className="text-sm text-gray-600 mb-3">Healthcare Platform</p>
                <p className="text-xs text-gray-500">Python, FastAPI, AWS, MySQL</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="font-bold text-gray-900 mb-2">One Stop Innovation</h4>
                <p className="text-sm text-gray-600 mb-3">E-commerce & Analytics</p>
                <p className="text-xs text-gray-500">PHP, WordPress, AWS, Terraform</p>
              </div>
            </div>
        </div>
      </main>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}
