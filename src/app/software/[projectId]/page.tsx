"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Project data (in a real project, this would come from external files or CMS)
const projects = {
  "data-analytics-platform": {
    en: {
      title: "Sales Data Analytics Platform",
      description: "AWS-based analytics platform for major manufacturer",
      longDescription: "Led the development, operation, and maintenance of a comprehensive sales data analytics platform for a major manufacturer using AWS and Python. This platform processes large-scale sales data to provide actionable insights for business decision-making.",
      sections: {
        overview: "Project Overview",
        features: "Key Features",
        challenges: "Technical Challenges",
        solutions: "Solutions Implemented",
        technologies: "Technologies Used",
        gallery: "Project Gallery",
        backToProjects: "View All Software Projects"
      },
      features: [
        "ETL pipeline design and implementation",
        "Real-time data processing with PySpark",
        "Data visualization and reporting",
        "Automated monitoring and alerting",
        "Scalable cloud infrastructure",
        "CI/CD pipeline automation"
      ],
      challenges: [
        "Processing large-scale manufacturer sales data",
        "Ensuring real-time data accuracy and reliability",
        "Optimizing ETL pipeline performance",
        "Managing complex AWS infrastructure"
      ],
      solutions: [
        "Implemented efficient ETL pipelines using AWS (Athena, Glue, Redshift, S3)",
        "Used Python (PySpark, Pandas) for data processing and analysis",
        "Designed IAM policies and CloudWatch/EventBridge monitoring",
        "Built CI/CD environment with CodeCommit/CodePipeline"
      ]
    },
    ja: {
      title: "売上データ分析プラットフォーム",
      description: "大手メーカーのためのAWSベース分析プラットフォーム",
      longDescription: "AWSとPythonを使用して大手メーカーの包括的な売上データ分析プラットフォームの開発、運用、保守を主導しました。このプラットフォームは大規模な売上データを処理し、ビジネス意思決定のための実用的な洞察を提供します。",
      sections: {
        overview: "プロジェクト概要",
        features: "主要機能",
        challenges: "技術的課題",
        solutions: "実装したソリューション",
        technologies: "使用技術",
        gallery: "プロジェクトギャラリー",
        backToProjects: "すべてのソフトウェアプロジェクトを見る"
      },
      features: [
        "ETLパイプラインの設計と実装",
        "PySparkによるリアルタイムデータ処理",
        "データ可視化とレポート作成",
        "自動監視とアラート機能",
        "スケーラブルなクラウドインフラ",
        "CI/CDパイプライン自動化"
      ],
      challenges: [
        "大規模メーカー売上データの処理",
        "リアルタイムデータの精度と信頼性の確保",
        "ETLパイプラインのパフォーマンス最適化",
        "複雑なAWSインフラの管理"
      ],
      solutions: [
        "AWS（Athena、Glue、Redshift、S3）を使用した効率的なETLパイプラインの実装",
        "Python（PySpark、Pandas）によるデータ処理と分析",
        "IAMポリシーとCloudWatch/EventBridge監視の設計",
        "CodeCommit/CodePipelineによるCI/CD環境の構築"
      ]
    },
    technologies: ["AWS", "Python", "AWS CDK", "Docker", "Redshift", "Glue", "Athena", "S3"],
    liveUrl: "https://data-analytics-demo.vercel.app",
    image: "/api/placeholder/800/400"
  },
  "healthcare-platform": {
    en: {
      title: "Digital Biomarker Platform",
      description: "Healthcare service system with FastAPI",
      longDescription: "Developed a comprehensive healthcare service system including a digital biomarker development platform. This system enables healthcare providers to analyze patient data and develop personalized treatment plans using advanced biomarker technology.",
      sections: {
        overview: "Project Overview",
        features: "Key Features",
        challenges: "Technical Challenges",
        solutions: "Solutions Implemented",
        technologies: "Technologies Used",
        gallery: "Project Gallery",
        backToProjects: "View All Software Projects"
      },
      features: [
        "Digital biomarker analysis and development",
        "Patient data management system",
        "Healthcare provider dashboard",
        "Real-time data processing",
        "Secure data handling and compliance",
        "API-driven architecture"
      ],
      challenges: [
        "Ensuring healthcare data security and compliance",
        "Building scalable biomarker analysis platform",
        "Implementing comprehensive testing strategy",
        "Managing complex healthcare workflows"
      ],
      solutions: [
        "Built platform using AWS (Fargate, S3) and Python (FastAPI, DDD)",
        "Implemented TDD with Python (Pytest, unittest), achieving 80% test coverage",
        "Designed secure data handling with proper authentication and encryption",
        "Created comprehensive documentation to eliminate knowledge silos"
      ]
    },
    ja: {
      title: "デジタルバイオマーカープラットフォーム",
      description: "FastAPIを使用したヘルスケアサービスシステム",
      longDescription: "デジタルバイオマーカー開発プラットフォームを含む包括的なヘルスケアサービスシステムを開発しました。このシステムにより、ヘルスケアプロバイダーは患者データを分析し、高度なバイオマーカー技術を使用してパーソナライズされた治療計画を開発できます。",
      sections: {
        overview: "プロジェクト概要",
        features: "主要機能",
        challenges: "技術的課題",
        solutions: "実装したソリューション",
        technologies: "使用技術",
        gallery: "プロジェクトギャラリー",
        backToProjects: "すべてのソフトウェアプロジェクトを見る"
      },
      features: [
        "デジタルバイオマーカー分析と開発",
        "患者データ管理システム",
        "ヘルスケアプロバイダーダッシュボード",
        "リアルタイムデータ処理",
        "セキュアなデータ処理とコンプライアンス",
        "API駆動アーキテクチャ"
      ],
      challenges: [
        "ヘルスケアデータのセキュリティとコンプライアンスの確保",
        "スケーラブルなバイオマーカー分析プラットフォームの構築",
        "包括的なテスト戦略の実装",
        "複雑なヘルスケアワークフローの管理"
      ],
      solutions: [
        "AWS（Fargate、S3）とPython（FastAPI、DDD）を使用したプラットフォーム構築",
        "Python（Pytest、unittest）によるTDD実装、80%のテストカバレッジを達成",
        "適切な認証と暗号化によるセキュアなデータ処理の設計",
        "知識のサイロを排除するための包括的なドキュメント作成"
      ]
    },
    technologies: ["Python", "FastAPI", "AWS", "MySQL", "GraphQL", "Docker", "Fargate", "S3"],
    liveUrl: "https://healthcare-platform-demo.vercel.app",
    image: "/api/placeholder/800/400"
  },
  "ecommerce-system": {
    en: {
      title: "Shachihata Official Shop E-commerce Platform",
      description: "Comprehensive e-commerce platform for Shachihata's official online shop, supporting a wide range of stamp and stationery products.",
      longDescription: "Led the development and operation of the Shachihata official e-commerce platform. The site offers a seamless shopping experience for a variety of products including name stamps, business stamps, ink pads, pens, and more. Features include a robust product search, category navigation, member point system, and responsive design for all devices.",
      sections: {
        overview: "Project Overview",
        features: "Key Features",
        challenges: "Technical Challenges",
        solutions: "Solutions Implemented",
        technologies: "Technologies Used",
        gallery: "Project Gallery",
        backToProjects: "View All Software Projects"
      },
      features: [
        "Product catalog and category navigation for stamps, ink, pens, and office supplies",
        "Member registration, login, and point program integration",
        "Cart, checkout, and multiple payment options (Amazon Pay, Rakuten Pay, carrier payments)",
        "Order history and account management",
        "Responsive UI for desktop and mobile",
        "Performance optimization for high-traffic sales events"
      ],
      challenges: [
        "Managing a large and diverse product catalog",
        "Ensuring smooth checkout and payment integration",
        "Optimizing for SEO and fast page loads",
        "Supporting seasonal campaigns and promotions"
      ],
      solutions: [
        "Implemented efficient product filtering and search",
        "Integrated multiple payment gateways and point system",
        "Optimized WordPress and MySQL for high performance",
        "Automated deployment and infrastructure management with AWS and Terraform"
      ]
    },
    ja: {
      title: "シヤチハタ公式ショップ Eコマースプラットフォーム",
      description: "シヤチハタ公式オンラインショップの包括的なEコマースプラットフォーム。印鑑や文具製品の幅広い商品をサポート。",
      longDescription: "シヤチハタ公式Eコマースプラットフォームの開発と運用を主導しました。サイトは印鑑、ビジネス印、朱肉、ペンなど様々な商品のシームレスなショッピング体験を提供します。機能には堅牢な商品検索、カテゴリナビゲーション、会員ポイントシステム、すべてのデバイスに対応したレスポンシブデザインが含まれます。",
      sections: {
        overview: "プロジェクト概要",
        features: "主要機能",
        challenges: "技術的課題",
        solutions: "実装したソリューション",
        technologies: "使用技術",
        gallery: "プロジェクトギャラリー",
        backToProjects: "すべてのソフトウェアプロジェクトを見る"
      },
      features: [
        "印鑑、インク、ペン、オフィス用品の商品カタログとカテゴリナビゲーション",
        "会員登録、ログイン、ポイントプログラム統合",
        "カート、チェックアウト、複数の決済オプション（Amazon Pay、楽天ペイ、キャリア決済）",
        "注文履歴とアカウント管理",
        "デスクトップとモバイルのレスポンシブUI",
        "高トラフィック販売イベントのパフォーマンス最適化"
      ],
      challenges: [
        "大規模で多様な商品カタログの管理",
        "スムーズなチェックアウトと決済統合の確保",
        "SEOと高速ページ読み込みの最適化",
        "季節キャンペーンとプロモーションのサポート"
      ],
      solutions: [
        "効率的な商品フィルタリングと検索の実装",
        "複数の決済ゲートウェイとポイントシステムの統合",
        "高パフォーマンスのためのWordPressとMySQLの最適化",
        "AWSとTerraformによる自動デプロイとインフラ管理"
      ]
    },
    technologies: ["PHP", "WordPress", "AWS", "MySQL", "Terraform", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://www.shachihata.jp/",
    image: "/projects/ecommerce/EcommerceImage.jpg",
    gallery: [
      { src: "/projects/ecommerce/EcommerceImage.jpg", alt: "Shachihata Official Shop" }
    ],
    imageSource: "shachihata.jp"
  }
};

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [currentLang, setCurrentLang] = useState("en");
  const [projectId, setProjectId] = useState<string>("");
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const getProjectId = async () => {
      const { projectId: id } = await params;
      setProjectId(id);
      const foundProject = projects[id as keyof typeof projects];
      setProject(foundProject);
    };
    getProjectId();
  }, [params]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const currentContent = project[currentLang as keyof typeof project];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="container mx-auto px-4 py-8">
        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {currentContent.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Project Image */}
        <div className="mb-12">
          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <img src={project.image} alt={currentContent.title} className="w-full h-64 md:h-96 object-cover" />
            {"imageSource" in project && project.imageSource && (
              <div className="p-4 bg-white border-t">
                <p className="text-xs text-gray-500 text-center">
                  Image source: <a href={`https://${project.imageSource}`} target="_blank" rel="noopener noreferrer" className="underline">{project.imageSource}</a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Section - Only show if gallery exists */}
        {"gallery" in project && project.gallery && project.gallery.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {currentContent.sections.gallery}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image: any, index: number) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Details */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.sections.overview}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {currentContent.longDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.sections.features}
              </h2>
              <ul className="space-y-2">
                {currentContent.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.sections.challenges}
              </h2>
              <ul className="space-y-2">
                {currentContent.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.sections.solutions}
              </h2>
              <ul className="space-y-2">
                {currentContent.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {currentContent.sections.technologies}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {project.technologies.map((tech: string) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-center shadow-lg"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-16 text-center">
          <Link
            href="/software"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            {currentContent.sections.backToProjects}
          </Link>
        </div>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}