import { Icon } from '@iconify/react';

interface FeatureCardProps {
  feature: string;
  accentColor?: string;
}

export default function FeatureCard({ feature, accentColor = 'green' }: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
      <div className={`w-12 h-12 bg-gradient-to-br from-${accentColor}-400 to-${accentColor === 'green' ? 'emerald' : accentColor}-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
        <Icon icon="mdi:check" className="w-6 h-6 text-white" />
      </div>
      <h3 className={`font-display text-lg font-bold text-white mb-4 group-hover:text-${accentColor}-400 transition-colors duration-300`}>
        {feature}
      </h3>
    </div>
  );
}
