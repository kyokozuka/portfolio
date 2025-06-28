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

export default function JMASystemsPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // JMA Systems project data
  const projectData: ProjectData = {
    id: "jma-systems",
    en: {
      title: "JMA Systems - Data Analytics Platform",
      subtitle: "AWS-based Data Lake & Analytics Infrastructure",
      role: "Lead Software Engineer",
      tools: "AWS, Python, PySpark, Redshift, Glue, Lambda, CDK",
      duration: "12 Months",
      overview: "Built a comprehensive data analytics platform for a major manufacturing client using AWS services. The platform integrates sales data, web logs, and operational data to provide real-time insights for business decision-making.",
      finalSolution: "A scalable data lake and analytics platform featuring ELT pipelines, automated monitoring, and self-service BI dashboards. Achieved 80% faster deployments and 50% reduction in development effort through CI/CD and Infrastructure as Code.",
      keyFeatures: [
        "ELT data pipeline with PySpark",
        "Real-time data visualization with QuickSight",
        "Automated monitoring and alerting",
        "Infrastructure as Code with AWS CDK",
        "CI/CD pipeline for data processing",
        "Multi-format data integration"
      ],
      technicalDetails: {
        frontend: {
          title: "Data Visualization",
          description: "Amazon QuickSight dashboards for business intelligence and real-time analytics",
          technologies: ["Amazon QuickSight", "AWS Athena", "SQL", "Data Visualization"]
        },
        backend: {
          title: "Data Processing & ETL",
          description: "Python-based data processing with PySpark and AWS Glue for data transformation",
          technologies: ["Python", "PySpark", "AWS Glue", "Pandas", "ETL Pipelines"]
        },
        infrastructure: {
          title: "Cloud Infrastructure & DevOps",
          description: "AWS-based data lake with automated CI/CD and monitoring systems",
          technologies: ["AWS S3", "AWS Redshift", "AWS CDK", "CodePipeline", "CloudWatch"]
        }
      },
      performance: {
        title: "Performance Metrics",
        metrics: [
          { label: "Deployment Time", value: "80% reduction", improvement: "Through CI/CD automation" },
          { label: "Development Effort", value: "50% reduction", improvement: "Via Infrastructure as Code" },
          { label: "Data Processing", value: "Real-time", improvement: "Daily batch processing" },
          { label: "System Uptime", value: "99.9%", improvement: "Automated monitoring" }
        ]
      }
    },
    ja: {
      title: "JMA Systems - データ分析プラットフォーム",
      subtitle: "AWSベースのデータレイク・分析インフラ",
      role: "リードソフトウェアエンジニア",
      tools: "AWS, Python, PySpark, Redshift, Glue, Lambda, CDK",
      duration: "12ヶ月",
      overview: "大手製造業クライアント向けにAWSサービスを使用した包括的なデータ分析プラットフォームを構築。売上データ、Webログ、運用データを統合し、ビジネス意思決定のためのリアルタイムインサイトを提供。",
      finalSolution: "ELTパイプライン、自動監視、セルフサービスBIダッシュボードを特徴とするスケーラブルなデータレイク・分析プラットフォーム。CI/CDとInfrastructure as Codeにより、デプロイ時間80%短縮、開発工数50%削減を達成。",
      keyFeatures: [
        "PySparkによるELTデータパイプライン",
        "QuickSightによるリアルタイムデータ可視化",
        "自動監視とアラート機能",
        "AWS CDKによるInfrastructure as Code",
        "データ処理のためのCI/CDパイプライン",
        "マルチフォーマットデータ統合"
      ],
      technicalDetails: {
        frontend: {
          title: "データ可視化",
          description: "ビジネスインテリジェンスとリアルタイム分析のためのAmazon QuickSightダッシュボード",
          technologies: ["Amazon QuickSight", "AWS Athena", "SQL", "データ可視化"]
        },
        backend: {
          title: "データ処理・ETL",
          description: "データ変換のためのPySparkとAWS Glueを使用したPythonベースのデータ処理",
          technologies: ["Python", "PySpark", "AWS Glue", "Pandas", "ETLパイプライン"]
        },
        infrastructure: {
          title: "クラウドインフラ・DevOps",
          description: "自動化されたCI/CDと監視システムを備えたAWSベースのデータレイク",
          technologies: ["AWS S3", "AWS Redshift", "AWS CDK", "CodePipeline", "CloudWatch"]
        }
      },
      performance: {
        title: "パフォーマンス指標",
        metrics: [
          { label: "デプロイ時間", value: "80%削減", improvement: "CI/CD自動化により" },
          { label: "開発工数", value: "50%削減", improvement: "Infrastructure as Codeにより" },
          { label: "データ処理", value: "リアルタイム", improvement: "日次バッチ処理から" },
          { label: "システム稼働率", value: "99.9%", improvement: "自動監視により" }
        ]
      }
    },
    image: "/projects/jma-systems/analytics-platform.jpg"
  };

  const currentData = projectData[currentLang as keyof typeof projectData] as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Data flow lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Floating data elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400/40 rounded-full animate-float"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>

        {/* Network nodes */}
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fadeIn">
          <div className="mb-8">
            <Link
              href="/software"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-6 group"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              {currentLang === "en" ? "Back to Software Projects" : "ソフトウェアプロジェクトに戻る"}
            </Link>
          </div>

          <h1 className={`font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6 transition-all duration-1000 drop-shadow-2xl ${
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
                    <Icon icon="mdi:account" className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      <strong className="text-white">{currentLang === "en" ? "Role:" : "役割:"}</strong> {currentData.role}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:tools" className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      <strong className="text-white">{currentLang === "en" ? "Tools:" : "ツール:"}</strong> {currentData.tools}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="mdi:calendar" className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">
                      <strong className="text-white">{currentLang === "en" ? "Duration:" : "期間:"}</strong> {currentData.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30">
                  <Icon icon="mdi:chart-line" className="w-32 h-32 text-blue-400" />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-500 group-hover:scale-110 border border-blue-400/30">
                    <Icon icon="mdi:check-circle" className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
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
                  <div className={`w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-500 group-hover:scale-110 border border-blue-400/30`}>
                    <Icon
                      icon={
                        key === 'frontend' ? 'mdi:monitor' :
                        key === 'backend' ? 'mdi:server' : 'mdi:cloud'
                      }
                      className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {detail.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                    {detail.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {detail.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-400/30 shadow-sm hover:bg-blue-400/30 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
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
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2">
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
          <div className="flex flex-col gap-6">
            {/* Previous Project */}
            <div className="flex justify-center">
              <Link
                href="/software/ecommerce"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2" />
                {currentLang === "en" ? "Previous Project: E-commerce" : "前のプロジェクト: Eコマース"}
              </Link>
            </div>

            {/* View All Projects */}
            <div className="flex justify-center">
              <Link
                href="/software"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30 backdrop-blur-md"
              >
                <Icon icon="mdi:view-grid" className="w-5 h-5 mr-2" />
                {currentLang === "en" ? "View All Projects" : "すべてのプロジェクトを見る"}
              </Link>
            </div>
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