import { HeroSectionProps } from '@/features/contact/types/heroSection';


export default function ContactHeroSection({ title, subtitle, description, isLoaded }: HeroSectionProps) {
  return (
    <header className="text-center mb-20 animate-fadeIn">
      <section className="max-w-4xl mx-auto">
        <figure className="relative">
          <h1 className={`font-display text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title}
          </h1>
          <span className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce block"></span>
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce block" style={{animationDelay: '0.5s'}}></span>
        </figure>
        <p className={`font-display text-2xl md:text-3xl text-gray-300 mb-10 font-light tracking-wide transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        <p className={`font-body text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.4s' }}>
          {description}
        </p>
      </section>
    </header>
  );
}
