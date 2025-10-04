interface ContactInfoProps {
  title: string;
  subtitle: string;
  email: string;
}

interface ContactRowProps {
  icon: string;
  title: string;
  href: string;
  value: string;
}

export type { ContactInfoProps, ContactRowProps };