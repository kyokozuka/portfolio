interface SkillLevelBadgeProps {
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  label: string;
}

const getLevelColor = (level: string) => {
  const colors = {
    Expert: "bg-gradient-to-r from-emerald-500 to-teal-500",
    Advanced: "bg-gradient-to-r from-blue-500 to-indigo-500",
    Intermediate: "bg-gradient-to-r from-amber-500 to-orange-500",
    Beginner: "bg-gradient-to-r from-gray-400 to-gray-500"
  };
  return colors[level as keyof typeof colors] || "bg-gradient-to-r from-gray-400 to-gray-500";
};

export default function SkillLevelBadge({ level, label }: SkillLevelBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getLevelColor(level)}`}>
      {label}
    </span>
  );
}
