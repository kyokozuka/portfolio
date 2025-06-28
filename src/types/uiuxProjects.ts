/**
 * Common interfaces for UI/UX project pages
 */

export interface UIUXProjectContent {
  title: string;
  subtitle: string;
  role: string;
  tools: string;
  duration: string;
  finalSolution: string;
  back: string;
  imageCredit?: string;
}

export interface UIUXProjectData {
  id: string;
  en: UIUXProjectContent;
  ja: UIUXProjectContent;
  image: string;
}