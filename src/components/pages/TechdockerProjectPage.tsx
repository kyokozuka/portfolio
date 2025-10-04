"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import SoftwareProjectLayout from '@/components/pages/SoftwareProjectLayout';

export default function TechDoctorProjectPage() {
  const [currentLang, setCurrentLang] = useState<"en" | "ja">("ja");
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslations('ja');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!t) return null;

  const techDoctor = t.software.techDoctor;

  return (
    <SoftwareProjectLayout
      currentLang={currentLang}
      setCurrentLang={(lang: string) => setCurrentLang(lang as "en" | "ja")}
      isLoaded={isLoaded}
      currentData={techDoctor as any}
      imageSrc="/projects/techdoctor/dashboard.png"
      imageAlt="TechDoctor Healthcare Platform"
      accentColors={{
        from: 'purple-400',
        via: 'pink-400',
        to: 'red-400'
      }}
    />
  );
}
