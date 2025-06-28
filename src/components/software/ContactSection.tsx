"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="text-center animate-fadeIn">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
        <h2 className="font-display text-4xl font-bold text-white mb-6 drop-shadow-lg">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Ready to discuss your next project? Let's explore how we can work together to bring your ideas to life.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white font-display font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce border border-blue-400/30 backdrop-blur-md"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}