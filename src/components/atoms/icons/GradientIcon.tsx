import { Icon } from '@iconify/react';

interface GradientIconProps {
  icon: string;
  size?: string;
  colorFrom?: string;
  colorTo?: string;
  rounded?: boolean;
}

export const GradientIcon = ({
  icon,
  size = 'w-8 h-8',
  colorFrom = 'purple-400',
  colorTo = 'pink-400',
  rounded = true
}: GradientIconProps) => {
  return (
    <span className={`bg-gradient-to-r from-${colorFrom} to-${colorTo} ${rounded ? 'rounded-2xl' : ''} flex items-center justify-center shadow-lg`}>
      <Icon icon={icon} className={`${size} text-white`} />
    </span>
  );
};
