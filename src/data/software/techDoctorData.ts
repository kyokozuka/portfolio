import { SoftwareProjectData } from '@/types/softwareProjects';

export const techDoctorData: SoftwareProjectData = {
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
    },
    back: "Back to Software Projects",
    nextProject: "E-Commerce Platform",
    nextProjectLink: "/software/ecommerce"
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
    },
    back: "ソフトウェアプロジェクトに戻る",
    nextProject: "Eコマースプラットフォーム",
    nextProjectLink: "/software/ecommerce"
  },
  image: "/projects/techdoctor/healthcare-platform.jpg"
};