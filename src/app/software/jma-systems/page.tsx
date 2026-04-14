'use client';

import { SoftwareProjectPage } from '@/features/software/ui';
import { jmaSystemsData } from '@/features/software/data';

export default function JMASystemsPage() {
  return <SoftwareProjectPage projectData={jmaSystemsData} />;
}
