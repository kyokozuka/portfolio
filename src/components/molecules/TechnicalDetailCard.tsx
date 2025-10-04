import { Icon } from '@iconify/react';
import Badge from '@/components/atoms/Badge';

interface TechnicalDetail {
  title: string;
  description: string;
  technologies: string[];
}

interface TechnicalDetailCardProps {
  detail: TechnicalDetail;
}

export default function TechnicalDetailCard({ detail }: TechnicalDetailCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
        <Icon icon="mdi:code-braces" className="w-8 h-8 text-white" />
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-4">{detail.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{detail.description}</p>
      <div className="flex flex-wrap gap-2">
        {detail.technologies.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
