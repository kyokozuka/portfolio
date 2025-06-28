import Link from "next/link";
import { Icon } from '@iconify/react';

interface UIUXContactSectionProps {
  contactText: string;
}

export default function UIUXContactSection({ contactText }: UIUXContactSectionProps) {
  return (
    <section className="mb-20 animate-fadeIn">
      <div className="text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 tracking-tight">
            {contactText}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next design project? Let's create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Icon icon="mdi:email" className="w-5 h-5 mr-2" />
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}