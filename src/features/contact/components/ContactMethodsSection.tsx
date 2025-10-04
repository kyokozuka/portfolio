import { ContactCard } from '@/components/molecules/ContactCard';
import { Typography } from '../../../components/atoms/Typography';
import { useTranslations } from '@/lib/i18n';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  href: string;
}

interface ContactMethodsSectionProps {
  title: string;
  subtitle: string;
  methods: ContactMethod[];
}

export function ContactMethodsSection({ title, subtitle, methods }: ContactMethodsSectionProps) {
  const { t } = useTranslations('en');
  if (!t) return null;
  return (

    <section className="relative max-w-2xl mx-auto">

      <header className="text-center mb-2">
        <Typography variant="h2" className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </Typography>
        <Typography variant="h4" className="text-gray-300">
          {subtitle}
        </Typography>
      </header>

      <section className="grid gap-6 md:grid-cols-1 max-w-2xl mx-auto">
        {methods.map((method, index) => (
          <ContactCard
            key={method.title}
            icon={method.icon}
            title={method.title}
            value={method.value}
            href={method.href}
            delay={index * 100}
          />
        ))}
      </section>

    </section>
  );
}
