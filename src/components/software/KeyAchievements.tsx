"use client";

import { KeyAchievement } from "@/data/softwareData";

interface KeyAchievementsProps {
  achievements: KeyAchievement[];
}

export default function KeyAchievements({ achievements }: KeyAchievementsProps) {
  return (
    <section className="mb-16 animate-slideInUp">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group cursor-pointer"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-bounce">
              {achievement.icon}
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {achievement.metric}
            </div>
            <div className="text-sm text-gray-300 font-medium mt-2 group-hover:text-gray-100 transition-colors duration-300">
              {achievement.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}