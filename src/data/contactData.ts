import { ContactData } from '@/types/contact';

export const contactData: ContactData = {
  en: {
    title: "Let's Connect",
    subtitle: "Ready to bring your ideas to life?",
    description: "I'm always excited to hear about new projects and opportunities. Whether you have a specific project in mind or just want to chat about design and development, feel free to reach out!",
    form: {
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      sendButton: "Send Message",
      sending: "Sending..."
    },
    contactInfo: {
      title: "Get in Touch",
      subtitle: "Choose your preferred way to connect"
    }
  },
  ja: {
    title: "お問い合わせ",
    subtitle: "アイデアを形にしませんか？",
    description: "新しいプロジェクトや機会について聞くのが大好きです。具体的なプロジェクトのご相談や、デザイン・開発についてお話ししたい方も、お気軽にご連絡ください！",
    form: {
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      sendButton: "送信",
      sending: "送信中..."
    },
    contactInfo: {
      title: "連絡方法",
      subtitle: "お好みの方法でお気軽に"
    }
  }
};