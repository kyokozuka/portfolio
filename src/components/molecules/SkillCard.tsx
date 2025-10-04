import { Icon } from '@iconify/react';

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  animationDelay?: string;
}

export const SkillCard = ({ name, icon, color, animationDelay = '0s' }: SkillCardProps) => {
  return (
    <article
      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 text-center"
      style={{ animationDelay }}
    >
      <figure className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon icon={icon} className="w-8 h-8 text-white" />
      </figure>
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
        {name}
      </h3>
    </article>
  );
};
