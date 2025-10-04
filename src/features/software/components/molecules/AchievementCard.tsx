interface AchievementCardProps {
  icon: string;
  metric: string;
  description: string;
  delay?: number;
}

export default function AchievementCard({ icon, metric, description, delay = 0 }: AchievementCardProps) {
  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-bounce">
        {icon}
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
        {metric}
      </div>
      <div className="text-sm text-gray-300 font-medium mt-2 group-hover:text-gray-100 transition-colors duration-300">
        {description}
      </div>
    </div>
  );
}
