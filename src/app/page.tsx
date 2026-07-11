'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

// output: 'export' では middleware が使えないため、ルート / はクライアントで
// デフォルトロケール（/en）へリダイレクトする。
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return null;
}
