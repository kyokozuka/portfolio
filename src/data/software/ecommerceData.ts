import { SoftwareProjectData } from '@/types/softwareProjects';

export const ecommerceData: SoftwareProjectData = {
  id: "ecommerce",
  en: {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Development & Performance Optimization",
    role: "Full-Stack Software Engineer",
    tools: "React, Node.js, MongoDB, AWS, Stripe, Redux",
    duration: "6 Months",
    overview: "A comprehensive e-commerce platform built with modern technologies, focusing on performance optimization, scalability, and user experience. The project involved full-stack development with microservices architecture.",
    finalSolution: "A high-performance e-commerce platform featuring real-time inventory management, secure payment processing, and personalized user experience. Achieved 35% improvement in conversion rates and 25% reduction in cart abandonment.",
    keyFeatures: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Personalized product recommendations",
      "Mobile-first responsive design",
      "Microservices architecture",
      "Performance optimization"
    ],
    technicalDetails: {
      frontend: {
        title: "Frontend Technologies",
        description: "React-based SPA with Redux for state management and Material-UI for components",
        technologies: ["React 18", "Redux Toolkit", "Material-UI", "TypeScript", "Axios"]
      },
      backend: {
        title: "Backend Technologies",
        description: "Node.js microservices with Express.js and MongoDB for data persistence",
        technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Multer"]
      },
      infrastructure: {
        title: "Infrastructure & DevOps",
        description: "AWS-based infrastructure with CI/CD pipeline and monitoring",
        technologies: ["AWS EC2", "AWS S3", "Docker", "GitHub Actions", "CloudWatch"]
      }
    },
    performance: {
      title: "Performance Metrics",
      metrics: [
        { label: "Page Load Time", value: "< 2 seconds", improvement: "60% faster" },
        { label: "Conversion Rate", value: "35% improvement", improvement: "vs previous platform" },
        { label: "Cart Abandonment", value: "25% reduction", improvement: "vs industry average" },
        { label: "Uptime", value: "99.9%", improvement: "High availability" }
      ]
    },
    back: "Back to Software Projects",
    nextProject: "Data Analytics Platform",
    nextProjectLink: "/software/jma-systems"
  },
  ja: {
    title: "Eコマースプラットフォーム",
    subtitle: "フルスタック開発とパフォーマンス最適化",
    role: "フルスタックソフトウェアエンジニア",
    tools: "React, Node.js, MongoDB, AWS, Stripe, Redux",
    duration: "6ヶ月",
    overview: "モダンな技術を使用した包括的なEコマースプラットフォーム。パフォーマンス最適化、スケーラビリティ、ユーザーエクスペリエンスに焦点を当て、マイクロサービスアーキテクチャによるフルスタック開発を実施。",
    finalSolution: "リアルタイム在庫管理、安全な決済処理、パーソナライズされたユーザーエクスペリエンスを特徴とする高性能Eコマースプラットフォーム。コンバージョン率35%向上、カート放棄率25%削減を達成。",
    keyFeatures: [
      "リアルタイム在庫管理",
      "Stripeによる安全な決済処理",
      "パーソナライズされた商品推奨",
      "モバイルファーストのレスポンシブデザイン",
      "マイクロサービスアーキテクチャ",
      "パフォーマンス最適化"
    ],
    technicalDetails: {
      frontend: {
        title: "フロントエンド技術",
        description: "Reduxによる状態管理とMaterial-UIコンポーネントを使用したReactベースのSPA",
        technologies: ["React 18", "Redux Toolkit", "Material-UI", "TypeScript", "Axios"]
      },
      backend: {
        title: "バックエンド技術",
        description: "Express.jsとMongoDBを使用したNode.jsマイクロサービス",
        technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Multer"]
      },
      infrastructure: {
        title: "インフラストラクチャとDevOps",
        description: "CI/CDパイプラインと監視機能を備えたAWSベースのインフラ",
        technologies: ["AWS EC2", "AWS S3", "Docker", "GitHub Actions", "CloudWatch"]
      }
    },
    performance: {
      title: "パフォーマンス指標",
      metrics: [
        { label: "ページ読み込み時間", value: "< 2秒", improvement: "60%高速化" },
        { label: "コンバージョン率", value: "35%向上", improvement: "前プラットフォーム比" },
        { label: "カート放棄率", value: "25%削減", improvement: "業界平均比" },
        { label: "稼働率", value: "99.9%", improvement: "高可用性" }
      ]
    },
    back: "ソフトウェアプロジェクトに戻る",
    nextProject: "データ分析プラットフォーム",
    nextProjectLink: "/software/jma-systems"
  },
  image: "projects/ecommerce/EcommerceImage.jpg"
};