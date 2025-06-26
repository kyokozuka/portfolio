"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [currentLang, setCurrentLang] = useState("en");

  const content = {
    en: {
      title: "Contact",
      description: "Feel free to reach out for project inquiries, collaborations, or just to say hello!",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        sendButton: "Send Message"
      }
    },
    ja: {
      title: "お問い合わせ",
      description: "プロジェクトのご相談、コラボレーション、またはお気軽にご連絡ください！",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        sendButton: "送信"
      }
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex flex-col justify-center items-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">{currentContent.title}</h1>
          <p className="text-gray-600 mb-6 text-center">{currentContent.description}</p>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" /></svg>
              <a href="mailto:contact@example.com" className="text-blue-700 hover:underline">contact@example.com</a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.37-12-12-12z" /></svg>
              <a href="https://github.com/kentoyokozuka" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">GitHub</a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
              <a href="https://linkedin.com/in/kento-yokozuka-26a1731b4" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">{currentContent.form.name}</label>
              <input id="name" name="name" type="text" autoComplete="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{currentContent.form.email}</label>
              <input id="email" name="email" type="email" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{currentContent.form.message}</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-colors">{currentContent.form.sendButton}</button>
          </form>
        </div>
      </div>
      <Footer currentLang={currentLang} />
    </>
  );
}