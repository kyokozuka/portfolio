import { Icon } from '@iconify/react';

interface ContactIconProps {
  icon: string;
  className?: string;
  size?: number;
}

export function ContactIcon({ icon, className = '', size = 24 }: ContactIconProps) {
  return (
    <figure className={`flex items-center justify-center ${className}`}>
      <Icon icon={icon} width={size} height={size} />
    </figure>
  );
}
