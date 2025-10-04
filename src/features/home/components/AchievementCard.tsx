interface AchievementCardProps {
  icon: string;
  value: string;
  color: string;
  label: string;
  delay: number;
}

export default function AchievementCard({ icon, value, color, label, delay }: AchievementCardProps) {
  return (
    <article
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-bounce-slow block">
        {icon}
      </span>
      <span className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 block`}>
        {value}
      </span>
      <p className="text-sm text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
        {label}
      </p>
    </article>
  );
}
