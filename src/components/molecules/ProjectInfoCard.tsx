import { Icon } from '@iconify/react';

interface ProjectInfoCardProps {
  icon: string;
  title: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function ProjectInfoCard({ icon, title, content, gradientFrom, gradientTo }: ProjectInfoCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <Icon icon={icon} className="w-8 h-8 text-white" />
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}
