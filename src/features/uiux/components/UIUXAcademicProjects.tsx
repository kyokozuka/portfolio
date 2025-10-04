import { UIUXAcademicProject } from '@/types/i18n/i18n';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { AcademicProjectCard } from '@/components/molecules/AcademicProjectCard';

interface UIUXAcademicProjectsSectionProps {
  academicProjects: UIUXAcademicProject[];
}

export const UIUXAcademicProjectsSection = ({
  academicProjects
}: UIUXAcademicProjectsSectionProps) => {
  return (
    <section className="mb-20 animate-slideInUp">
      <SectionHeader
        title="Academic Projects"
        description="Hands-on projects from my UI/UX design program"
        gradientFrom="orange-600"
        gradientTo="red-600"
      />

      <nav className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {academicProjects.map((project, index) => (
          <AcademicProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tools={project.tools}
            status={project.status}
            color={project.color}
            animationDelay={`${index * 0.2}s`}
          />
        ))}
      </nav>
    </section>
  );
};

export default UIUXAcademicProjectsSection;
