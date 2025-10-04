import { HomeTranslations } from '@/types/i18n/i18n';
import AchievementCard from '@/features/home/components/AchievementCard';

interface AchievementsSectionProps {
  content: HomeTranslations;
}

export default function AchievementsSection({ content }: AchievementsSectionProps) {
  const achievements = [
    { icon: "🚀", value: "80%", color: "from-blue-600 to-indigo-600", label: content.achievements.deployments },
    { icon: "⚡", value: "50%", color: "from-emerald-600 to-teal-600", label: content.achievements.effort },
    { icon: "⚡", value: "400ms", color: "from-violet-600 to-purple-600", label: content.achievements.loadTime },
    { icon: "💼", value: "8+", color: "from-rose-600 to-pink-600", label: content.achievements.experience }
  ];

  return (
    <section className="py-16">
      <article className="container mx-auto px-4">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              value={achievement.value}
              color={achievement.color}
              label={achievement.label}
              delay={0.8 + index * 0.1}
            />
          ))}
        </section>
      </article>
    </section>
  );
}
