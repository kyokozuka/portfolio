import { Icon } from '@iconify/react';
import { ContactInfoProps, ContactRowProps } from '@/features/contact/types/contactInfo';
import { useTranslations } from '@/lib/i18n';


const ContactRow = ({ icon, title, href, value }: ContactRowProps) => {
  return (
    <article className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
      <a
        href={href}
        className="font-body text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group-hover:underline"
      >
        <address className="flex items-center space-x-4 not-italic">
          <figure className="w-12 h-12 bg-gradient-to-r from-gray-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <Icon icon={icon} className="w-6 h-6 text-white" />
          </figure>
          <section>
            <h4 className="font-display font-semibold text-white">{title}</h4>
            {value}
          </section>
        </address>
      </a>
    </article>
  );
};

export default function ContactInfo({ title, subtitle, email }: ContactInfoProps) {
  const { t } = useTranslations('en');

  if (!t) return null;

  return (
    <section className="animate-slideInRight">
      <article className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
        <h3 className="font-display text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
          {title}
        </h3>
        <p className="font-body text-gray-300 mb-8 text-center">
          {subtitle}
        </p>
        <nav className="space-y-6">
          <ContactRow icon="mdi:email" title={t.contact.contactInfo.email.title} href={t.contact.contactInfo.email.href} value={email} />
          <ContactRow icon="mdi:github" title={t.contact.contactInfo.github.title} href={t.contact.contactInfo.github.href} value={t.contact.contactInfo.github.account} />
          <ContactRow icon="mdi:linkedin" title={t.contact.contactInfo.linkedin.title} href={t.contact.contactInfo.linkedin.href} value={t.contact.contactInfo.linkedin.account} />
        </nav>
      </article>
    </section>
  );
}
