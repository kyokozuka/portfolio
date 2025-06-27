"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
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

  const currentContent = content[currentLang as keyof typeof content];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert(currentLang === "ja" ? "メッセージを送信しました！" : "Message sent successfully!");
    }, 2000);
  };

  return (
    <>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="font-display text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {currentContent.title}
            </h1>
            <h2 className="font-display text-2xl md:text-3xl text-gray-800 mb-6">
              {currentContent.subtitle}
            </h2>
            <p className="font-body text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                  {currentContent.form.sendButton}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block font-body text-sm font-medium text-gray-800 mb-2">
                      {currentContent.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                      placeholder={currentLang === "ja" ? "山田太郎" : "John Doe"}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block font-body text-sm font-medium text-gray-800 mb-2">
                      {currentContent.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                      placeholder={currentLang === "ja" ? "example@email.com" : "example@email.com"}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block font-body text-sm font-medium text-gray-800 mb-2">
                      {currentContent.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body bg-white/50 backdrop-blur-sm resize-none text-gray-900 placeholder-gray-500"
                      placeholder={currentLang === "ja" ? "プロジェクトの詳細やご質問をお聞かせください..." : "Tell me about your project or ask any questions..."}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-display font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? currentContent.form.sending : currentContent.form.sendButton}
                    </span>
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-shimmer"></div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slideInRight">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                  {currentContent.contactInfo.title}
                </h3>
                <p className="font-body text-gray-700 mb-8">
                  {currentContent.contactInfo.subtitle}
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="group p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-gray-900">Email</h4>
                        <a
                          href="mailto:contact@example.com"
                          className="font-body text-blue-700 hover:text-blue-900 transition-colors duration-300 font-medium"
                        >
                          contact@example.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="group p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl hover:from-gray-100 hover:to-slate-100 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-gray-900">GitHub</h4>
                        <a
                          href="https://github.com/kentoyokozuka"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-gray-800 hover:text-gray-900 transition-colors duration-300 font-medium"
                        >
                          @kentoyokozuka
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="group p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-gray-900">LinkedIn</h4>
                        <a
                          href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-blue-700 hover:text-blue-900 transition-colors duration-300 font-medium"
                        >
                          Kento Yokozuka
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer currentLang={currentLang} />
    </>
  );
}