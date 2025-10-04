import { Icon } from '@iconify/react';
import { GradientBadge } from '@/components/atoms/icons/GradientBadge';

interface AcademicProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  status: string;
  color: string;
  animationDelay?: string;
}

export const AcademicProjectCard = ({
  title,
  description,
  tools,
  status,
  color,
  animationDelay = '0s'
}: AcademicProjectCardProps) => {
  return (
    <article
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50"
      style={{ animationDelay }}
    >
      <header>
        <figure className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
          <Icon icon="mdi:projector" className="w-8 h-8 text-white" />
        </figure>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      </header>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <nav className="flex flex-wrap gap-2 mb-6">
        {tools.map((tool, index) => (
          <GradientBadge
            key={index}
            text={tool}
            colorFrom="orange-100"
            colorTo="red-100"
          />
        ))}
      </nav>
      <footer className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          status === 'Completed'
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
        }`}>
          {status}
        </span>
        <Icon icon="mdi:arrow-right" className="w-5 h-5 text-gray-400" />
      </footer>
    </article>
  );
};
