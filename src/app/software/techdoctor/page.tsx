'use client';

import { SoftwareProjectPage } from '@/features/software/ui';
import { techDoctorData } from '@/features/software/data';

export default function TechDoctorPage() {
  return <SoftwareProjectPage projectData={techDoctorData} />;
}
