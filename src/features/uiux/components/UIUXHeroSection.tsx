interface UIUXHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  isLoaded: boolean;
}

export const UIUXHeroSection = ({
  title,
  subtitle,
  description,
  isLoaded
}: UIUXHeroSectionProps) => {
  return (
    <header className="text-center mb-24 animate-fadeIn">
      <article className="max-w-5xl mx-auto">
        <section className="relative">
          <h1 className={`font-display text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title}
          </h1>
          {/* Floating elements around title */}
          <span className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce block" />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce block" style={{animationDelay: '0.5s'}} />
          <span className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce block" style={{animationDelay: '1s'}} />
          <span className="absolute -bottom-2 right-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce block" style={{animationDelay: '1.5s'}} />
        </section>
        <p className={`font-display text-2xl md:text-3xl text-gray-700 mb-10 font-light tracking-wide transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        <p className={`font-body text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.4s' }}>
          {description}
        </p>
      </article>
    </header>
  );
};

export default UIUXHeroSection;
