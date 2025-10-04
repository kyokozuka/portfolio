/**
 * Shared interfaces for UIUX components
 */

export interface FloatingElement {
  size: string;
  color: string;
  left: string;
  top: string;
  delay: string;
}

export interface GradientColors {
  from: string;
  via?: string;
  to: string;
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export interface BadgeProps {
  text: string;
  colorScheme?: 'purple' | 'green' | 'orange' | 'blue' | 'pink';
}

export interface CardProps {
  className?: string;
  animationDelay?: string;
}
