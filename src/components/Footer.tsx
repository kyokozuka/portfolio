'use client';

import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { useTranslations } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
import { APP_ROUTES } from "@/constants/routes";
import ContactLink from "@/components/atoms/icons/ContactLink";
import PageItems from "@/components/atoms/PageItem";
import { Typography } from "@/components/atoms/Typography";

interface FooterProps {
  currentLang?: string;
}

export default function Footer({ currentLang = "en" }: FooterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslations(currentLang as Locale);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!t) return null;

  return (
    <footer className={`relative bg-gradient-to-t from-slate-900 via-gray-900 to-black border-t border-white/10 py-12 mt-16 transition-all duration-1000 overflow-hidden ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <section className="absolute inset-0 pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-purple-500/3 to-transparent block" />
        <span className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent block" />
        <span className="absolute bottom-0 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent block" />
        <span className="absolute top-1/2 left-1/6 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse block" />
        <span className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse block" style={{animationDelay: '1s'}} />
      </section>

      <section className="container mx-auto px-4 relative z-10">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <section className="text-center md:text-left animate-slideInLeft">
            <header className="mb-4">
              <Typography variant="h2" className="font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.footer.title}
              </Typography>
            </header>
            <Typography variant="p" className="text-gray-400 leading-relaxed max-w-xs">
              {t.footer.subtitle}
            </Typography>
          </section>

          <section className="text-center animate-slideInUp">
            <header>
              <Typography variant="h3" className="text-white font-semibold mb-4">
                {t.footer.navigation.title}
              </Typography>
            </header>
            <nav className="flex flex-col gap-3">
              <PageItems href={APP_ROUTES.home} title={t.routes.home.title} icon="mdi:home" size="sm" />
              <PageItems href={APP_ROUTES.software.base} title={t.routes.software.title} icon="mdi:code-braces" size="sm" />
              <PageItems href={APP_ROUTES.uiux.base} title={t.routes.uiux.title} icon="mdi:palette" size="sm" />
              <PageItems href={APP_ROUTES.contact} title={t.routes.contact.title} icon="mdi:email" size="sm" />
            </nav>
          </section>

          <section className="text-center md:text-right animate-slideInRight">
            <header>
              <Typography variant="h3" className="text-white font-semibold mb-4">
                {t.footer.social.title}
              </Typography>
            </header>
            
            <nav className="flex justify-center md:justify-end gap-4 mb-4">
              <ContactLink href={t.contact.contactInfo.github.href} icon="mdi:github" label="GitHub" />
              <ContactLink href={t.contact.contactInfo.linkedin.href} icon="mdi:linkedin" label="LinkedIn" />
              <ContactLink href={t.contact.contactInfo.email.href} icon="mdi:email" label="Email" />
            </nav>
            
            <Typography variant="p" className="text-gray-400">
              {t.footer.social.message}
            </Typography>

          </section>

        </article>

        <footer className="border-t border-white/10 pt-8">
          <article className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Typography variant="p" className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </Typography>
            <aside className="flex items-center gap-2 text-gray-500 text-xs">
              <Icon icon="mdi:heart" className="w-4 h-4 text-red-400 animate-pulse" />
              <Typography variant="p">{t.footer.madeWithLove}</Typography>
            </aside>
          </article>
        </footer>

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

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInFromTop 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}
