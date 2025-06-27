"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function SoftwarePage() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Pre-generated static values for animations to avoid hydration mismatch
  const floatingElements = [
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
    { left: "95%", top: "55%", delay: "2.8s", duration: "5s" }
  ];

  const cyanElements = [
    { left: "30%", top: "25%", delay: "0.2s", duration: "5s" },
    { left: "70%", top: "35%", delay: "1.3s", duration: "4s" },
    { left: "45%", top: "65%", delay: "0.8s", duration: "6s" },
    { left: "85%", top: "45%", delay: "2.1s", duration: "3s" },
    { left: "15%", top: "75%", delay: "1.6s", duration: "5s" },
    { left: "55%", top: "85%", delay: "0.4s", duration: "4s" },
    { left: "25%", top: "15%", delay: "2.4s", duration: "6s" },
    { left: "75%", top: "65%", delay: "1.1s", duration: "3s" },
    { left: "40%", top: "95%", delay: "0.6s", duration: "5s" },
    { left: "90%", top: "25%", delay: "2.7s", duration: "4s" }
  ];

  const codeElements = [
    { left: "20%", top: "30%", delay: "0.5s", fontSize: "14px", text: "<div>" },
    { left: "80%", top: "20%", delay: "1.2s", fontSize: "16px", text: "</div>" },
    { left: "10%", top: "70%", delay: "0.8s", fontSize: "12px", text: "{" },
    { left: "90%", top: "60%", delay: "2.1s", fontSize: "18px", text: "}" },
    { left: "50%", top: "40%", delay: "1.5s", fontSize: "15px", text: "const" },
    { left: "30%", top: "80%", delay: "0.3s", fontSize: "13px", text: "function" },
    { left: "70%", top: "10%", delay: "2.8s", fontSize: "17px", text: "return" },
    { left: "60%", top: "90%", delay: "1.8s", fontSize: "11px", text: "import" }
  ];

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
        keyTechnologies: ["AWS", "Python", "AWS CDK", "Redshift", "Glue", "Lambda", "Step Function", "CloudWatch", "EventBridge", "SNS", "SQS", "CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline"],
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
        keyTechnologies: ["AWS", "Python", "AWS CDK", "Redshift", "Glue", "Lambda", "Step Function", "CloudWatch", "EventBridge", "SNS", "SQS", "CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline"],
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
        keyTechnologies: ["AWS", "Python", "FastAPI", "MySQL", "Docker", "GraphQL"],
        achievements: [
          "Built digital biomarker development platform using AWS (Fargate, S3) and Python (FastAPI, DDD)",
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
        keyTechnologies: ["AWS", "Python", "FastAPI", "MySQL", "Docker", "GraphQL"],
        achievements: [
          "AWS（Fargate、S3）とPython（FastAPI、DDD）を使用したデジタルバイオマーカー開発プラットフォームを構築",
          "Python（Pytest、unittest）によるTDD実装、テストカバレッジを0%から80%に向上",
          "ドキュメント改善により知識のサイロ化を解消し、運用リスクを削減"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "One Stop Innovation",
        period: "Sep 2021 - Sep 2024",
        focus: "E-commerce & Analytics Platform",
        description: "E-commerce system and analytics platform for major stationery manufacturer",
        keyTechnologies: ["AWS", "Google App Script", "PHP", "HTML", "CSS", "JavaScript", "Docker", "Terraform", "MySQL", "WordPress"],
        achievements: [
          "Managed e-commerce operations for Japanese seal company using WordPress",
          "Built data platform from scratch for analytics, including database design and BI dashboards",
          "Improved e-commerce page load time from 15 seconds to 400 milliseconds",
          "Implemented IaC with Terraform, reducing development effort by 50%",
          "Optimized MySQL queries, reducing data retrieval time from 100 seconds to 10 seconds"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "One Stop Innovation",
        period: "2021年9月 - 2024年9月",
        focus: "Eコマース・分析プラットフォーム",
        description: "大手文具・事務器具メーカーのEコマースシステムおよび分析基盤",
        keyTechnologies: ["AWS", "Google App Script", "PHP", "HTML", "CSS", "JavaScript", "Docker", "Terraform", "MySQL", "WordPress"],
        achievements: [
          "WordPressを使用した日本のハンコ会社のEコマース運営を管理",
          "分析基盤構築のためのデータ基盤をスクラッチで構築、DB設計、API連携およびBIツールでダッシュボード作成",
          "Eコマースサイトのページ表示時間のパフォーマンスチューニングで15秒から400ミリ秒に改善",
          "Terraformによるシステム基盤のIaCによるAWSリソース管理を効率化し、開発工数を50%削減",
          "MySQLのクエリチューニングにより、データ表示を100秒から10秒に改善"
        ]
      }
    },
    {
      en: {
        title: "Technical Support Engineer",
        company: "Microsoft Japan",
        period: "Oct 2022 - Jul 2023",
        focus: "Azure Support",
        description: "Technical support for Azure App Service and cloud solutions",
        keyTechnologies: ["Azure", "App Service", "Functions", "Container Apps", "GitHub Actions"],
        achievements: [
          "Developed CI/CD scripts using GitLab for Azure App Service deployments",
          "Utilized Application Insights and KQL for log analysis and problem resolution",
          "Improved documentation and knowledge sharing across the team"
        ]
      },
      ja: {
        title: "テクニカルサポートエンジニア",
        company: "Microsoft Japan",
        period: "2022年10月 - 2023年7月",
        focus: "Azureサポート",
        description: "Azure App Serviceとクラウドソリューションのテクニカルサポート",
        keyTechnologies: ["Azure", "App Service", "Functions", "Container Apps", "GitHub Actions"],
        achievements: [
          "Azure App ServiceにデプロイするためのGitLabを使用したCI/CDスクリプトを開発",
          "ログ分析（Application Insights、KQL）を活用し、顧客の問題を特定し、ソースコードを分析し、改善のためのスクリプトを開発",
          "ドキュメントの整備を実施し、チーム内でナレッジを共有し質問等のコストを削減"
        ]
      }
    },
    {
      en: {
        title: "Backend Engineer",
        company: "snaq.me",
        period: "Mar 2022 - Aug 2022",
        focus: "Snack Subscription Service",
        description: "AWS-based snack subscription service platform",
        keyTechnologies: ["AWS", "Python", "JavaScript", "Docker"],
        achievements: [
          "Built and operated snack subscription service platform using AWS",
          "Developed batch processing for content delivery using AWS (Lambda, S3) and Python (FastAPI)",
          "Created custom internal library, reducing development costs by 40%"
        ]
      },
      ja: {
        title: "バックエンドエンジニア",
        company: "snaq.me",
        period: "2022年3月 - 2022年8月",
        focus: "スナックサブスクリプションサービス",
        description: "AWSベースのスナックサブスクリプションサービスプラットフォーム",
        keyTechnologies: ["AWS", "Python", "JavaScript", "Docker"],
        achievements: [
          "AWSを使用してスナックのサブスクリプションを提供するサービスの構築・運用を担当",
          "AWS（Lambda、S3）とPython（FastAPI）を使用してコンテンツ配信バッチ処理を構築・運用",
          "自社カスタムライブラリを作成することにより40%の開発コストの削減"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "Luup",
        period: "Jul 2021 - Oct 2022",
        focus: "Mobility IoT Service",
        description: "Mobility service platform using GCP, Firebase, and AWS",
        keyTechnologies: ["AWS", "GCP", "Firebase", "TypeScript", "Express", "Terraform"],
        achievements: [
          "Built REST and MQTT APIs using GCP & Firebase (Cloud Functions, Firestore) and TypeScript (Express)",
          "Designed logging, monitoring, alerting, and SLOs using Cloud Logging and Cloud Monitoring",
          "Reduced development and operations costs by 50% through IaC implementation",
          "Eliminated manual testing and deployment efforts by 100% through GitHub Actions automation"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "Luup",
        period: "2021年7月 - 2022年10月",
        focus: "モビリティIoTサービス",
        description: "GCP、Firebase、AWSを使用したモビリティサービスプラットフォーム",
        keyTechnologies: ["AWS", "GCP", "Firebase", "TypeScript", "Express", "Terraform"],
        achievements: [
          "GCP&Firebase（Functions、Firestore）とTypescript（Express）を活用して、API（Rest API、MQTT）の構築・運用",
          "Cloud Logging、Cloud Monitoringによるログ監視、アラーム設計、SLO設計により、障害検知時間の短縮",
          "AWS及びGCPを使用したインフラ構築をIaC化することにより開発・運用コストを50%削減",
          "Github Actionsで自動テスト、自動デプロイを導入することにより、テスト・構築コストを100%削減"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "Asial Corporation",
        period: "Apr 2021 - Nov 2021",
        focus: "Recruitment Systems",
        description: "New graduate recruitment and university systems",
        keyTechnologies: ["TypeScript", "NestJS", "Docker", "MySQL"],
        achievements: [
          "Built university entrance exam system using Docker, NestJS (Node.js), and MySQL",
          "Developed new graduate recruitment platform using AWS (VPC), Docker, NestJS (Node.js), and MySQL",
          "Optimized MySQL performance on job-matching platform used by over 1 million users annually",
          "Reduced query execution time from 2 seconds to 200 milliseconds"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "Asial Corporation",
        period: "2021年4月 - 2021年11月",
        focus: "採用システム",
        description: "新卒採用大手システムおよび大学システム",
        keyTechnologies: ["TypeScript", "NestJS", "Docker", "MySQL"],
        achievements: [
          "Docker、NestJS（Nodejs）、Mysqlによる大学入試採用システムの構築・運用",
          "AWS（VPC）、Docker、NestJS（Nodejs）、Mysqlによる新卒採用システムの構築・運用",
          "年間100万人以上が利用する求人プラットフォームにおいて、クエリの最適化とインデックスの改善により、MySQLのパフォーマンスを最適化",
          "クエリの実行時間を2秒から200ミリ秒に短縮"
        ]
      }
    },
    {
      en: {
        title: "Software Engineer",
        company: "T2Lab",
        period: "Mar 2020 - Mar 2021",
        focus: "IoT Odor Sensor Service",
        description: "IoT-based odor sensor service for major global manufacturer",
        keyTechnologies: ["AWS", "Python", "ReactJS", "TypeScript", "HTML", "CSS"],
        achievements: [
          "Built application using AWS (Amplify, S3, Lambda, DynamoDB, API Gateway), Python (Flask, Clean Architecture), and TypeScript (ReactJS)",
          "Optimized API performance for seamless real-time data processing from IoT devices",
          "Delivered AWS best-practice training sessions for enterprise clients",
          "Provided hands-on demonstrations and architectural guidance for AWS migration"
        ]
      },
      ja: {
        title: "ソフトウェアエンジニア",
        company: "T2Lab",
        period: "2020年3月 - 2021年3月",
        focus: "IoT臭いセンサーサービス",
        description: "大手グローバルメーカーの臭いセンサーサービス（IoTサービス）",
        keyTechnologies: ["AWS", "Python", "ReactJS", "TypeScript", "HTML", "CSS"],
        achievements: [
          "AWS（Amplify、S3、Lambda、DynamoDB、API GW）、Python（Flask、Clean Architecture）、およびTypeScript（ReactJS）によるアプリを構築・運用",
          "APIのパフォーマンスを最適化し、IoTデバイスのシームレスなリアルタイムデータ処理を実現",
          "AWS（EC2、S3、RDS、Lambda、IAM）のベストプラクティスを網羅したAWSトレーニングセッションをエンタープライズクライアント向けに実施",
          "ハンズオンデモンストレーションとアーキテクチャガイダンスを提供し、クライアントのAWSへのインフラ移行を成功に導いた"
        ]
      }
    },
    {
      en: {
        title: "FullStack Engineer",
        company: "Micro CAD",
        period: "Feb 2017 - Feb 2020",
        focus: "Intellectual Property System",
        description: "End-to-end development of intellectual property management system",
        keyTechnologies: ["AWS", "PHP", "JavaScript", "HTML", "CSS", "Python", "Flask"],
        achievements: [
          "Served as team leader, providing mentorship and training to team members",
          "Optimized front-end performance, reducing page rendering time from 15 seconds to 800 milliseconds",
          "Migrated on-premises systems to AWS (VPC, EC2, RDS) using CloudFormation, reducing deployment time from 1 day to 20 minutes",
          "Designed and maintained time and attendance management system using AWS (API Gateway, VPC, Lambda, DynamoDB) and Python (Flask, Clean Architecture)"
        ]
      },
      ja: {
        title: "フルスタックエンジニア",
        company: "Micro CAD",
        period: "2017年2月 - 2020年2月",
        focus: "知的財産システム",
        description: "知的財産システムの構築から運用まで担当",
        keyTechnologies: ["AWS", "PHP", "JavaScript", "HTML", "CSS", "Python", "Flask"],
        achievements: [
          "チームリーダーとしてチームメンバーのメンターから教育まで担当",
          "PHP、HTML、CSS、JavaScriptを使用して、システムのパフォーマンスチューニングを実施し、画面描画までを15秒から800ミリ秒に改善",
          "AWS（VPC、EC2、RDS）へのオンプレミスからクラウド移行への実施し、Cloud Formationでのシステム構築を実施することにより、1日から20分に改善",
          "AWS（API Gateway、VPC、Lambda、DynamoDB）およびPython（Flask、Clean Architecture）を使用した勤怠管理システムをスクラッチで設計、構築・運用までを実施"
        ]
      }
    },
    {
      en: {
        title: "Infrastructure Engineer",
        company: "Xincor miXell",
        period: "Apr 2015 - Feb 2017",
        focus: "Network Services",
        description: "Network service operations at major telecommunications company",
        keyTechnologies: ["Linux", "RedHat", "VBA"],
        achievements: [
          "Managed network service operations at major telecommunications company",
          "Developed and implemented batch processing solution using VBA, reducing daily routine task from 1 hour to under 5 minutes"
        ]
      },
      ja: {
        title: "インフラエンジニア",
        company: "Xincor miXell",
        period: "2015年4月 - 2017年2月",
        focus: "ネットワークサービス",
        description: "大手通信企業においてネットワークサービスの運用を担当",
        keyTechnologies: ["Linux", "RedHat", "VBA"],
        achievements: [
          "大手通信企業においてネットワークサービスの運用を担当",
          "VBAを使用したバッチ処理ソリューションの開発と導入により、毎日1時間のルーチン作業を5分以内に短縮し、チームの効率を大幅に改善"
        ]
      }
    }
  ];

  const displayedExperience = showAllExperience ? allExperience : allExperience.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingElements.map((element, index) => (
          <div
            key={`floating-${index}`}
            className="absolute w-3 h-3 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration
            }}
          />
        ))}
        {cyanElements.map((element, index) => (
          <div
            key={`cyan-${index}`}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration
            }}
          />
        ))}
        {/* Code-like elements */}
        {codeElements.map((element, index) => (
          <div
            key={`code-${index}`}
            className="absolute text-blue-400/10 font-mono text-sm animate-pulse"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              fontSize: element.fontSize
            }}
          >
            {element.text}
          </div>
        ))}
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fadeIn">
          <h1 className={`font-display text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {currentContent.title}
          </h1>
          <p className={`font-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.3s' }}>
            {currentContent.description}
          </p>
        </header>

        {/* Key Achievements */}
        <section className="mb-16 animate-slideInUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group cursor-pointer"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-bounce">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {achievement.metric}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Expertise */}
        <section className="mb-16 animate-slideInLeft">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            {currentContent.coreExpertise.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {coreExpertise.map((expertise, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 group cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${expertise.color}-100 to-${expertise.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-${expertise.color}-200 group-hover:to-${expertise.color}-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <svg className={`w-8 h-8 text-${expertise.color}-600 group-hover:scale-110 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {expertise.category}
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                    {expertise.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {expertise.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-${expertise.color}-50 text-${expertise.color}-700 rounded-full text-sm font-semibold border border-${expertise.color}-200 shadow-sm hover:bg-${expertise.color}-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce`}
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

        {/* Technical Skills */}
        <section className="mb-16 animate-slideInRight">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            {currentContent.skills.title}
          </h2>
          <TechnicalSkills currentLang={currentLang} />
        </section>

        {/* Professional Experience */}
        <section className="mb-16 animate-slideInUp">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            {currentContent.experience.title}
          </h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {displayedExperience.map((exp, index) => {
              const currentExp = exp[currentLang as keyof typeof exp] as any;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {currentExp.title}
                      </h3>
                      <p className="text-xl text-gray-700 font-semibold">{currentExp.company}</p>
                      <p className="text-gray-600">{currentExp.focus}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium group-hover:bg-blue-200 transition-colors duration-300">
                      {currentExp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {currentExp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentExp.keyTechnologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200 shadow-sm hover:bg-indigo-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {currentExp.achievements.map((achievement: string, achievementIndex: number) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start space-x-3 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-display font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              {showAllExperience ? currentContent.experience.showLess : currentContent.experience.showMore}
            </button>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="text-center animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to discuss your next project? Let's explore how we can work together to bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-display font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}