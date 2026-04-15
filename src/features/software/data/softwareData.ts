export interface SoftwareContent {
  en: {
    title: string;
    description: string;
    achievements: {
      deployments: string;
      effort: string;
      loadTime: string;
      experience: string;
    };
    coreExpertise: {
      title: string;
      cloud: { title: string; description: string };
      languages: { title: string; description: string };
      frameworks: { title: string; description: string };
      tools: { title: string; description: string };
    };
    experience: { title: string; showMore: string; showLess: string };
    skills: { title: string };
    projects: { title: string };
  };
  ja: {
    title: string;
    description: string;
    achievements: {
      deployments: string;
      effort: string;
      loadTime: string;
      experience: string;
    };
    coreExpertise: {
      title: string;
      cloud: { title: string; description: string };
      languages: { title: string; description: string };
      frameworks: { title: string; description: string };
      tools: { title: string; description: string };
    };
    experience: { title: string; showMore: string; showLess: string };
    skills: { title: string };
    projects: { title: string };
  };
}

export interface KeyAchievement {
  metric: string;
  description: string;
  icon: string;
}

export interface CoreExpertise {
  category: string;
  description: string;
  technologies: string[];
  color: string;
  icon: string;
  iconColor: string;
}

export interface Experience {
  en: {
    title: string;
    company: string;
    period: string;
    focus: string;
    description: string;
    keyTechnologies: string[];
    achievements: string[];
  };
  ja: {
    title: string;
    company: string;
    period: string;
    focus: string;
    description: string;
    keyTechnologies: string[];
    achievements: string[];
  };
}

export interface FeaturedProject {
  id: string;
  en: {
    title: string;
    description: string;
    technologies: string[];
    impact: string;
    period: string;
  };
  ja: {
    title: string;
    description: string;
    technologies: string[];
    impact: string;
    period: string;
  };
  icon: string;
  color: string;
}

export interface AnimationElement {
  left: string;
  top: string;
  delay: string;
  duration: string;
  fontSize?: string;
  text?: string;
}

export const softwareContent: SoftwareContent = {
  en: {
    title: "Software Engineer",
    description: "10+ years of experience building scalable cloud infrastructure, data analytics platforms, and full-stack applications. Specialized in AWS, Python, and modern DevOps practices with a proven track record of delivering measurable business impact.",
    achievements: {
      deployments: "Deployment time reduction through CI/CD automation",
      effort: "Development effort reduction with Infrastructure as Code",
      loadTime: "Page load time optimization (from 15 seconds)",
      experience: "Years of software engineering experience"
    },
    coreExpertise: {
      title: "Core Expertise",
      cloud: { title: "Cloud Infrastructure", description: "AWS, GCP, Azure expertise with IaC and DevOps" },
      languages: { title: "Programming Languages", description: "Modern programming languages for full-stack development" },
      frameworks: { title: "Frameworks & Databases", description: "Web frameworks, APIs, and database technologies" },
      tools: { title: "Development Tools", description: "CI/CD, monitoring, and development practices" }
    },
    experience: { title: "Professional Experience", showMore: "Show All Experience", showLess: "Show Less" },
    skills: { title: "Technical Skills" },
    projects: { title: "Featured Projects" }
  },
  ja: {
    title: "ソフトウェアエンジニア",
    description: "10年以上の経験を持ち、スケーラブルなクラウドインフラ、データ分析プラットフォーム、フルスタックアプリケーションの構築を専門としています。AWS、Python、モダンなDevOpsプラクティスに特化し、測定可能なビジネスインパクトを提供する実績があります。",
    achievements: {
      deployments: "CI/CD自動化によるデプロイ時間短縮",
      effort: "Infrastructure as Codeによる開発工数削減",
      loadTime: "ページ読み込み時間最適化（15秒から）",
      experience: "ソフトウェアエンジニアリング経験年数"
    },
    coreExpertise: {
      title: "専門分野",
      cloud: { title: "クラウドインフラ", description: "AWS、GCP、AzureのIaCとDevOps専門知識" },
      languages: { title: "プログラミング言語", description: "フルスタック開発のためのモダンなプログラミング言語" },
      frameworks: { title: "フレームワーク・データベース", description: "Webフレームワーク、API、データベース技術" },
      tools: { title: "開発ツール", description: "CI/CD、モニタリング、開発プラクティス" }
    },
    experience: { title: "職歴", showMore: "すべての経験を表示", showLess: "一部表示" },
    skills: { title: "技術スキル" },
    projects: { title: "主要プロジェクト" }
  }
};

