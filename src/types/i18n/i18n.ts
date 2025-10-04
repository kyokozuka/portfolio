

export interface Project {
  name: string;
  description: string;
  tags: string[];
}

export interface HomeTranslations {
  title: string;
  subtitle: string;
  description: string;
  achievements: {
    deployments: string;
    effort: string;
    loadTime: string;
    experience: string;
  };
  resume: {
    button: string;
    download: string;
  };
  software: {
    title: string;
    description: string;
    skills: string[];
  };
  uiux: {
    title: string;
    description: string;
    skills: string[];
  };
  about: {
    title: string;
    experience: {
      title: string;
      content: string;
    };
    philosophy: {
      title: string;
      content: string;
    };
  };
  highlights: {
    title: string;
    software: string;
    uiux: string;
  };
  projects: {
    software: Project[];
    uiux: Project[];
  };
  images: {
    profile: string;
    profileAlt: string;
    backgroundAlt: string;
  };
  links: {
    resume: string;
  };
}

export interface TechnicalSkillsTranslations {
  categories: {
    cloudInfrastructure: string;
    programmingLanguages: string;
    frameworksTools: string;
    databasesAnalytics: string;
    developmentTools: string;
  };
  levels: {
    expert: string;
    advanced: string;
    intermediate: string;
    beginner: string;
  };
}

// UI/UX Project Types
export interface UIUXProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tools: string[];
  color: string;
}

export interface UIUXSkill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export interface UIUXExperience {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  color: string;
}

export interface UIUXAcademicProject {
  title: string;
  description: string;
  tools: string[];
  status: string;
  color: string;
}

export interface AchievyTranslations {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  background: {
    title: string;
    text: string;
  };
  research: {
    title: string;
    text: string;
  };
  insight: {
    title: string;
    text: string;
    hmw: string[];
  };
  ideation: {
    title: string;
    text: string;
  };
  design: {
    title: string;
    text: string;
  };
  testing: {
    title: string;
    text: string;
  };
  result: {
    title: string;
    text: string;
  };
  quote: string;
}

export interface BeforeAfter {
  before: string;
  after: string;
}

export interface SixAcresTranslations {
  title: string;
  subtitle: string;
  role: string;
  tools: string;
  duration: string;
  finalSolution: string;
  beforeAfter: {
    welcome: BeforeAfter;
    menu: BeforeAfter;
    event: BeforeAfter;
    reservation: BeforeAfter;
    contact: BeforeAfter;
  };
  process: {
    tasks: string[];
    findingsGood: string[];
    findingsBad: string[];
    styleGuide: {
      typography: string;
      colors: string;
      buttons: string;
    };
    wireframe: string;
  };
  reflection: string[];
  back: string;
  imageCredit: string;
}

export interface UIUXPageTranslations {
  title: string;
  subtitle: string;
  description: string;
  contact: string;
  projects: UIUXProject[];
  skills: UIUXSkill[];
  experience: UIUXExperience[];
  academicProjects: UIUXAcademicProject[];
  categoryColors: Record<string, string>;
}

// Software Page Types
export interface KeyAchievement {
  icon: string;
  metric: string;
  description: string;
}

export interface CoreExpertise {
  icon: string;
  iconColor: string;
  color: string;
  category: string;
  description: string;
  technologies: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  focus: string;
  period: string;
  description: string;
  keyTechnologies: string[];
  achievements: string[];
}

export interface Experience {
  en: ExperienceItem;
  ja: ExperienceItem;
}

export interface FeaturedProjectItem {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  impact: string;
}

export interface FeaturedProject {
  id: string;
  icon: string;
  color: string;
  en: FeaturedProjectItem;
  ja: FeaturedProjectItem;
}

export interface SoftwarePageTranslations {
  title: string;
  description: string;
  coreExpertise: {
    title: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
    showMore: string;
    showLess: string;
  };
  projects: {
    title: string;
  };
  keyAchievements: KeyAchievement[];
  coreExpertiseList: CoreExpertise[];
  experienceList: Experience[];
  featuredProjects: FeaturedProject[];
}

// Software Project Types
export interface PerformanceMetric {
  label: string;
  value: string;
  improvement: string;
}

export interface TechnicalDetail {
  title: string;
  description: string;
  technologies: string[];
}


