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

// home コンテンツの実データは content/home.yml に移動（型は本ファイルで定義）。

export const softwareProjects = [
  { name: "JMA Systems", desc: "Data Analytics Platform", tags: ["AWS", "Python", "PySpark"] },
  { name: "TechDoctor", desc: "Healthcare Platform", tags: ["Python", "FastAPI", "AWS"] },
  { name: "One Stop Innovation", desc: "E-commerce & Analytics", tags: ["PHP", "WordPress", "Terraform"] }
] as const;

export const uiuxProjects = [
  { name: "Six Acres Restaurant", desc: "Website Redesign", tags: ["Figma", "User Research", "Prototyping"] },
  { name: "Task Management System", desc: "Design Sprint Project", tags: ["Design Sprint", "Figma", "User Testing"] }
] as const;
