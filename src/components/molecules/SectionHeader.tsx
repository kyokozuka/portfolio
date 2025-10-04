interface SectionHeaderProps {
  title: string;
  description?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export const SectionHeader = ({
  title,
  description,
  gradientFrom = 'purple-600',
  gradientVia,
  gradientTo = 'pink-600'
}: SectionHeaderProps) => {
  const gradientClass = gradientVia
    ? `from-${gradientFrom} via-${gradientVia} to-${gradientTo}`
    : `from-${gradientFrom} to-${gradientTo}`;

  return (
    <header className="text-center mb-16">
      <h2 className={`font-display text-5xl font-black bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent mb-6 tracking-tight`}>
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
};
