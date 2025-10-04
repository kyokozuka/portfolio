import { Icon } from '@iconify/react';

interface ContactLinkProps {
  href: string;
  icon: string;
  label: string;
}

export default function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-3 cursor-pointer group"
      aria-label={label}
    >
      <Icon icon={icon} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
    </a>
  )
}