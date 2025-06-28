import { SoftwareProjectData } from '@/types/softwareProjects';

export const jmaSystemsData: SoftwareProjectData = {
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
    },
    back: "Back to Software Projects",
    nextProject: "Healthcare Platform",
    nextProjectLink: "/software/techdoctor"
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
    },
    back: "ソフトウェアプロジェクトに戻る",
    nextProject: "ヘルスケアプラットフォーム",
    nextProjectLink: "/software/techdoctor"
  },
  image: "/projects/jma-systems/analytics-platform.jpg"
};