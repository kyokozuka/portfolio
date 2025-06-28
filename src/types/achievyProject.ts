/**
 * Achievy project specific interfaces
 */

export interface AchievySection {
  title: string;
  text: string;
}

export interface AchievyInsight extends AchievySection {
  hmw: string[];
}

export interface AchievyContent {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  background: AchievySection;
  research: AchievySection;
  insight: AchievyInsight;
  ideation: AchievySection;
  design: AchievySection;
  testing: AchievySection;
  result: AchievySection;
  quote: string;
}

export interface AchievyData {
  en: AchievyContent;
  ja: AchievyContent;
}