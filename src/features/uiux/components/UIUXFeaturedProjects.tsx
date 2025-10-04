import { UIUXProject } from '@/types/i18n/i18n';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ProjectCard } from '@/components/molecules/ProjectCard';

interface UIUXProjectsSectionProps {
  projects: UIUXProject[];
}

export const UIUXProjectsSection = ({ projects }: UIUXProjectsSectionProps) => {
  return (
    <section className="mb-20 animate-slideInUp">
      <SectionHeader
        title="Featured Projects"
        description="Explore my latest UI/UX design projects, from research to final prototypes"
        gradientFrom="purple-600"
        gradientTo="pink-600"
      />

      <nav className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            category={project.category}
            tools={project.tools}
          />
        ))}
      </nav>
    </section>
  );
};

export default UIUXProjectsSection;
