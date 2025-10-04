"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import { ContactBackground } from '@/components/organisms/ContactBackground';
import { ContactHero } from '@/components/organisms/ContactHero';
import { ContactMethodsSection } from '@/features/contact/components/ContactMethodsSection';
import { Typography } from '@/components/atoms/Typography';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslations('en');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!t) return null;

  const contactMethods = [
    {
      icon: 'mdi:email',
      title: t.contact.contactInfo.email.title,
      value: t.contact.contactInfo.email.emailAddress,
      href: t.contact.contactInfo.email.href
    },
    {
      icon: 'mdi:github',
      title: t.contact.contactInfo.github.title,
      value: t.contact.contactInfo.github.account,
      href: t.contact.contactInfo.github.href
    },
    {
      icon: 'mdi:linkedin',
      title: t.contact.contactInfo.linkedin.title,
      value: t.contact.contactInfo.linkedin.account,
      href: t.contact.contactInfo.linkedin.href
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ContactBackground />

      <article className="relative z-10 container mx-auto px-4 pt-16 pb-2">
        <ContactHero
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          description={t.contact.description}
          isLoaded={isLoaded}
        />

        <ContactMethodsSection
          title={t.contact.contactInfo.title}
          subtitle={t.contact.contactInfo.subtitle}
          methods={contactMethods}
        />

      <footer className="text-center pt-16">
        <Typography variant="p" className="text-gray-400 italic">
          {t.contact.message}
        </Typography>
      </footer>
      
      </article>
    </main>
  );
}