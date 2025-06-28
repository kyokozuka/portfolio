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
      cloud: {
        title: string;
        description: string;
      };
      languages: {
        title: string;
        description: string;
      };
      frameworks: {
        title: string;
        description: string;
      };
      tools: {
        title: string;
        description: string;
      };
    };
    experience: {
      title: string;
      showMore: string;
      showLess: string;
    };
    skills: {
      title: string;
    };
    projects: {
      title: string;
    };
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
      cloud: {
        title: string;
        description: string;
      };
      languages: {
        title: string;
        description: string;
      };
      frameworks: {
        title: string;
        description: string;
      };
      tools: {
        title: string;
        description: string;
      };
    };
    experience: {
      title: string;
      showMore: string;
      showLess: string;
    };
    skills: {
      title: string;
    };
    projects: {
      title: string;
    };
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
    {
      metric: "80%",
      description: content.achievements.deployments,
      icon: "🚀"
    },
    {
      metric: "50%",
      description: content.achievements.effort,
      icon: "⚡"
    },
    {
      metric: "400ms",
      description: content.achievements.loadTime,
      icon: "⚡"
    },
    {
      metric: "8+",
      description: content.achievements.experience,
      icon: "💼"
    }
  ];
};

export const getCoreExpertise = (currentLang: string): CoreExpertise[] => {
  const content = softwareContent[currentLang as keyof typeof softwareContent];
  return [
    {
      category: content.coreExpertise.cloud.title,
      description: content.coreExpertise.cloud.description,
      technologies: ["AWS", "GCP", "Azure", "Terraform", "Docker"],
      color: "blue",
      icon: "mdi:cloud",
      iconColor: "text-blue-500"
    },
    {
      category: content.coreExpertise.languages.title,
      description: content.coreExpertise.languages.description,
      technologies: ["Python", "TypeScript", "JavaScript", "PHP"],
      color: "emerald",
      icon: "mdi:code-braces",
      iconColor: "text-emerald-500"
    },
    {
      category: content.coreExpertise.frameworks.title,
      description: content.coreExpertise.frameworks.description,
      technologies: ["FastAPI", "React", "WordPress", "MySQL"],
      color: "violet",
      icon: "mdi:puzzle",
      iconColor: "text-violet-500"
    },
    {
      category: content.coreExpertise.tools.title,
      description: content.coreExpertise.tools.description,
      technologies: ["GitHub", "Slack", "Backlog", "GraphQL"],
      color: "rose",
      icon: "mdi:tools",
      iconColor: "text-rose-500"
    }
  ];
};