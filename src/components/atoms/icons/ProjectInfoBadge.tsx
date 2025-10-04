interface ProjectInfoBadgeProps {
  label: string;
  value: string;
  colorClass?: string;
}

export const ProjectInfoBadge = ({ label, value, colorClass = 'text-gray-700' }: ProjectInfoBadgeProps) => {
  return (
    <section className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
      <header className="font-bold text-gray-700 mb-2 text-lg">{label}</header>
      <p className={`text-xl font-semibold ${colorClass}`}>{value}</p>
    </section>
  );
};
