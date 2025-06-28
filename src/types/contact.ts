/**
 * Contact page interfaces
 */

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  sendButton: string;
  sending: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  description: string;
  form: ContactForm;
  contactInfo: ContactInfo;
}

export interface ContactData {
  en: ContactContent;
  ja: ContactContent;
}