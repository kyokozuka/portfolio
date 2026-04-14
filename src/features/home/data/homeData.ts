export interface HomeAchievements {
  deployments: string;
  effort: string;
  loadTime: string;
  experience: string;
}

export interface HomeRole {
  title: string;
  description: string;
  skills: string[];
}

export interface HomeAboutSection {
  title: string;
  content: string;
}

export interface HomeAbout {
  title: string;
  experience: HomeAboutSection;
  philosophy: HomeAboutSection;
}

export interface HomeHighlights {
  title: string;
  software: string;
  uiux: string;
}

export interface HomeContent {
  title: string;
  subtitle: string;
  description: string;
  achievements: HomeAchievements;
  resume: {
    button: string;
    download: string;
  };
  software: HomeRole;
  uiux: HomeRole;
  about: HomeAbout;
  highlights: HomeHighlights;
}

export const homeContent: Record<string, HomeContent> = {
  en: {
    title: "Kento Yokozuka",
    subtitle: "Software Engineer & UI/UX Designer",
    description: "Passionate technologist with 8+ years of experience building scalable cloud infrastructure and creating intuitive user experiences. Specialized in AWS, Python, and modern design practices with a proven track record of delivering measurable business impact.",
    achievements: {
      deployments: "Faster Deployments",
      effort: "Dev Effort Reduction",
      loadTime: "Page Load Time",
      experience: "Years Experience"
    },
    resume: {
      button: "View Resume",
      download: "Download PDF"
    },
    software: {
      title: "Software Engineer",
      description: "Full-stack development, cloud infrastructure, data analytics platforms, and DevOps practices. Experience with major manufacturers and healthcare systems.",
      skills: ["AWS", "Python", "TypeScript", "React", "Terraform"]
    },
    uiux: {
      title: "UI/UX Designer",
      description: "User-centered design thinking, design sprints, prototyping, and usability testing. Creating intuitive digital experiences through research-driven design.",
      skills: ["Figma", "Design Sprints", "User Research", "Prototyping", "Design Systems"]
    },
    about: {
      title: "About Me",
      experience: {
        title: "Professional Journey",
        content: "With 8+ years of software engineering experience, I've led development teams at major manufacturers, healthcare platforms, and e-commerce systems. Recently expanded into UI/UX design, completing design sprints and creating user-centered solutions."
      },
      philosophy: {
        title: "Design Philosophy",
        content: "I believe in the power of user-centered design combined with technical excellence. Whether building infrastructure or designing interfaces, I focus on creating solutions that are both beautiful and functional, scalable and maintainable."
      }
    },
    highlights: {
      title: "Recent Projects",
      software: "Software Engineering",
      uiux: "UI/UX Design"
    }
  },
  ja: {
    title: "横塚 健人",
    subtitle: "ソフトウェアエンジニア & UI/UXデザイナー",
    description: "8年以上の経験を持つ情熱的な技術者。スケーラブルなクラウドインフラの構築と直感的なユーザー体験の創造を専門としています。AWS、Python、モダンなデザインプラクティスに特化し、測定可能なビジネスインパクトを提供する実績があります。",
    achievements: {
      deployments: "デプロイ時間短縮",
      effort: "開発工数削減",
      loadTime: "ページ読み込み時間",
      experience: "年経験"
    },
    resume: {
      button: "履歴書を見る",
      download: "PDFをダウンロード"
    },
    software: {
      title: "ソフトウェアエンジニア",
      description: "フルスタック開発、クラウドインフラ、データ分析プラットフォーム、DevOpsプラクティス。大手メーカーやヘルスケアシステムでの経験があります。",
      skills: ["AWS", "Python", "TypeScript", "React", "Terraform"]
    },
    uiux: {
      title: "UI/UXデザイナー",
      description: "ユーザー中心のデザイン思考、デザインスプリント、プロトタイピング、ユーザビリティテスト。リサーチ駆動のデザインによる直感的なデジタル体験の創造。",
      skills: ["Figma", "デザインスプリント", "ユーザーリサーチ", "プロトタイピング", "デザインシステム"]
    },
    about: {
      title: "私について",
      experience: {
        title: "専門的な歩み",
        content: "8年以上のソフトウェアエンジニアリング経験を持ち、大手メーカー、ヘルスケアプラットフォーム、Eコマースシステムで開発チームを率いてきました。最近はUI/UXデザインにも拡張し、デザインスプリントを完了し、ユーザー中心のソリューションを作成しています。"
      },
      philosophy: {
        title: "デザイン哲学",
        content: "ユーザー中心のデザインと技術的卓越性の力を信じています。インフラを構築するにしても、インターフェースをデザインするにしても、美しく機能的で、スケーラブルで保守性の高いソリューションの作成に焦点を当てています。"
      }
    },
    highlights: {
      title: "最近のプロジェクト",
      software: "ソフトウェアエンジニアリング",
      uiux: "UI/UXデザイン"
    }
  }
};

export const softwareProjects = [
  { name: "JMA Systems", desc: "Data Analytics Platform", tags: ["AWS", "Python", "PySpark"] },
  { name: "TechDoctor", desc: "Healthcare Platform", tags: ["Python", "FastAPI", "AWS"] },
  { name: "One Stop Innovation", desc: "E-commerce & Analytics", tags: ["PHP", "WordPress", "Terraform"] }
] as const;

export const uiuxProjects = [
  { name: "Six Acres Restaurant", desc: "Website Redesign", tags: ["Figma", "User Research", "Prototyping"] },
  { name: "Task Management System", desc: "Design Sprint Project", tags: ["Design Sprint", "Figma", "User Testing"] }
] as const;
