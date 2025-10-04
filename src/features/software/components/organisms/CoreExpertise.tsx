"use client";

import { CoreExpertise as CoreExpertiseType } from "@/types/i18n/i18n";
import ExpertiseCard from "@/features/software/components/molecules/ExpertiseCard";

interface CoreExpertiseProps {
  expertise: CoreExpertiseType[];
  title: string;
}

export default function CoreExpertise({ expertise, title }: CoreExpertiseProps) {
  return (
    <section className="mb-16 animate-slideInLeft">
      <h2 className="font-display text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {expertise.map((item, index) => (
          <ExpertiseCard
            key={index}
            icon={item.icon}
            iconColor={item.iconColor}
            color={item.color}
            category={item.category}
            description={item.description}
            technologies={item.technologies}
            delay={0.8 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
