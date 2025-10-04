"use client";

import { useState, useEffect } from "react";
import { useTranslations } from '@/lib/i18n';
import BackgroundEffects from '@/features/home/components/BackgroundEffects';
import HeroSection from '@/features/home/components/HeroSection';
import AchievementsSection from '@/components/organisms/AchievementsSection';
import SkillsCardsSection from '@/components/organisms/SkillsCardsSection';
import AboutSection from '@/components/organisms/AboutSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations('en');

  useEffect(() => {
    setIsLoaded(true);
    setMounted(true);

    let animationFrameId: number;
    let lastMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        const easing = 0.15;
        const newX = lastMousePosition.x + (e.clientX - lastMousePosition.x) * easing;
        const newY = lastMousePosition.y + (e.clientY - lastMousePosition.y) * easing;

        setMousePosition({ x: newX, y: newY });
        lastMousePosition = { x: newX, y: newY };
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!t) return null;

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <BackgroundEffects />

      {/* Mouse Follower */}
      {mounted && (
        <span
          className="fixed w-8 h-8 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full pointer-events-none z-40 mix-blend-multiply filter blur-lg opacity-80 transition-transform duration-200 ease-out block"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: `scale(${isLoaded ? 1 : 0}) translate3d(0, 0, 0)`,
            willChange: 'transform'
          }}
        />
      )}

      <HeroSection content={t.home} isLoaded={isLoaded} />
      <AchievementsSection content={t.home} />
      <SkillsCardsSection content={t.home} />
      <AboutSection content={t.home} />
      <ProjectsSection content={t.home} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
      `}</style>
    </article>
  );
}
