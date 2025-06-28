/**
 * Common interfaces for software project pages
 */

export interface TechnicalDetail {
  title: string;
  description: string;
  technologies: string[];
}

export interface PerformanceMetric {
  label: string;
  value: string;
  improvement: string;
}

export interface PerformanceData {
  title: string;
  metrics: PerformanceMetric[];
}

export interface ProjectContent {
  title: string;
  subtitle: string;
  role: string;
  tools: string;
  duration: string;
  overview: string;
  finalSolution: string;
  keyFeatures: string[];
  technicalDetails: {
    frontend: TechnicalDetail;
    backend: TechnicalDetail;
    infrastructure: TechnicalDetail;
  };
  performance: PerformanceData;
  back: string;
  nextProject: string;
  nextProjectLink: string;
}

export interface SoftwareProjectData {
  id: string;
  en: ProjectContent;
  ja: ProjectContent;
  image: string;
}