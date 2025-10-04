/**
 * Common interfaces for UI/UX project pages
 */

export interface ProjectPageData {
  currentLang: "en" | "ja";
  setCurrentLang: (lang: "en" | "ja") => void;
  isLoaded: boolean;
}

export interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  isLoaded?: boolean;
}

export interface ProjectSectionProps {
  title: string;
  text: string;
}

export interface BeforeAfterImages {
  before: string;
  after: string;
}
