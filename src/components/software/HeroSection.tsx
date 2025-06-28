"use client";

interface HeroSectionProps {
  title: string;
  description: string;
  isLoaded: boolean;
}

export default function HeroSection({ title, description, isLoaded }: HeroSectionProps) {
  return (
    <header className="text-center mb-16 animate-fadeIn relative z-10">
      <h1 className={`font-display text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6 transition-all duration-1000 drop-shadow-2xl ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {title}
      </h1>
      <p className={`font-body text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 drop-shadow-lg ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} style={{ animationDelay: '0.3s' }}>
        {description}
      </p>
    </header>
  );
}