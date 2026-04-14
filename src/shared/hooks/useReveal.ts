'use client';

import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  // Start visible — items are readable even before JS runs.
  // The observer will add the scroll-in animation for out-of-viewport items.
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    // If element is already in the viewport, keep it visible immediately.
    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 1.1 && rect.bottom > 0;
    if (alreadyInView) {
      setVisible(true);
      return;
    }

    // Element is below the fold — hide it and wait for scroll.
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible, mounted };
}
