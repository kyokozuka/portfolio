import { Icon } from '@iconify/react';

interface ExpertiseCardProps {
  icon: string;
  iconColor: string;
  color: string;
  category: string;
  description: string;
  technologies: string[];
  delay?: number;
}

export default function ExpertiseCard({
  icon,
  iconColor,
  color,
  category,
  description,
  technologies,
  delay = 0
}: ExpertiseCardProps) {
  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-${color}-400/30 group-hover:to-${color}-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border border-${color}-400/30`}>
          <Icon icon={icon} className={`w-8 h-8 ${iconColor} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
          {category}
        </h3>
        <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1 bg-${color}-500/20 text-${color}-300 rounded-full text-sm font-semibold border border-${color}-400/30 shadow-sm hover:bg-${color}-400/30 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce`}
              style={{ animationDelay: `${techIndex * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
