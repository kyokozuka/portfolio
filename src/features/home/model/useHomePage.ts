"use client";

import { useState, useEffect } from 'react';
import { homeContent, HomeContent } from '@/features/home/data';
import { useLanguage } from '@/shared/hooks';

export interface UseHomePageReturn {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  isLoaded: boolean;
  mounted: boolean;
  mousePosition: { x: number; y: number };
  currentContent: HomeContent;
}

export const useHomePage = (): UseHomePageReturn => {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const currentContent = homeContent[currentLang as keyof typeof homeContent];

  return {
    currentLang,
    setCurrentLang,
    isLoaded,
    mounted,
    mousePosition,
    currentContent
  };
};
