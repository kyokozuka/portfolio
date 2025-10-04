import {
  TechnicalDetail,
  PerformanceMetric,
  HomeTranslations,
  TechnicalSkillsTranslations,
  SoftwarePageTranslations,
  UIUXPageTranslations,
  AchievyTranslations,
  SixAcresTranslations,
} from '@/types/i18n/i18n';
import ContactTranslations from '@/types/i18n/contact';
import RoutesTranslations from '@/types/i18n/routeTranslations';
import FooterTranslations from '@/types/i18n/footer';

export interface SoftwareProjectTranslations {
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
  performance: {
    title: string;
    metrics: PerformanceMetric[];
  };
  back: string;
  nextProject: string;
  nextProjectLink: string;
}

export interface Translations {
  routes: RoutesTranslations;
  home: HomeTranslations;
  contact: ContactTranslations;
  technicalSkills: TechnicalSkillsTranslations;
  softwarePage: SoftwarePageTranslations;
  uiux: {
    page: UIUXPageTranslations;
    achievy: AchievyTranslations;
    sixAcres: SixAcresTranslations;
  };
  software: {
    ecommerce: SoftwareProjectTranslations;
    jmaSystems: SoftwareProjectTranslations;
    techDoctor: SoftwareProjectTranslations;
  };
  footer: FooterTranslations;
}