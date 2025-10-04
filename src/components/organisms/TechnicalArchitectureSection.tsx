import TechnicalDetailCard from '@/components/molecules/TechnicalDetailCard';

interface TechnicalDetail {
  title: string;
  description: string;
  technologies: string[];
}

interface TechnicalArchitectureSectionProps {
  title?: string;
  details: Record<string, TechnicalDetail>;
}

export default function TechnicalArchitectureSection({
  title = 'Technical Architecture',
  details
}: TechnicalArchitectureSectionProps) {
  return (
    <section className="mb-20 animate-slideInRight">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(details).map(([key, detail]) => (
          <TechnicalDetailCard key={key} detail={detail} />
        ))}
      </div>
    </section>
  );
}
