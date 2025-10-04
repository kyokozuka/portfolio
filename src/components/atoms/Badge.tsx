interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'tech';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'px-3 py-1 rounded-full text-sm font-medium';

  const variantStyles = {
    default: 'bg-white/20 text-white border border-white/30',
    tech: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300 shadow-sm'
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
