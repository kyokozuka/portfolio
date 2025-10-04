import { Typography } from "../Typography";

interface GradientBadgeProps {
  text: string;
  colorFrom?: string;
  colorTo?: string;
  size?: 'sm' | 'md' | 'lg';
  textColor?: string;
}

export const GradientBadge = ({
  text,
  colorFrom = 'purple-100',
  colorTo = 'pink-100',
  size = 'md'
}: GradientBadgeProps) => {
  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1',
    lg: 'px-4 py-2 text-base'
  };

  const textColor = colorFrom.split('-')[0];

  return (
    <Typography variant="span" className={sizeClasses[size] + ` bg-gradient-to-r from-${colorFrom} to-${colorTo} text-${textColor}-700 font-medium rounded-full border border-${textColor}-200`}>
      {text}
    </Typography>
  );
};