export const floatingElements: AnimationElement[] = [
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

export const cyanElements: AnimationElement[] = [
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

export const codeElements: AnimationElement[] = [
  { left: "20%", top: "30%", delay: "0.5s", duration: "4s", fontSize: "14px", text: "<div>" },
  { left: "80%", top: "20%", delay: "1.2s", duration: "4s", fontSize: "16px", text: "</div>" },
  { left: "10%", top: "70%", delay: "0.8s", duration: "4s", fontSize: "12px", text: "{" },
  { left: "90%", top: "60%", delay: "2.1s", duration: "4s", fontSize: "18px", text: "}" },
  { left: "50%", top: "40%", delay: "1.5s", duration: "4s", fontSize: "15px", text: "const" },
  { left: "30%", top: "80%", delay: "0.3s", duration: "4s", fontSize: "13px", text: "function" },
  { left: "70%", top: "10%", delay: "2.8s", duration: "4s", fontSize: "17px", text: "return" },
  { left: "60%", top: "90%", delay: "1.8s", duration: "4s", fontSize: "11px", text: "import" }
];

export const allExperience: Experience[] = [
  {
    en: {
      title: "Solution Architect", company: "Jitera", period: "Jan 2026 - Present",
      focus: "Business System Assessment & DX Proposal",
      description: "Business system assessment and DX consulting for clients as primary employment",
      keyTechnologies: [],
      achievements: [
        "Conducted direct interviews with client stakeholders to identify pain points in existing business systems",
        "Visualized and documented As-Is (current business flow) processes",
        "Designed To-Be (ideal state) business processes and defined HLD for system improvement direction",
        "Created proposal materials including ROM estimates and presented directly to clients",
        "Led requirements definition upstream phase independently",
        "Delivered proposals combining technical and business perspectives"
      ]
    },
    ja: {
      title: "Solution Architect", company: "株式会社Jitera", period: "2026年01月 - 現在",
      focus: "業務システムアセスメント・DX提案",
      description: "本業として水産業（海藻）企業向け業務システムアセスメントおよびDXコンサルティングを担当",
      keyTechnologies: [],
      achievements: [
        "クライアント担当者への直接ヒアリングを実施し、既存業務システムの課題・ペインポイントを抽出・整理",
        "AsIs（現状業務フロー）の可視化・ドキュメント化",
        "ToBe（あるべき姿）の業務プロセス設計・HLD（高位設計）によるシステム改善方針の策定",
        "ROM（概算見積）を含む提案資料を作成し、クライアントへ直接提案・説明を実施",
        "要件定義上流フェーズを単独でリード",
        "技術視点と業務視点を掛け合わせた提案を実現"
      ]
    }
  },
  {
    en: {
      title: "Solution Architect", company: "Jitera (Side Job)", period: "Jul 2025 - Dec 2025",
      focus: "AI PoC Development & DX Consulting",
      description: "Developed AI-powered data visualization PoC and conducted business system assessment as side employment",
      keyTechnologies: ["Next.js", "Vercel", "Anthropic API (Claude)", "Claude Code", "Langfuse"],
      achievements: [
        "Designed and implemented end-to-end PoC dashboard for analyzing and visualizing impact finance investment data using AI (frontend to API integration)",
        "Designed and implemented data interpretation and insight generation features using Anthropic API (Claude)",
        "Built rapid prototyping and client demo environment using Next.js + Vercel",
        "Accelerated prototyping through AI-assisted development using Claude Code",
        "Introduced Langfuse for prompt version management, response quality visualization, and API cost optimization",
        "Achieved integrated visualization of qualitative and quantitative data using AI with MLOps-oriented quality and cost management",
        "Conducted client interviews, As-Is analysis, To-Be design, HLD, and ROM for DX proposal independently"
      ]
    },
    ja: {
      title: "Solution Architect", company: "株式会社Jitera（副業）", period: "2025年07月 - 2025年12月",
      focus: "AI活用PoC開発・DXコンサルティング",
      description: "副業としてAIを活用したデータ可視化PoCの開発および業務システムアセスメントを担当",
      keyTechnologies: ["Next.js", "Vercel", "Anthropic API（Claude）", "Claude Code", "Langfuse"],
      achievements: [
        "インパクトファイナンスの投資・社会的効果データをAIで分析・可視化するダッシュボードをPoC実装（フロントエンド〜API連携を一気通貫で担当）",
        "Anthropic API（Claude）を活用したデータ解釈・インサイト生成機能の設計・実装",
        "Next.js + Vercelによる高速プロトタイピングとクライアントへのデモ環境構築",
        "Claude Codeを活用したAI支援開発によりプロタイピングを高速化",
        "Langfuseを導入しプロンプトのバージョン管理・レスポンス品質の可視化・APIコスト最適化の設計を実施",
        "AIによる定性・定量データの統合可視化を実現し、LLMの品質・コスト両面を管理できるMLOps的な観点を持った実装を実現",
        "クライアントへのヒアリング・AsIs分析・ToBe設計・HLD・ROMによるDX提案を単独でリード"
      ]
    }
  },
  {
    en: {
      title: "Software Engineer", company: "JMA Systems (Side Job)", period: "Feb 2024 - Present",
      focus: "Data Analytics Platform Construction",
      description: "New development and operation of data analytics infrastructure for major clients",
      keyTechnologies: ["Python", "SQL", "Apache Spark", "AWS", "S3", "Glue", "Redshift", "Step Functions", "CloudWatch", "IaC"],
      achievements: [
        "Implemented ETL pipelines for collecting, transforming, and storing data from multiple business systems (processing MB to hundreds of GB daily)",
        "Developed large-scale batch processing using Apache Spark",
        "Implemented workflow control using AWS Step Functions",
        "Built AWS infrastructure from scratch using IaC, enabling reproducible environment setup and code-managed infrastructure",
        "Contributed to development and production environment setup and internal standardization",
        "Designed pipeline monitoring using CloudWatch and handled incident investigation and recovery",
        "Reduced handover and maintenance costs through operational documentation"
      ]
    },
    ja: {
      title: "ソフトウェアエンジニア", company: "株式会社ジェーエムエーシステムズ（副業）", period: "2024年02月 - 現在",
      focus: "データ分析基盤新規構築・保守運用",
      description: "大手クライアント向けデータ分析基盤の新規構築および保守運用を担当",
      keyTechnologies: ["Python", "SQL", "Apache Spark", "AWS", "S3", "Glue", "Redshift", "Step Functions", "CloudWatch", "IaC"],
      achievements: [
        "複数業務システムからのデータ収集・変換・蓄積を行うETLパイプラインを実装（日次 数MB〜数百GB規模のデータを処理）",
        "Apache Sparkを活用した大規模バッチ処理の開発",
        "AWS Step Functionsを用いたワークフロー制御の実装",
        "AWSインフラをIaCでゼロから構築し、インフラのコード管理・再現性のある環境構築を実現",
        "開発・本番環境の整備および社内標準化に貢献",
        "CloudWatchを活用したパイプライン監視設計と障害発生時の調査・復旧対応",
        "運用ドキュメント整備による引き継ぎ・保守コストの低減"
      ]
    }
  },
  {
    en: {
      title: "Support Engineer", company: "Microsoft Japan", period: "Oct 2022 - Aug 2023",
      focus: "Azure App Service Support",
      description: "Technical support for Azure App Service and related cloud services for domestic enterprises",
      keyTechnologies: ["Microsoft Azure", "App Service"],
      achievements: [
        "Handled technical inquiries, investigation, and resolution for Azure App Service from domestic enterprises",
        "Managed incident and failure investigation, recovery support, and escalation response",
        "Documented knowledge gained through support operations to improve knowledge base quality",
        "Contributed to knowledge management frameworks for preventing recurrence and improving efficiency"
      ]
    },
    ja: {
      title: "サポートエンジニア", company: "日本マイクロソフト", period: "2022年10月 - 2023年08月",
      focus: "Azure App Serviceサポート",
      description: "国内企業向けAzure App Serviceおよび関連クラウドサービスのテクニカルサポートを担当",
      keyTechnologies: ["Microsoft Azure", "App Service"],
      achievements: [
        "国内企業向けAzure App Serviceに関する技術問い合わせの調査・回答・解決対応を担当",
        "障害・インシデント発生時の原因調査・復旧支援・エスカレーション対応を実施",
        "サポート対応で得た知見をドキュメント化しナレッジベースの整備・品質向上に貢献",
        "再発防止・対応効率化を目的としたナレッジ蓄積の仕組みづくりに貢献"
      ]
    }
  },
  {
    en: {
      title: "Software Engineer", company: "One Stop Innovation (Freelance)", period: "Sep 2021 - Sep 2024",
      focus: "E-Commerce & Data Analytics Platform",
      description: "End-to-end development and operation of e-commerce system and data analytics platform for major stationery manufacturer",
      keyTechnologies: ["PHP", "Node.js", "MySQL", "WordPress", "AWS", "Terraform", "BI Tools"],
      achievements: [
        "Managed end-to-end development and operation of e-commerce system and analytics platform for major stationery/office equipment manufacturer",
        "Managed e-commerce site operations using WordPress (content updates, product uploads)",
        "Built data analytics infrastructure from scratch including DB design, API integration, and BI dashboard creation",
        "Improved page load time from 15 seconds to 400ms (~97% improvement) through performance tuning",
        "Improved data display time from 100 seconds to 10 seconds (90% improvement) through MySQL query tuning",
        "Introduced Terraform for AWS resource IaC management, enabling reproducibility and change management",
        "Reduced development effort by 50% through IaC adoption"
      ]
    },
    ja: {
      title: "Software Engineer", company: "One Stop Innovation（フリーランス）", period: "2021年09月 - 2024年09月",
      focus: "Eコマース・データ分析基盤",
      description: "大手文具・事務器具メーカー向けEコマースシステムおよびデータ分析基盤の開発・運用を一貫して担当",
      keyTechnologies: ["PHP", "Node.js", "MySQL", "WordPress", "AWS", "Terraform", "BIツール"],
      achievements: [
        "大手文具・事務器具メーカー向けEコマースシステムおよび分析基盤の構築・運用までを一貫して担当",
        "WordPressを使用し、ハンコ会社のEコマースサイト運営を管理（コンテンツ更新・商品アップロード等）",
        "分析基盤のためのデータ基盤をスクラッチで構築、DB設計・API連携およびBIツールを用いたダッシュボード作成を実施",
        "Eコマースサイトのページ表示時間をパフォーマンスチューニングにより15秒 → 400ミリ秒（約97%改善）に大幅改善",
        "MySQLのクエリチューニングによりデータ表示時間を 100秒 → 10秒（90%改善）に改善",
        "TerraformによるAWSリソースのIaC管理を導入し、インフラの再現性・変更管理を実現",
        "IaC化により開発工数を50%削減"
      ]
    }
  },
  {
    en: {
      title: "SRE", company: "Luup (Side Job)", period: "Aug 2021 - Aug 2023",
      focus: "Electric Micro-Mobility Service SRE",
      description: "Product development and SRE for electric micro-mobility service",
      keyTechnologies: ["GCP", "Cloud Logging", "Cloud Monitoring"],
      achievements: [
        "Worked as backend engineer for electric micro-mobility service product development",
        "Continuously implemented feature development and improvements",
        "Designed and built logging infrastructure using Cloud Logging",
        "Designed alert monitoring system using Cloud Monitoring to ensure service stability",
        "Designed SLI/SLO to establish quantitative service quality management and improvement cycles",
        "Contributed as an engineer with both developer and operations perspectives",
        "Gained hands-on experience in reliability design for real-time mobility services"
      ]
    },
    ja: {
      title: "SRE", company: "株式会社Luup（副業）", period: "2021年08月 - 2023年08月",
      focus: "電動マイクロモビリティサービス SRE",
      description: "電動マイクロモビリティサービスのプロダクト開発およびSREを担当",
      keyTechnologies: ["GCP", "Cloud Logging", "Cloud Monitoring"],
      achievements: [
        "電動マイクロモビリティサービスのプロダクト開発をバックエンドエンジニアとして担当",
        "機能開発・改善を継続的に実施",
        "Cloud Loggingを活用したログ基盤の設計・構築を担当",
        "Cloud Monitoringによるアラート設計・監視体制を構築しサービスの安定稼働を実現",
        "SLI/SLOを設計し、サービス品質の定量的な管理・改善サイクルを確立",
        "プロダクト開発とSREを同等に担当し、開発者視点と運用者視点の両方を持つエンジニアとして貢献",
        "リアルタイム性が求められるモビリティサービスにおける信頼性設計の実務経験を習得"
      ]
    }
  },
  {
    en: {
      title: "Backend Engineer", company: "Asial Corporation", period: "Apr 2021 - Dec 2021",
      focus: "New Graduate Recruitment Site Backend",
      description: "Backend development and maintenance of major new graduate recruitment information site (outsourced)",
      keyTechnologies: ["Node.js", "TypeScript", "NestJS", "AWS", "Docker", "Nginx", "Jira"],
      achievements: [
        "Designed and implemented backend of recruitment information site from scratch",
        "Designed, developed, and built RESTful API server",
        "Performed DB schema design and query optimization for performance tuning",
        "Implemented authentication and security features to build secure system infrastructure",
        "Managed defect and incident response for live services",
        "Continuously implemented new features as backend engineer",
        "Promoted task and issue management using Jira"
      ]
    },
    ja: {
      title: "バックエンドエンジニア", company: "アジアル株式会社", period: "2021年04月 - 2021年12月",
      focus: "新卒採用情報サイト バックエンド",
      description: "大手新卒採用情報サイトのバックエンド開発・運用保守（受託）",
      keyTechnologies: ["Node.js", "TypeScript", "NestJS", "AWS", "Docker", "Nginx", "Jira"],
      achievements: [
        "採用情報サイトのバックエンドをゼロから設計・実装",
        "RESTful APIサーバーの設計・開発・構築を担当",
        "DBスキーマ設計およびクエリ最適化・パフォーマンスチューニングを実施",
        "認証機能・セキュリティ実装を担当し、安全なシステム基盤を構築",
        "稼働中サービスの瑕疵対応・障害対応を担当",
        "新機能開発をバックエンドエンジニアとして継続実施",
        "Jiraを活用したタスク・課題管理を推進"
      ]
    }
  },
  {
    en: {
      title: "Executive Director / CTO", company: "T2Lab", period: "Mar 2020 - Feb 2021",
      focus: "IoT Odor Sensor Platform & AWS Cloud Migration",
      description: "Full-stack development of IoT odor visualization platform and AWS cloud migration consulting for enterprise clients",
      keyTechnologies: ["Python", "Node.js", "TypeScript", "React.js", "AWS", "Serverless Framework", "Web Bluetooth API", "Terraform", "Selenium"],
      achievements: [
        "Collected and preprocessed odor data from gas sensors and built ML-based odor classification model",
        "Improved classification accuracy by combining data from multiple sensors",
        "Designed and built IoT integration for real-time data acquisition from odor measurement devices via Web Bluetooth API",
        "Designed, developed, and built client-side using React.js and backend APIs using AWS Serverless (Lambda) and Node.js/TypeScript",
        "Designed and built automated email delivery system",
        "Designed AWS education curriculum from scratch for enterprise cloud migration and provided training",
        "Developed cloud migration automation using Terraform-based IaC and built business system software in Node.js/TypeScript for AWS migration",
        "Implemented RPA and business automation using Selenium",
        "Handled end-to-end upstream project management from estimation to requirements definition, design, and testing"
      ]
    },
    ja: {
      title: "執行役員・CTO", company: "T2Lab", period: "2020年03月 - 2021年02月",
      focus: "IoTニオイセンサープラットフォーム・AWSクラウド移行",
      description: "大手メーカー向けニオイ可視化プラットフォームのフルスタック開発およびクライアント企業向けAWSクラウド移行支援・教育を担当",
      keyTechnologies: ["Python", "Node.js", "TypeScript", "React.js", "AWS", "Serverless Framework", "Web Bluetooth API", "Terraform", "Selenium"],
      achievements: [
        "ガスセンサーから取得したニオイデータの収集・前処理を担当し、機械学習を用いたニオイ判定モデルを構築・実装",
        "複数センサーのデータを組み合わせたニオイの種類・強度の判別精度向上に貢献",
        "Web Bluetooth APIを用いニオイ計測デバイスからリアルタイムでデータ取得するIoT連携機能を設計・開発・構築",
        "React.jsによるクライアントサイドの設計・開発・構築、AWSサーバーレス（Lambda等）によるバックエンドAPI設計・開発・構築",
        "自動メール配信システムの設計・開発・構築",
        "オンプレミスからAWSクラウド移行を目的としたAWS教育カリキュラム・教材をゼロから設計・作成し、クライアント企業のエンジニアを対象に講師として担当",
        "Terraformを用いたIaC構成によるクラウド移行の自動デプロイ設計・開発および業務管理システムのAWS移行向けソフトウェア開発（Node.js/TypeScript）を担当",
        "Seleniumを活用したRPA開発・業務自動化を実装",
        "見積もり・要件定義・設計〜テストまで一連の上流工程を一貫して担当"
      ]
    }
  },
  {
    en: {
      title: "Software Engineer", company: "Micro CAD", period: "Feb 2017 - Jan 2020",
      focus: "IP Management System & Internal Systems Management",
      description: "BtoB intellectual property management system customization and internal IT department management",
      keyTechnologies: ["PHP", "HTML", "JavaScript", "MySQL", "Subversion", "Redmine", "AWS", "Lambda", "DynamoDB", "API Gateway", "Flask", "jQuery"],
      achievements: [
        "Led end-to-end design, development, and testing of customization features for enterprise IP management system (team size: 4-10)",
        "Covered full development lifecycle from basic design and detailed design to test design and execution",
        "Implemented object-oriented design in PHP and designed/developed expense integration feature between enterprise systems",
        "Led new feature proposals, design, development, and architecture",
        "Managed development schedules, team members' tasks, progress, evaluation, and development",
        "Coordinated requirements with parent company and handled ISMS information security management",
        "Developed full-stack attendance management system using AWS (Lambda, DynamoDB, API Gateway, VPC) and Flask/jQuery, released within ~1 month from requirements definition"
      ]
    },
    ja: {
      title: "ソフトウェアエンジニア", company: "株式会社マイクロ・シー・エー・デー", period: "2017年02月 - 2020年01月",
      focus: "知財管理システム・社内システム部門長",
      description: "BtoB向け知財管理システムのカスタマイズ開発・運用保守と社内システム部門の部門長を担当",
      keyTechnologies: ["PHP", "HTML", "JavaScript", "MySQL", "Subversion", "Redmine", "AWS", "Lambda", "DynamoDB", "API Gateway", "Flask", "jQuery"],
      achievements: [
        "企業向けカスタマイズ機能・機能拡張の設計〜開発〜テストを一貫して担当（チーム規模：4〜10名）",
        "基本設計・詳細設計からテスト設計書の作成・実施まで上流〜下流を網羅、PHPによるオブジェクト指向設計・実装",
        "企業向け経費システムと知財管理システムの経費機能連携機能を設計・開発、新機能の提案〜設計・開発・構築をリード",
        "開発スケジュールの計画・進捗管理および部門メンバーのタスク管理・進捗管理・評価・育成を担当",
        "予算・コスト管理を含む部門運営を統括し、親会社との要件調整・折衝を担い社内外の橋渡し役を担当",
        "社内ISMSの情報セキュリティ領域を担当し、関係部門へのインタビュー実施・情報収集・ドキュメント整備を推進",
        "AWS（Lambda / DynamoDB / API Gateway / VPC）＋Flask / jQueryによるフルスタック勤怠管理システムを担当し、要件定義から約1ヶ月という短期間でリリースを実現"
      ]
    }
  },
  {
    en: {
      title: "Infrastructure Engineer", company: "Xincor miXell", period: "Apr 2015 - Feb 2017",
      focus: "Network Infrastructure",
      description: "Network infrastructure configuration and construction for major telecommunications company",
      keyTechnologies: ["Linux", "RedHat", "VBScript"],
      achievements: [
        "Configured L3 switch and router settings and initial infrastructure for major telecommunications company (team size: 2-5)",
        "Implemented enterprise routing configuration and DNS zone configuration and setup",
        "Performed server and network equipment configuration via Linux (RedHat) command line",
        "Analyzed daily manual routine tasks and independently developed automation tool using VBScript",
        "Automated data retrieval and Excel recording workflow, reducing work time by 50%+"
      ]
    },
    ja: {
      title: "インフラエンジニア", company: "株式会社シンカー・ミクセル", period: "2015年04月 - 2017年02月",
      focus: "ネットワークインフラ",
      description: "大手通信企業向けネットワークインフラの設定・構築業務を担当",
      keyTechnologies: ["Linux", "RedHat", "VBScript"],
      achievements: [
        "大手通信企業のL3スイッチ・ルーターの設定変更・初期構築を担当（チーム規模：2〜5名）",
        "企業向けルーティング設定・構築およびDNS（ゾーン設定・初期構築）の設計・構築を担当",
        "Linux（RedHat）コマンドラインによるサーバー・ネットワーク機器の設定作業を実施",
        "毎日発生していた手動定期作業を業務分析し、VBScriptによる自動化ツールを独自に開発",
        "特定サイトからのデータ取得〜Excel転記作業を自動化し、作業時間を50%以上削減"
      ]
    }
  }
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ecommerce",
    en: {
      title: "E-Commerce Platform",
      description: "Modern e-commerce platform design focusing on user experience and conversion optimization with full-stack development",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redux"],
      impact: "Improved conversion rates by 35%, reduced cart abandonment by 25%",
      period: "2023 - 2024"
    },
    ja: {
      title: "Eコマースプラットフォーム",
      description: "ユーザーエクスペリエンスとコンバージョン最適化に焦点を当てたモダンなEコマースプラットフォームのフルスタック開発",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redux"],
      impact: "コンバージョン率35%向上、カート放棄率25%削減",
      period: "2023年 - 2024年"
    },
    icon: "mdi:shopping",
    color: "green"
  },
  {
    id: "jma-systems",
    en: {
      title: "JMA Systems - Data Analytics Platform",
      description: "AWS-based sales data analytics platform for major manufacturers with ETL pipelines and real-time monitoring",
      technologies: ["AWS", "Python", "PySpark", "Redshift", "Glue", "Lambda"],
      impact: "80% faster deployments, 50% dev effort reduction",
      period: "2024 - Present"
    },
    ja: {
      title: "JMA Systems - データ分析プラットフォーム",
      description: "大手メーカーのためのAWSベース売上データ分析プラットフォーム。ETLパイプラインとリアルタイム監視機能付き",
      technologies: ["AWS", "Python", "PySpark", "Redshift", "Glue", "Lambda"],
      impact: "デプロイ時間80%短縮、開発工数50%削減",
      period: "2024年 - 現在"
    },
    icon: "mdi:chart-line",
    color: "blue"
  },
  {
    id: "techdoctor",
    en: {
      title: "TechDoctor - Healthcare Platform",
      description: "Digital biomarker development platform using FastAPI and AWS with comprehensive testing and documentation",
      technologies: ["Python", "FastAPI", "AWS", "MySQL", "Docker", "GraphQL"],
      impact: "0% to 80% test coverage, eliminated knowledge silos",
      period: "2023"
    },
    ja: {
      title: "TechDoctor - ヘルスケアプラットフォーム",
      description: "FastAPIとAWSを使用したデジタルバイオマーカー開発プラットフォーム。包括的なテストとドキュメント付き",
      technologies: ["Python", "FastAPI", "AWS", "MySQL", "Docker", "GraphQL"],
      impact: "テストカバレッジ0%から80%に向上、知識のサイロ化を解消",
      period: "2023年"
    },
    icon: "mdi:medical-bag",
    color: "emerald"
  }
];

export const getKeyAchievements = (currentLang: string): KeyAchievement[] => {
  const content = softwareContent[currentLang as keyof typeof softwareContent];
  return [
    { metric: "80%", description: content.achievements.deployments, icon: "🚀" },
    { metric: "50%", description: content.achievements.effort, icon: "⚡" },
    { metric: "400ms", description: content.achievements.loadTime, icon: "⚡" },
    { metric: "10+", description: content.achievements.experience, icon: "💼" }
  ];
};

export const getCoreExpertise = (currentLang: string): CoreExpertise[] => {
  const content = softwareContent[currentLang as keyof typeof softwareContent];
  return [
    {
      category: content.coreExpertise.cloud.title,
      description: content.coreExpertise.cloud.description,
      technologies: ["AWS", "GCP", "Azure", "Terraform", "Docker"],
      color: "blue", icon: "mdi:cloud", iconColor: "text-blue-500"
    },
    {
      category: content.coreExpertise.languages.title,
      description: content.coreExpertise.languages.description,
      technologies: ["Python", "TypeScript", "JavaScript", "PHP"],
      color: "emerald", icon: "mdi:code-braces", iconColor: "text-emerald-500"
    },
    {
      category: content.coreExpertise.frameworks.title,
      description: content.coreExpertise.frameworks.description,
      technologies: ["FastAPI", "React", "WordPress", "MySQL"],
      color: "violet", icon: "mdi:puzzle", iconColor: "text-violet-500"
    },
    {
      category: content.coreExpertise.tools.title,
      description: content.coreExpertise.tools.description,
      technologies: ["GitHub", "Slack", "Backlog", "GraphQL"],
      color: "rose", icon: "mdi:tools", iconColor: "text-rose-500"
    }
  ];
};
