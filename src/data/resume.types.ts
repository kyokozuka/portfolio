/**
 * TypeScript type definitions for resume data
 * Generated from src/data/resume.yaml
 */

export interface ResumePeriod {
  start: string; // YYYY-MM or YYYY
  end: string; // YYYY-MM or YYYY
}

export interface ResumeExperience {
  company: string;
  position: string;
  period: ResumePeriod;
  description: string;
  technologies: string[];
  impact?: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  field: string;
  period?: ResumePeriod;
}

export interface ResumeProject {
  name: string;
  description: string;
  tags: string[];
}

export interface ResumeProjects {
  software_engineering: ResumeProject[];
  uiux_design: ResumeProject[];
}

export interface ResumeSkills {
  software_engineering: string[];
  uiux_design: string[];
}

export interface ResumePersonal {
  name: string;
  title: string;
  summary: string;
}

export interface ResumeData {
  personal: ResumePersonal;
  experience: ResumeExperience[];
  skills: ResumeSkills;
  education: ResumeEducation[];
  projects: ResumeProjects;
  philosophy: {
    design: string;
  };
  achievements: {
    years_experience: string;
    key_metrics: string[];
  };
}
