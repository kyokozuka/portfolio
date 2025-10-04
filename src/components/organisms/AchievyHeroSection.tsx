import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatedParticle } from '@/components/atoms/AnimatedParticle';
import { ProjectHeroContent } from '@/components/molecules/ProjectHeroContent';

interface AchievyHeroSectionProps {
  title: string;
  subtitle: string;
  tagline: string;
}

export const AchievyHeroSection = ({ title, subtitle, tagline }: AchievyHeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] mb-20 overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 rounded-3xl shadow-2xl border border-blue-200/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Particles */}
      <article className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <AnimatedParticle
            key={i}
            size="w-2 h-2"
            colorClass="bg-blue-400/30"
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
            animationDelay={`${Math.random() * 3}s`}
            animationDuration={`${2 + Math.random() * 3}s`}
            animationType="pulse"
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <AnimatedParticle
            key={`cyan-${i}`}
            size="w-1 h-1"
            colorClass="bg-cyan-400/40"
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
            animationDelay={`${Math.random() * 2}s`}
            animationDuration={`${1.5 + Math.random() * 2}s`}
            animationType="bounce"
          />
        ))}
      </article>

      {/* Interactive Gradient Overlay */}
      <span
        className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-cyan-200/20 to-indigo-200/20 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)`,
        }}
      />

      {/* Floating Hero Image */}
      <figure className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/projects/achievy/Hero.svg"
          alt="Achievy Hero Visual"
          fill
          style={{ objectFit: 'cover', zIndex: 1, opacity: 0.15 }}
          className={`pointer-events-none select-none transition-transform duration-700 ${
            isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
          }`}
        />
      </figure>

      {/* Floating Icon */}
      <figure className="absolute top-8 right-8 md:top-12 md:right-16 z-20">
        <span className={`transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
          <Image
            src="/projects/achievy/achievy-icon.svg"
            alt="Achievy icon"
            width={64}
            height={64}
            className="drop-shadow-lg bg-white/80 rounded-full p-3 border-2 border-blue-200 animate-bounce"
            priority
          />
        </span>
        <span className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
      </figure>

      <ProjectHeroContent
        title={title}
        subtitle={subtitle}
        tagline={tagline}
        primaryColor="blue"
        secondaryColor="cyan"
      />

      {/* Bottom Wave Effect */}
      <figure className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-blue-50/90 via-cyan-50/70 to-transparent pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120C360 60 1080 180 1440 120V0H0V120Z" fill="url(#wave)" />
          <defs>
            <linearGradient id="wave" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0e7ff" />
              <stop offset="1" stopColor="#cffafe" />
            </linearGradient>
          </defs>
        </svg>
      </figure>

      {/* Floating Elements */}
      <span className="absolute top-1/4 left-8 md:left-16 animate-float">
        <span className="w-4 h-4 bg-blue-400/40 rounded-full block" />
      </span>
      <span className="absolute top-1/3 right-12 md:right-24 animate-float delay-1000">
        <span className="w-3 h-3 bg-cyan-400/50 rounded-full block" />
      </span>
      <span className="absolute bottom-1/4 left-16 md:left-32 animate-float delay-2000">
        <span className="w-2 h-2 bg-indigo-400/60 rounded-full block" />
      </span>
    </section>
  );
};
