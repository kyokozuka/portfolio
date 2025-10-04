interface ProcessDayCardProps {
  day: string;
  title: string;
  description: string;
}

export const ProcessDayCard = ({ day, title, description }: ProcessDayCardProps) => {
  return (
    <article className="bg-white/70 rounded-2xl p-4 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow text-center">
      <header className="text-sm font-bold text-blue-600 mb-1">{day}</header>
      <h3 className="text-lg font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </article>
  );
};
