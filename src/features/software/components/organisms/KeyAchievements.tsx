"use client";

import { KeyAchievement } from "@/types/i18n/i18n";
import AchievementCard from "@/features/software/components/molecules/AchievementCard";

interface KeyAchievementsProps {
  achievements: KeyAchievement[];
}

export default function KeyAchievements({ achievements }: KeyAchievementsProps) {
  return (
    <section className="mb-16 animate-slideInUp">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            icon={achievement.icon}
            metric={achievement.metric}
            description={achievement.description}
            delay={0.5 + index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
