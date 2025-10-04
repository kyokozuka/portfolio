export default interface ContactTranslations {
  title: string;
  subtitle: string;
  description: string;
  form: {
    name: string;
    email: string;
    message: string;
    sendButton: string;
    sending: string;
  };
  contactInfo: {
    title: string;
    subtitle: string;
    email: {
      title: string;
      emailAddress: string;
      href: string;
    };
    github: {
      title: string;
      account: string;
      href: string;
    };
    linkedin: {
      title: string;
      account: string;
      href: string;
    };
  };
  message: string;
}