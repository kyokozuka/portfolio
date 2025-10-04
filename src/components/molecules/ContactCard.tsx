import { ContactIcon } from '@/components/atoms/icons/ContactIcon';
import { Typography } from '@/components/atoms/Typography';

interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
  href: string;
  delay?: number;
}

export function ContactCard({ icon, title, value, href, delay = 0 }: ContactCardProps) {
  return (
    <article
      className="group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
      >
        {/* Gradient overlay on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl block" />

        <section className="relative z-10 flex items-center gap-6">
          <ContactIcon
            icon={icon}
            size={32}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
          />

          <section className="flex-1">
            <Typography variant="h4" className="font-display font-semibold text-white text-lg mb-1 group-hover:text-cyan-400 transition-colors">
              {title}
            </Typography>
            <Typography variant="label" className="font-body text-gray-300 group-hover:text-white transition-colors">
              {value}
            </Typography>
          </section>

          <ContactIcon
            icon="mdi:arrow-right"
            size={24}
            className="text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300"
          />
        </section>
      </a>
    </article>
  );
}
