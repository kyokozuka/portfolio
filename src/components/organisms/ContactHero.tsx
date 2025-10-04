import { GradientText } from '@/components/atoms/GradientText';
import { ContactIcon } from '@/components/atoms/icons/ContactIcon';
import { Typography } from '@/components/atoms/Typography';

interface ContactHeroProps {
  title: string;
  subtitle: string;
  description: string;
  isLoaded: boolean;
}

export function ContactHero({ title, subtitle, description, isLoaded }: ContactHeroProps) {
  return (
    <header className="relative text-center mb-8 py-4">

      <section className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="absolute w-32 h-32 border border-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <span className="absolute w-48 h-48 border border-blue-400/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </section>

      <article className="relative z-10 max-w-4xl mx-auto space-y-8">
        <figure
          className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 backdrop-blur-sm transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <ContactIcon
            icon="mdi:email-fast-outline"
            size={48}
            className="text-cyan-400"
          />
        </figure>

        <Typography variant="h1" className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title} 
        </Typography>

        <Typography
          variant="label"
          className={`text-gray-300 mx-auto leading-relaxed transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {description}
        </Typography>

        <hr
          className={`w-4/5 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        />
      </article>
    </header>
  );
}
