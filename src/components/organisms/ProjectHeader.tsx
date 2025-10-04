interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  overview: string;
  isLoaded: boolean;
  accentColors?: {
    from: string;
    via: string;
    to: string;
  };
}

export default function ProjectHeader({
  title,
  subtitle,
  overview,
  isLoaded,
  accentColors = {
    from: 'green-400',
    via: 'emerald-400',
    to: 'blue-400'
  }
}: ProjectHeaderProps) {
  return (
    <header className="text-center mb-20 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <h1 className={`font-display text-7xl md:text-8xl font-black bg-gradient-to-r from-${accentColors.from} via-${accentColors.via} to-${accentColors.to} bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title}
          </h1>
          <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-${accentColors.from} to-${accentColors.via} rounded-full animate-bounce`}></div>
          <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce`} style={{animationDelay: '0.5s'}}></div>
        </div>
        <p className={`font-display text-2xl md:text-3xl text-gray-300 mb-10 font-light tracking-wide transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        <p className={`font-body text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.4s' }}>
          {overview}
        </p>
      </div>
    </header>
  );
}
