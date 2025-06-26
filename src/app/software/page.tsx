"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function SoftwarePage() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const content = {
    en: {
      title: "Software Engineer",
      description: "8+ years of experience building scalable cloud infrastructure, data analytics platforms, and full-stack applications. Specialized in AWS, Python, and modern DevOps practices with a proven track record of delivering measurable business impact.",
      achievements: {
        deployments: "Deployment time reduction through CI/CD automation",
        effort: "Development effort reduction with Infrastructure as Code",
        loadTime: "Page load time optimization (from 15 seconds)",
        experience: "Years of software engineering experience"
      },
      coreExpertise: {
        title: "Core Expertise",
        cloud: {
          title: "Cloud Infrastructure",
          description: "AWS, GCP, Azure expertise with IaC and DevOps"
        },
        languages: {
          title: "Programming Languages",
          description: "Modern programming languages for full-stack development"
        },
        frameworks: {
          title: "Frameworks & Databases",
          description: "Web frameworks, APIs, and database technologies"
        },
        tools: {
          title: "Development Tools",
          description: "CI/CD, monitoring, and development practices"
        }
      },
      experience: {
        title: "Professional Experience",
        showMore: "Show All Experience",
        showLess: "Show Less"
      },
      skills: {
        title: "Technical Skills"
      },
      projects: {
        title: "Featured Projects"
      }
    },
    ja: {
      title: "ソフトウェアエンジニア",
      description: "8年以上の経験を持ち、スケーラブルなクラウドインフラ、データ分析プラットフォーム、フルスタックアプリケーションの構築を専門としています。AWS、Python、モダンなDevOpsプラクティスに特化し、測定可能なビジネスインパクトを提供する実績があります。",
      achievements: {
        deployments: "CI/CD自動化によるデプロイ時間短縮",
        effort: "Infrastructure as Codeによる開発工数削減",
        loadTime: "ページ読み込み時間最適化（15秒から）",
        experience: "ソフトウェアエンジニアリング経験年数"
      },
      coreExpertise: {
        title: "専門分野",
        cloud: {
          title: "クラウドインフラ",
          description: "AWS、GCP、AzureのIaCとDevOps専門知識"
        },
        languages: {
          title: "プログラミング言語",
          description: "フルスタック開発のためのモダンなプログラミング言語"
        },
        frameworks: {
          title: "フレームワーク・データベース",
          description: "Webフレームワーク、API、データベース技術"
        },
        tools: {
          title: "開発ツール",
          description: "CI/CD、モニタリング、開発プラクティス"
        }
      },
      experience: {
        title: "職歴",
        showMore: "すべての経験を表示",
        showLess: "一部表示"
      },
      skills: {
        title: "技術スキル"
      },
      projects: {
        title: "主要プロジェクト"
      }
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  const keyAchievements = [
    {
      metric: "80%",
      description: currentContent.achievements.deployments,
      icon: "🚀"
    },
    {
      metric: "50%",
      description: currentContent.achievements.effort,
      icon: "⚡"
    },
    {
      metric: "400ms",
      description: currentContent.achievements.loadTime,
      icon: "⚡"
    },
    {
      metric: "6+",
      description: currentContent.achievements.experience,
      icon: "💼"
    }
  ];

  const coreExpertise = [
    {
      category: currentContent.coreExpertise.cloud.title,
      description: currentContent.coreExpertise.cloud.description,
      technologies: ["AWS", "GCP", "Azure", "Terraform", "Docker"],
      color: "blue"
    },
    {
      category: currentContent.coreExpertise.languages.title,
      description: currentContent.coreExpertise.languages.description,
      technologies: ["Python", "TypeScript", "JavaScript", "PHP"],
      color: "emerald"
    },
    {
      category: currentContent.coreExpertise.frameworks.title,
      description: currentContent.coreExpertise.frameworks.description,
      technologies: ["FastAPI", "React", "WordPress", "MySQL"],
      color: "violet"
    },
    {
      category: currentContent.coreExpertise.tools.title,
      description: currentContent.coreExpertise.tools.description,
      technologies: ["GitHub", "Slack", "Backlog", "GraphQL"],
      color: "rose"
    }
  ];

  const allExperience = [
    {
      en: {
        title: "Software Engineer",
        company: "JMA Systems",
        period: "Apr 2024 - Present",
        focus: "Data Analytics Platform",
        description: "Leading AWS-based sales data analytics platform for major manufacturers",
        keyTechnologies: ["AWS", "Python", "AWS CDK", "Redshift", "Glue"],
        achievements: [
          "Built ETL pipelines using AWS (Athena, Glue, Redshift, S3) and Python (PySpark, Pandas)",
          "Reduced incident detection time through IAM design and CloudWatch/EventBridge monitoring",
          "Implemented CI/CD with CodeCommit/CodePipeline, reducing deployment time by 80%",
          "Introduced AWS CDK for IaC, cutting development effort by 50%"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "JMA Systems",
        period: "2024年4月 - 現在",
        focus: "データ分析プラットフォーム",
        description: "大手メーカーのためのAWSベース売上データ分析プラットフォームを主導",
        keyTechnologies: ["AWS", "Python", "AWS CDK", "Redshift", "Glue"],
        achievements: [
          "AWS（Athena、Glue、Redshift、S3）とPython（PySpark、Pandas）を使用したETLパイプラインを構築",
          "IAM設計とCloudWatch/EventBridge監視によるインシデント検出時間の短縮",
          "CodeCommit/CodePipelineによるCI/CD実装、デプロイ時間を80%削減",
          "IaCのためのAWS CDK導入、開発工数を50%削減"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "TechDoctor",
        period: "Jun 2023 - Dec 2023",
        focus: "Healthcare Platform",
        description: "Digital biomarker development platform for healthcare services",
        keyTechnologies: ["Python", "FastAPI", "AWS", "MySQL", "GraphQL"],
        achievements: [
          "Built digital biomarker development platform using AWS (Fargate, S3) and Python (FastAPI)",
          "Implemented TDD with Python (Pytest, unittest), increasing test coverage from 0% to 80%",
          "Improved documentation to eliminate knowledge silos and reduce operational risk"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "TechDoctor",
        period: "2023年6月 - 2023年12月",
        focus: "ヘルスケアプラットフォーム",
        description: "ヘルスケアサービスのためのデジタルバイオマーカー開発プラットフォーム",
        keyTechnologies: ["Python", "FastAPI", "AWS", "MySQL", "GraphQL"],
        achievements: [
          "AWS（Fargate、S3）とPython（FastAPI）を使用したデジタルバイオマーカー開発プラットフォームを構築",
          "Python（Pytest、unittest）によるTDD実装、テストカバレッジを0%から80%に向上",
          "知識のサイロを排除し、運用リスクを削減するためのドキュメント改善"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "One Stop Innovation",
        period: "Sep 2021 - Sep 2024",
        focus: "E-commerce & Analytics",
        description: "E-commerce system and analytics platform for major manufacturers",
        keyTechnologies: ["PHP", "WordPress", "AWS", "Terraform", "MySQL"],
        achievements: [
          "Managed WordPress e-commerce operations for Japanese seal company",
          "Improved page load time from 15 seconds to 400 milliseconds",
          "Implemented Terraform IaC, reducing development effort by 50%",
          "Optimized MySQL queries, reducing data retrieval from 100 to 10 seconds"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "One Stop Innovation",
        period: "2021年9月 - 2024年9月",
        focus: "Eコマース・分析",
        description: "大手メーカーのためのEコマースシステムと分析プラットフォーム",
        keyTechnologies: ["PHP", "WordPress", "AWS", "Terraform", "MySQL"],
        achievements: [
          "日本の印鑑会社のWordPress Eコマース運用を管理",
          "ページ読み込み時間を15秒から400ミリ秒に改善",
          "Terraform IaC実装、開発工数を50%削減",
          "MySQLクエリ最適化、データ取得時間を100秒から10秒に短縮"
        ]
      }
    },
    {
      en: {
        title: "Technical Support Engineer",
        company: "Microsoft Japan",
        period: "Oct 2022 - Jul 2023",
        focus: "Azure Support",
        description: "Azure App Service technical support and CI/CD development",
        keyTechnologies: ["Azure", "GitLab", "Application Insights", "KQL"],
        achievements: [
          "Developed CI/CD scripts using GitLab for Azure App Service deployment",
          "Utilized Application Insights and KQL for log analysis and problem resolution",
          "Documented processes and shared technical knowledge across the team"
        ]
      },
      ja: {
        title: "テクニカルサポートエンジニア",
        company: "Microsoft Japan",
        period: "2022年10月 - 2023年7月",
        focus: "Azureサポート",
        description: "Azure App ServiceのテクニカルサポートとCI/CD開発",
        keyTechnologies: ["Azure", "GitLab", "Application Insights", "KQL"],
        achievements: [
          "Azure App ServiceデプロイメントのためのGitLabを使用したCI/CDスクリプト開発",
          "ログ分析と問題解決のためのApplication InsightsとKQL活用",
          "プロセス文書化とチーム全体での技術知識共有"
        ]
      }
    },
    {
      en: {
        title: "Backend Engineer",
        company: "snaq.me",
        period: "Mar 2022 - Aug 2022",
        focus: "Subscription Service",
        description: "Snack subscription service platform using AWS",
        keyTechnologies: ["AWS", "Python", "FastAPI", "Lambda"],
        achievements: [
          "Developed batch processing for content delivery using AWS (Lambda, S3) and Python (FastAPI)",
          "Created custom internal library, reducing development costs by 40%"
        ]
      },
      ja: {
        title: "バックエンドエンジニア",
        company: "snaq.me",
        period: "2022年3月 - 2022年8月",
        focus: "サブスクリプションサービス",
        description: "AWSを使用したスナックサブスクリプションサービスプラットフォーム",
        keyTechnologies: ["AWS", "Python", "FastAPI", "Lambda"],
        achievements: [
          "AWS（Lambda、S3）とPython（FastAPI）を使用したコンテンツ配信のためのバッチ処理開発",
          "カスタム内部ライブラリ作成、開発コストを40%削減"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "Luup",
        period: "Jul 2021 - Oct 2022",
        focus: "Mobility/IoT Service",
        description: "Mobility (IoT) service using GCP, Firebase, and AWS",
        keyTechnologies: ["GCP", "Firebase", "TypeScript", "Express", "AWS"],
        achievements: [
          "Built REST and MQTT APIs using GCP & Firebase and TypeScript (Express)",
          "Implemented IaC for AWS and GCP, reducing costs by 50%",
          "Eliminated manual testing/deployment by 100% with GitHub Actions"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "Luup",
        period: "2021年7月 - 2022年10月",
        focus: "モビリティ/IoTサービス",
        description: "GCP、Firebase、AWSを使用したモビリティ（IoT）サービス",
        keyTechnologies: ["GCP", "Firebase", "TypeScript", "Express", "AWS"],
        achievements: [
          "GCP & FirebaseとTypeScript（Express）を使用したRESTとMQTT API構築",
          "AWSとGCPのIaC実装、コストを50%削減",
          "GitHub Actionsによる手動テスト/デプロイを100%削除"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "Asial Corporation",
        period: "Apr 2021 - Nov 2021",
        focus: "Recruitment Systems",
        description: "Recruitment systems for universities and new graduates",
        keyTechnologies: ["TypeScript", "NestJS", "Docker", "MySQL"],
        achievements: [
          "Built university entrance exam system using Docker, NestJS, and MySQL",
          "Optimized MySQL performance on platform with 1M+ annual users",
          "Reduced query execution time from 2 seconds to 200 milliseconds"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "Asial Corporation",
        period: "2021年4月 - 2021年11月",
        focus: "採用システム",
        description: "大学と新卒者のための採用システム",
        keyTechnologies: ["TypeScript", "NestJS", "Docker", "MySQL"],
        achievements: [
          "Docker、NestJS、MySQLを使用した大学入試システム構築",
          "年間100万人以上のユーザーを持つプラットフォームでのMySQLパフォーマンス最適化",
          "クエリ実行時間を2秒から200ミリ秒に短縮"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "T2Lab",
        period: "Mar 2020 - Mar 2021",
        focus: "IoT Sensor Service",
        description: "IoT-based odor sensor service for global manufacturer",
        keyTechnologies: ["AWS", "Python", "Flask", "TypeScript", "React"],
        achievements: [
          "Built application using AWS, Python (Flask), and TypeScript (ReactJS)",
          "Optimized API performance for real-time IoT data processing",
          "Delivered AWS training sessions for enterprise clients"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "T2Lab",
        period: "2020年3月 - 2021年3月",
        focus: "IoTセンサーサービス",
        description: "グローバルメーカーのためのIoTベース臭気センサーサービス",
        keyTechnologies: ["AWS", "Python", "Flask", "TypeScript", "React"],
        achievements: [
          "AWS、Python（Flask）、TypeScript（ReactJS）を使用したアプリケーション構築",
          "リアルタイムIoTデータ処理のためのAPIパフォーマンス最適化",
          "エンタープライズクライアント向けAWSトレーニングセッション実施"
        ]
      }
    },
    {
      en: {
        title: "FullStack Engineer",
        company: "Micro CAD",
        period: "Feb 2017 - Feb 2020",
        focus: "Intellectual Property System",
        description: "Intellectual property management system and team leadership",
        keyTechnologies: ["PHP", "JavaScript", "AWS", "CloudFormation", "Python"],
        achievements: [
          "Served as team leader and head of Information Systems Division",
          "Improved page rendering from 15 seconds to 800 milliseconds",
          "Migrated to AWS using CloudFormation, reducing deployment from 1 day to 20 minutes"
        ]
      },
      ja: {
        title: "フルスタックエンジニア",
        company: "Micro CAD",
        period: "2017年2月 - 2020年2月",
        focus: "知的財産システム",
        description: "知的財産管理システムとチームリーダーシップ",
        keyTechnologies: ["PHP", "JavaScript", "AWS", "CloudFormation", "Python"],
        achievements: [
          "チームリーダーと情報システム部長を務める",
          "ページレンダリング時間を15秒から800ミリ秒に改善",
          "CloudFormationを使用したAWS移行、デプロイ時間を1日から20分に短縮"
        ]
      }
    },
    {
      en: {
        title: "Infrastructure Engineer",
        company: "Xincor miXell",
        period: "Apr 2015 - Feb 2017",
        focus: "Network Services",
        description: "Network service operations for major telecommunications company",
        keyTechnologies: ["Linux", "VBA", "Network Management"],
        achievements: [
          "Developed VBA batch processing solution",
          "Reduced daily routine tasks from 1 hour to under 5 minutes"
        ]
      },
      ja: {
        title: "インフラエンジニア",
        company: "Xincor miXell",
        period: "2015年4月 - 2017年2月",
        focus: "ネットワークサービス",
        description: "大手通信会社のネットワークサービス運用",
        keyTechnologies: ["Linux", "VBA", "Network Management"],
        achievements: [
          "VBAバッチ処理ソリューション開発",
          "日常業務を1時間から5分未満に短縮"
        ]
      }
    }
  ];

  const projects = [
    {
      id: "data-analytics-platform",
      title: "Sales Data Analytics Platform",
      description: "AWS-based analytics platform processing millions of records for major manufacturers",
      technologies: ["AWS", "Python", "AWS CDK", "Docker", "Redshift", "Glue"],
      impact: "80% faster deployments, 50% reduced development effort",
      image: "/api/placeholder/800/400"
    },
    {
      id: "healthcare-platform",
      title: "Digital Biomarker Platform",
      description: "Healthcare service system with FastAPI and comprehensive testing",
      technologies: ["Python", "FastAPI", "AWS", "MySQL", "GraphQL", "Docker"],
      impact: "80% test coverage, eliminated knowledge silos",
      image: "/api/placeholder/800/400"
    },
    {
      id: "ecommerce-system",
      title: "E-commerce & Analytics Platform",
      description: "High-performance WordPress e-commerce with analytics integration",
      technologies: ["PHP", "WordPress", "AWS", "MySQL", "Terraform", "JavaScript"],
      impact: "400ms page load time, 50% development effort reduction",
      image: "/projects/ecommerce/EcommerceImage.jpg"
    }
  ];

  const visibleExperience = showAllExperience ? allExperience : allExperience.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-blue-600">{achievement.metric}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Core Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.coreExpertise.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreExpertise.map((expertise, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full shadow-lg ${
                    expertise.color === 'blue' ? 'bg-blue-500' :
                    expertise.color === 'emerald' ? 'bg-emerald-500' :
                    expertise.color === 'violet' ? 'bg-violet-500' :
                    expertise.color === 'rose' ? 'bg-rose-500' : 'bg-gray-500'
                  }`}></div>
                  {expertise.category}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{expertise.description}</p>
                <div className="flex flex-wrap gap-3">
                  {expertise.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border shadow-sm hover:shadow-md transition-shadow ${
                        expertise.color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        expertise.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        expertise.color === 'violet' ? 'bg-violet-50 text-violet-700 border-violet-200' :
                        expertise.color === 'rose' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                        'bg-gray-50 text-gray-700 border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.experience.title}
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              {visibleExperience.map((exp, index) => (
                <div key={index} className="relative mb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="ml-16">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{exp[currentLang as keyof typeof exp].title}</h3>
                          <p className="text-lg text-blue-600 font-medium mb-1">{exp[currentLang as keyof typeof exp].company}</p>
                          <p className="text-sm text-gray-500 mb-2">{exp[currentLang as keyof typeof exp].period}</p>
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {exp[currentLang as keyof typeof exp].focus}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{exp[currentLang as keyof typeof exp].description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp[currentLang as keyof typeof exp].keyTechnologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp[currentLang as keyof typeof exp].achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Show More/Less Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllExperience(!showAllExperience)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {showAllExperience ? currentContent.experience.showLess : `${currentContent.experience.showMore} (${allExperience.length} total)`}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.skills.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <TechnicalSkills currentLang={currentLang} />
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/software/${project.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {project.description}
                    </p>
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Impact: {project.impact}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}