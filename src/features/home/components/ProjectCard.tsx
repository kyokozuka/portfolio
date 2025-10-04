import { Project } from '@/types/i18n/i18n';

interface ProjectCardProps {
  project: Project;
  colorScheme: 'blue' | 'purple';
}

export default function ProjectCard({ project, colorScheme }: ProjectCardProps) {
  const colors = {
    blue: {
      text: 'group-hover:text-blue-600',
      bg: 'bg-blue-50',
      textColor: 'text-blue-700',
      hoverBg: 'hover:bg-blue-100'
    },
    purple: {
      text: 'group-hover:text-purple-600',
      bg: 'bg-purple-50',
      textColor: 'text-purple-700',
      hoverBg: 'hover:bg-purple-100'
    }
  };

  const scheme = colors[colorScheme];

  return (
    <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-white/50 group cursor-pointer">
      <h5 className={`font-bold text-gray-900 mb-3 text-lg ${scheme.text} transition-colors duration-300`}>
        {project.name}
      </h5>
      <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
        {project.description}
      </p>
      <nav className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 ${scheme.bg} ${scheme.textColor} rounded-full text-xs font-medium ${scheme.hoverBg} transition-all duration-300 hover:scale-110 group-hover:animate-pulse`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tag}
          </span>
        ))}
      </nav>
    </article>
  );
}
