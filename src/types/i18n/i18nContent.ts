/**
 * Common interfaces for i18n content structure
 */

// Common project content structure
export interface LocalizedContent<T> {
  en: T;
  ja: T;
}

// Hero section
export interface HeroSection {
  title: string;
  subtitle: string;
  tagline?: string;
}

// Text section with title and content
export interface TextSection {
  title: string;
  text: string;
}

// Project metadata
export interface ProjectMetadata {
  role: string;
  tools: string;
  duration: string;
}

// UI/UX Project specific types
export interface UIUXProjectContent extends ProjectMetadata {
  title: string;
  subtitle: string;
  finalSolution: string;
  back: string;
}

// Software Project specific types
export interface SoftwareProjectContent extends ProjectMetadata {
  title: string;
  subtitle: string;
  overview: string;
  finalSolution: string;
  keyFeatures: string[];
  back: string;
  nextProject: string;
  nextProjectLink: string;
}

// Technical detail structure
export interface TechnicalDetail {
  title: string;
  description: string;
  technologies: string[];
}

// Performance metric structure
export interface PerformanceMetric {
  label: string;
  value: string;
  improvement: string;
}

// Performance data structure
export interface PerformanceData {
  title: string;
  metrics: PerformanceMetric[];
}

// Before/After images
export interface BeforeAfterImages {
  before: string;
  after: string;
}

// Page content structure
export interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  contact?: string;
}
