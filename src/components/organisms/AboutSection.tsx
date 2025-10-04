import { HomeTranslations } from '@/types/i18n/i18n';

interface AboutSectionProps {
  content: HomeTranslations;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="py-16">
      <article className="container mx-auto px-4">
        <section className="max-w-6xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center hover:text-blue-600 transition-colors duration-300">
              {content.about.title}
            </h3>
            <section className="grid lg:grid-cols-2 gap-12">
              <article className="group">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {content.about.experience.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {content.about.experience.content}
                </p>
              </article>
              <article className="group">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {content.about.philosophy.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {content.about.philosophy.content}
                </p>
              </article>
            </section>
          </article>
        </section>
      </article>
    </section>
  );
}
