import ProjectInfoCard from '@/components/molecules/ProjectInfoCard';

interface ProjectInfoGridProps {
  role: string;
  tools: string;
  duration: string;
}

export default function ProjectInfoGrid({ role, tools, duration }: ProjectInfoGridProps) {
  return (
    <section className="mb-20 animate-slideInUp">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <ProjectInfoCard
          icon="mdi:account"
          title="My Role"
          content={role}
          gradientFrom="from-green-400"
          gradientTo="to-emerald-400"
        />

        <ProjectInfoCard
          icon="mdi:tools"
          title="Technologies"
          content={tools}
          gradientFrom="from-blue-400"
          gradientTo="to-purple-400"
        />

        <ProjectInfoCard
          icon="mdi:clock"
          title="Duration"
          content={duration}
          gradientFrom="from-purple-400"
          gradientTo="to-pink-400"
        />
      </div>
    </section>
  );
}
