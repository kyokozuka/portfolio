"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/5 via-blue-100/3 to-purple-100/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Floating elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-float"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-20 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <h1 className={`font-display text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {currentContent.title}
              </h1>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
            <p className={`font-display text-2xl md:text-3xl text-gray-300 mb-10 font-light tracking-wide transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              {currentContent.subtitle}
            </p>
            <p className={`font-body text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.4s' }}>
              {currentContent.description}
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slideInLeft">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
              <h3 className="font-display text-3xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {currentContent.form.sendButton}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block font-body text-sm font-medium text-gray-300 mb-3">
                    {currentContent.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 font-body bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 hover:bg-white/15 focus:bg-white/20"
                    placeholder={currentLang === "ja" ? "山田太郎" : "John Doe"}
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block font-body text-sm font-medium text-gray-300 mb-3">
                    {currentContent.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 font-body bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 hover:bg-white/15 focus:bg-white/20"
                    placeholder={currentLang === "ja" ? "example@email.com" : "example@email.com"}
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block font-body text-sm font-medium text-gray-300 mb-3">
                    {currentContent.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 font-body bg-white/10 backdrop-blur-sm resize-none text-white placeholder-gray-400 hover:bg-white/15 focus:bg-white/20"
                    placeholder={currentLang === "ja" ? "プロジェクトの詳細やご質問をお聞かせください..." : "Tell me about your project or ask any questions..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <Icon icon="mdi:loading" className="w-5 h-5 mr-2 animate-spin" />
                        {currentContent.form.sending}
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        {currentContent.form.sendButton}
                      </>
                    )}
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 animate-shimmer"></div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slideInRight">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
              <h3 className="font-display text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {currentContent.contactInfo.title}
              </h3>
              <p className="font-body text-gray-300 mb-8">
                {currentContent.contactInfo.subtitle}
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon icon="mdi:email" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">Email</h4>
                      <a
                        href="mailto:kento.yokozuka@gmail.com"
                        className="font-body text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group-hover:underline"
                      >
                        kento.yokozuka@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon icon="mdi:github" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">GitHub</h4>
                      <a
                        href="https://github.com/kyokozuka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-gray-300 hover:text-white transition-colors duration-300 font-medium group-hover:underline"
                      >
                        @kyokozuka
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon icon="mdi:linkedin" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/kento-yokozuka-26a1731b4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium group-hover:underline"
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

      <Footer currentLang={currentLang} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}