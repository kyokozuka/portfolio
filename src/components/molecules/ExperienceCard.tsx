import { Icon } from '@iconify/react';
import { GradientBadge } from '@/components/atoms/icons/GradientBadge';

interface ExperienceCardProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  color: string;
  animationDelay?: string;
}

export const ExperienceCard = ({
  title,
  institution,
  period,
  description,
  highlights,
  color,
  animationDelay = '0s'
}: ExperienceCardProps) => {
  return (
    <article
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 mb-8"
      style={{ animationDelay }}
    >
      <section className="flex items-start gap-6">
        <figure className={`w-20 h-20 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <Icon icon="mdi:school" className="w-10 h-10 text-white" />
        </figure>
        <article className="flex-1">
          <header className="flex items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <GradientBadge
              text={period}
              colorFrom="green-100"
              colorTo="emerald-100"
            />
          </header>
          <h4 className="text-xl font-semibold text-gray-700 mb-3">{institution}</h4>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <nav className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <GradientBadge
                key={index}
                text={highlight}
                colorFrom="green-50"
                colorTo="emerald-50"
              />
            ))}
          </nav>
        </article>
      </section>
    </article>
  );
};
