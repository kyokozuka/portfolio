import FeatureCard from '@/components/molecules/FeatureCard';

interface TechnicalSolutionSectionProps {
  title?: string;
  description: string;
  features: string[];
  accentColor?: string;
}

export default function TechnicalSolutionSection({
  title = 'Technical Solution',
  description,
  features,
  accentColor = 'green'
}: TechnicalSolutionSectionProps) {
  return (
    <section className="mb-20 animate-slideInLeft">
      <div className="text-center mb-16">
        <h2 className={`font-display text-5xl font-black bg-gradient-to-r from-${accentColor}-400 to-${accentColor === 'green' ? 'emerald' : accentColor}-400 bg-clip-text text-transparent mb-6 tracking-tight`}>
          {title}
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} accentColor={accentColor} />
        ))}
      </div>
    </section>
  );
}
