import { Icon } from '@iconify/react';
import { creativeElements, designIcons } from '@/data/uiux/uiuxData';

interface UIUXHeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  isLoaded: boolean;
}

export default function UIUXHeroSection({
  title,
  subtitle,
  description,
  isLoaded
}: UIUXHeroSectionProps) {
  return (
    <>
      {/* Creative Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30 animate-pulse"></div>

        {/* Floating creative elements */}
        {creativeElements.map((element, index) => (
          <div
            key={`creative-${index}`}
            className={`absolute ${element.size} ${element.color} rounded-full animate-float blur-sm`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Design icons with colors */}
        {designIcons.map((icon, index) => (
          <div
            key={`icon-${index}`}
            className={`absolute ${icon.color} ${icon.size} animate-pulse opacity-60`}
            style={{
              left: icon.left,
              top: icon.top,
              animationDelay: icon.delay,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Icon icon={icon.icon} />
          </div>
        ))}

        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Hero Section */}
      <header className="text-center mb-24 animate-fadeIn">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <h1 className={`font-display text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {title}
            </h1>
            {/* Floating elements around title */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-2 right-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          </div>
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
        </div>
      </header>
    </>
  );
}