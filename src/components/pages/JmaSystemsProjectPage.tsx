'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import SoftwareProjectLayout from '@/components/pages/SoftwareProjectLayout';

export default function JMASystemsProjectPage() {
  const [currentLang, setCurrentLang] = useState<"en" | "ja">("ja");
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslations('ja');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!t) return null;

  const jmaSystems = t.software.jmaSystems;

  return (
    <SoftwareProjectLayout
      currentLang={currentLang}
      setCurrentLang={(lang: string) => setCurrentLang(lang as "en" | "ja")}
      isLoaded={isLoaded}
      currentData={jmaSystems as any}
      imageSrc="/projects/jma/dashboard.png"
      imageAlt="JMA Systems Data Analytics Platform"
      accentColors={{
        from: 'blue-400',
        via: 'cyan-400',
        to: 'indigo-400'
      }}
    />
  );
}
