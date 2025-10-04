/**
 * Formats experience duration for display
 */
export const formatDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

  if (diffYears > 0) {
    return diffMonths > 0 ? `${diffYears}y ${diffMonths}m` : `${diffYears}y`;
  }
  return `${diffMonths}m`;
};

/**
 * Calculates project completion percentage based on status
 */
export const getProjectProgress = (status: string): number => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 100;
    case 'in progress':
      return 60;
    case 'planning':
      return 20;
    default:
      return 0;
  }
};

/**
 * Formats technology stack for display
 */
export const formatTechStack = (technologies: string[]): string => {
  if (technologies.length <= 3) {
    return technologies.join(', ');
  }
  return `${technologies.slice(0, 2).join(', ')} +${technologies.length - 2} more`;
};

/**
 * Generates gradient colors for different project types
 */
export const getProjectGradient = (type: string): string => {
  const gradients = {
    'web': 'from-blue-500 to-cyan-500',
    'mobile': 'from-purple-500 to-pink-500',
    'backend': 'from-green-500 to-emerald-500',
    'frontend': 'from-orange-500 to-red-500',
    'fullstack': 'from-indigo-500 to-purple-500',
    'default': 'from-gray-500 to-slate-500'
  };

  return gradients[type.toLowerCase() as keyof typeof gradients] || gradients.default;
};