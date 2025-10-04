'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import SoftwareProjectLayout from '@/components/pages/SoftwareProjectLayout';

export default function EcommerceProjectPage() {
  const [currentLang, setCurrentLang] = useState<"en" | "ja">("ja");
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslations('ja');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!t) return null;

  const ecommerce = t.software.ecommerce;

  return (
    <SoftwareProjectLayout
      currentLang={currentLang}
      setCurrentLang={(lang: string) => setCurrentLang(lang as "en" | "ja")}
      isLoaded={isLoaded}
      currentData={ecommerce as any}
      imageSrc="/projects/ecommerce/dashboard.png"
      imageAlt="E-commerce Platform Design"
      accentColors={{
        from: 'green-400',
        via: 'emerald-400',
        to: 'blue-400'
      }}
    />
  );
}
