import { promises as fs, readFileSync } from 'fs';
import path from 'path';
import YAML from 'yaml';
import { ResumeData } from './resume.types';

/**
 * Load resume data from YAML file
 * Used at build time or server-side only (not in browser)
 */
export async function loadResume(): Promise<ResumeData> {
  const filePath = path.join(process.cwd(), 'src/data/resume.yaml');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = YAML.parse(fileContent) as ResumeData;
  return data;
}

/**
 * Load resume data synchronously (use sparingly)
 * Useful for static generation but avoid in server functions
 */
export function loadResumeSync(): ResumeData {
  const filePath = path.join(process.cwd(), 'src/data/resume.yaml');
  const fileContent = readFileSync(filePath, 'utf-8');
  const data = YAML.parse(fileContent) as ResumeData;
  return data;
}
