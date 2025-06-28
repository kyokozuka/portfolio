/**
 * Six Acres project specific interfaces
 */

export interface BeforeAfterImages {
  before: string;
  after: string;
}

export interface ProcessData {
  tasks: string[];
  findingsGood: string[];
  findingsBad: string[];
  styleGuide: {
    typography: string;
    colors: string;
    buttons: string;
  };
  wireframe: string;
}

export interface SixAcresContent {
  title: string;
  subtitle: string;
  role: string;
  tools: string;
  duration: string;
  finalSolution: string;
  beforeAfter: {
    welcome: BeforeAfterImages;
    menu: BeforeAfterImages;
    event: BeforeAfterImages;
    reservation: BeforeAfterImages;
    contact: BeforeAfterImages;
  };
  process: ProcessData;
  reflection: string[];
  back: string;
  imageCredit: string;
}

export interface SixAcresData {
  en: SixAcresContent;
  ja: SixAcresContent;
}