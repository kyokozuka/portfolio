import { HomeTranslations } from '@/types/i18n/i18n';
import ProjectCard from '@/features/home/components/ProjectCard';

interface ProjectsSectionProps {
  content: HomeTranslations;
}

export default function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="py-16">
      <article className="container mx-auto px-4">
        <section className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center hover:text-blue-600 transition-colors duration-300">
            {content.highlights.title}
          </h3>

          {/* Software Engineering Projects */}
          <section className="mb-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {content.highlights.software}
            </h4>
            <nav className="grid md:grid-cols-3 gap-6">
              {content.projects.software.map((project, index) => (
                <ProjectCard key={index} project={project} colorScheme="blue" />
              ))}
            </nav>
          </section>

          {/* UI/UX Design Projects */}
          <section>
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {content.highlights.uiux}
            </h4>
            <nav className="grid md:grid-cols-2 gap-6">
              {content.projects.uiux.map((project, index) => (
                <ProjectCard key={index} project={project} colorScheme="purple" />
              ))}
            </nav>
          </section>
        </section>
      </article>
    </section>
  );
}
