import { Icon } from '@iconify/react';
import { UIUXAcademicProject } from '@/data/uiux/uiuxData';

interface UIUXAcademicProjectsSectionProps {
  academicProjects: UIUXAcademicProject[];
}

export default function UIUXAcademicProjectsSection({
  academicProjects
}: UIUXAcademicProjectsSectionProps) {
  return (
    <section className="mb-20 animate-slideInUp">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 tracking-tight">
          Academic Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Hands-on projects from my UI/UX design program
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {academicProjects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
              <Icon icon="mdi:projector" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool, toolIndex) => (
                <span
                  key={toolIndex}
                  className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-medium rounded-full border border-orange-200"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === 'Completed'
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
              }`}>
                {project.status}
              </span>
              <Icon icon="mdi:arrow-right" className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}