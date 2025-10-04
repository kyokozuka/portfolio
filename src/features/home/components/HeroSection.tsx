import Image from 'next/image';
import { Icon } from '@iconify/react';
import { HomeTranslations } from '@/types/i18n/i18n';

interface HeroSectionProps {
  content: HomeTranslations;
  isLoaded: boolean;
}

export default function HeroSection({ content, isLoaded }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <figure className="absolute inset-0 z-0">
        <Image
          src={content.images.profile}
          alt={content.images.backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        <span className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80 block"></span>
        <span className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 block"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse block"></span>
      </figure>

      <article className="container mx-auto px-4 relative z-10">
        <section className="max-w-6xl mx-auto text-center">
          <figure className="mb-12 flex justify-center">
            <aside className="relative group">
              <span className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl group-hover:shadow-3xl transition-all duration-500 animate-bounce-slow backdrop-blur-sm block">
                <Image
                  src={content.images.profile}
                  alt={content.images.profileAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </span>
              <span className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse block">
                <Icon icon="akar-icons:check" className="w-6 h-6 text-white" />
              </span>
              <span className="absolute inset-0 animate-spin-slow block">
                <span className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 block"></span>
              </span>
              <span className="absolute inset-0 animate-spin-slow-reverse block">
                <span className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2 block"></span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 block"></span>
            </aside>
          </figure>

          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 drop-shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              {content.title.split(' ').map((word, i) => (
                <span key={i} className="inline-block hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  {word}{' '}
                </span>
              ))}
            </span>
          </h1>
          <p className={`text-2xl md:text-3xl text-blue-100 mb-8 font-medium transition-all duration-1000 drop-shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>
            {content.subtitle}
          </p>
          <p className={`text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 drop-shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.7s' }}>
            {content.description}
          </p>

          <nav className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.9s' }}>
            <a
              href={content.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-white/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 block"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 block"></span>
              <span className="relative flex items-center gap-3 block">
                <Icon icon="akar-icons:file" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>{content.resume.button}</span>
              </span>
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-300 block"></span>
            </a>

            <a
              href={content.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden hover:bg-white/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl block"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl block"></span>
              <span className="relative flex items-center gap-3 block">
                <Icon icon="akar-icons:download" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>{content.resume.download}</span>
              </span>
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-300 block"></span>
            </a>
          </nav>
        </section>
      </article>

      <aside className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center block">
          <span className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse block"></span>
        </span>
      </aside>
    </section>
  );
}
