import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SixAcresHeroProps {
  title: string;
  subtitle: string;
}

export const SixAcresHero = ({ title, subtitle }: SixAcresHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative z-10 container mx-auto px-4 pt-20 pb-16">
      <header className="text-center mb-12">
        <h1 className={`text-7xl md:text-9xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 tracking-tight transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </h2>
      </header>

      <figure className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} style={{ animationDelay: '0.4s' }}>
        <article className="relative group">
          <Image
            src="/projects/sixacres/Hero.svg"
            alt="Six Acres Redesign Hero"
            width={1200}
            height={600}
            className="rounded-3xl shadow-2xl w-full object-cover border-4 border-white/80 group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </article>
      </figure>
    </section>
  );
};
