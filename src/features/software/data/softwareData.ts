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

