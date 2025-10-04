import MetricCard from '@/components/molecules/MetricCard';

interface Metric {
  label: string;
  value: string;
  improvement: string;
}

interface PerformanceMetricsSectionProps {
  title: string;
  metrics: Metric[];
}

export default function PerformanceMetricsSection({ title, metrics }: PerformanceMetricsSectionProps) {
  return (
    <section className="mb-20 animate-slideInUp">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            value={metric.value}
            label={metric.label}
            improvement={metric.improvement}
          />
        ))}
      </div>
    </section>
  );
}
