'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { APP_ROUTES } from "@/constants/routes";
import { Locale, useTranslations } from "@/lib/i18n";
import PageItems from "@/components/atoms/PageItem";
import ContactLink from "@/components/atoms/icons/ContactLink";
import { Typography } from "./atoms/Typography";

interface HeaderProps {
  currentLang?: string;
  onLanguageChange?: (lang: string) => void;
}

export default function Header({ currentLang = "en", onLanguageChange }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations(currentLang as Locale);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!t) return null;

  return (
    <header className={`relative bg-gradient-to-b from-slate-900/95 via-gray-900/90 to-black/95 backdrop-blur-md border-b border-white/10 sticky top-0 transition-all duration-500 overflow-visible ${
      mounted && isScrolled ? 'shadow-2xl bg-slate-900/98' : ''
    }`} style={{ zIndex: 99999 }}>
      <section className="absolute inset-0 pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-transparent block" />
        <span className="absolute top-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent block" />
        <span className="absolute top-0 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent block" />
        <span className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse block" />
        <span className="absolute top-1/3 right-1/6 w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-pulse block" style={{animationDelay: '1s'}} />
      </section>

      <section className="container mx-auto px-4 py-4 relative z-10">
        <article className="flex items-center justify-between">
          <Link
            href={APP_ROUTES.home}
            className="text-2xl font-bold hover:text-blue-400 transition-all duration-300 transform hover:scale-105 animate-slideInLeft relative z-10 cursor-pointer group"
            prefetch={true}
          >
            <Typography variant="h2" className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pointer-events-none group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
              {t.home.title}
            </Typography>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 relative z-10">
            <PageItems href={APP_ROUTES.home} title={t.routes.home.title} icon="mdi:home" size="lg"/>
            <PageItems href={APP_ROUTES.software.base} title={t.routes.software.title} icon="mdi:code-braces" size="lg"/>
            <PageItems href={APP_ROUTES.uiux.base} title={t.routes.uiux.title} icon="mdi:palette" size="lg"/>
            <PageItems href={APP_ROUTES.contact} title={t.routes.contact.title} icon="mdi:email" size="lg"/>
          </nav>

          <section className="flex items-center space-x-4 animate-slideInRight relative z-10">
            {onLanguageChange && (
              <aside className="relative" style={{ zIndex: 100000 }}>
                <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
              </aside>
            )}
            <ContactLink href={t.contact.contactInfo.linkedin.href} icon="mdi:linkedin" label="LinkedIn" />
            <ContactLink href={t.contact.contactInfo.github.href} icon="mdi:github" label="GitHub" />
            <ContactLink href={t.contact.contactInfo.email.href} icon="mdi:email" label="Email" />
          </section>
        </article>
      </section>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
