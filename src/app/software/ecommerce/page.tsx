'use client';

import { SoftwareProjectPage } from '@/features/software/ui';
import { ecommerceData } from '@/features/software/data';

export default function EcommerceProjectPage() {
  return <SoftwareProjectPage projectData={ecommerceData} />;
}
