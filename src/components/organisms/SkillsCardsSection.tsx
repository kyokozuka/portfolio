import Link from "next/link";
import { Icon } from '@iconify/react';
import { HomeTranslations } from '@/types/i18n/i18n';

interface SkillsCardsSectionProps {
  content: HomeTranslations;
}

export default function SkillsCardsSection({ content }: SkillsCardsSectionProps) {
  return (
    <section className="py-16">
      <article className="container mx-auto px-4">
        <section className="max-w-6xl mx-auto">
          <nav className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Software Engineer Card */}
            <Link href="/software" className="group">
              <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/50 h-full relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 block"></span>
                <section className="text-center h-full flex flex-col justify-center relative z-10">
                  <figure className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Icon icon="mdi:code-braces" className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </figure>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {content.software.title}
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {content.software.description}
                  </p>
                  <nav className="flex flex-wrap gap-3 justify-center">
                    {content.software.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm hover:bg-blue-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </nav>
                </section>
              </article>
            </Link>

            {/* UI/UX Designer Card */}
            <Link href="/uiux" className="group">
              <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1 border border-white/50 h-full relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 block"></span>
                <section className="text-center h-full flex flex-col justify-center relative z-10">
                  <figure className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                    <Icon icon="mdi:palette-outline" className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </figure>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                    {content.uiux.title}
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {content.uiux.description}
                  </p>
                  <nav className="flex flex-wrap gap-3 justify-center">
                    {content.uiux.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold border border-purple-200 shadow-sm hover:bg-purple-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </nav>
                </section>
              </article>
            </Link>
          </nav>
        </section>
      </article>
    </section>
  );
}
