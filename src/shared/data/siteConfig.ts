/**
 * Site configuration and metadata used across the application
 */

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  navigation: {
    home: string;
    software: string;
    uiux: string;
    contact: string;
  };
  languages: {
    en: string;
    ja: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Kento Yokozuka Portfolio",
  description: "Software Engineer & UI/UX Designer Portfolio",
  url: "https://kentoyokozuka.com",
  author: "Kento Yokozuka",
  email: "kento.yokozuka@example.com",
  social: {
    github: "https://github.com/kentoyokozuka",
    linkedin: "https://linkedin.com/in/kentoyokozuka",
    twitter: "https://twitter.com/kentoyokozuka"
  },
  navigation: {
    home: "Home",
    software: "Software",
    uiux: "UI/UX",
    contact: "Contact"
  },
  languages: {
    en: "English",
    ja: "日本語"
  }
};

export const metaData = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "UI/UX Designer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Portfolio"
  ],
  author: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@kentoyokozuka"
  }
};