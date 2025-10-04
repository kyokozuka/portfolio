interface MetricCardProps {
  value: string;
  label: string;
  improvement: string;
}

export default function MetricCard({ value, label, improvement }: MetricCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
      <div className="text-4xl font-bold text-green-400 mb-2">{value}</div>
      <h3 className="font-display text-lg font-bold text-white mb-2">{label}</h3>
      <p className="text-gray-300">{improvement}</p>
    </div>
  );
}
