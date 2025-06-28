import { UIUXSkill } from '@/data/uiux/uiuxData';

/**
 * Groups skills by category for display purposes
 */
export const groupSkillsByCategory = (skills: UIUXSkill[]): Record<string, UIUXSkill[]> => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, UIUXSkill[]>);
};

/**
 * Generates animation delay for staggered animations
 */
export const getAnimationDelay = (index: number, baseDelay: number = 0.1): string => {
  return `${baseDelay * index}s`;
};

/**
 * Formats project status for display
 */
export const formatProjectStatus = (status: string): {
  className: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
} => {
  switch (status.toLowerCase()) {
    case 'completed':
      return {
        className: 'bg-green-100 text-green-700 border-green-200',
        bgColor: 'bg-green-100',
        textColor: 'text-green-700',
        borderColor: 'border-green-200'
      };
    case 'in progress':
      return {
        className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-700',
        borderColor: 'border-yellow-200'
      };
    default:
      return {
        className: 'bg-gray-100 text-gray-700 border-gray-200',
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-700',
        borderColor: 'border-gray-200'
      };
  }
};