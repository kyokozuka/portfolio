import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactContent from './_contact-content';

// contact（Server Component）。言語は URL セグメント由来。
// 本文（ContactContent）は useReveal を使う client の葉に閉じている。
export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <div className="min-h-screen bg-canvas">
      <Header lang={lang} />

      <main>
        <ContactContent />
      </main>

      <Footer />
    </div>
  );
}
