"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sixAcresData } from '@/data/uiux/sixAcresData';
import { useUIUXProjectPage } from '@/hooks/uiux/useUIUXProjectPage';

export default function ProjectPage() {
  const { currentLang, setCurrentLang, isLoaded } = useUIUXProjectPage();
  const heroRef = useRef<HTMLDivElement>(null);

  const t = sixAcresData[currentLang as keyof typeof sixAcresData] ?? sixAcresData.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={(lang: string) => setCurrentLang(lang as "en" | "ja")} />

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="relative">
            <h1 className={`text-7xl md:text-9xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 tracking-tight transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {t.title.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              {t.subtitle}
            </h2>
          </div>
        </div>

        {/* Hero Image with Enhanced Styling */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <Image
              src="projects/sixacres/Hero.svg"
              alt="Six Acres Redesign Hero"
              width={1200}
              height={600}
              className="rounded-3xl shadow-2xl w-full object-cover border-4 border-white/80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Info Cards Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`flex flex-wrap gap-6 justify-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.6s' }}>
          <div className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
            <div className="font-bold text-gray-700 mb-2 text-lg">My Role</div>
            <div className="text-xl font-semibold text-amber-700">{t.role}</div>
          </div>
          <div className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
            <div className="font-bold text-gray-700 mb-2 text-lg">Tools</div>
            <div className="text-xl font-semibold text-orange-700">{t.tools}</div>
          </div>
          <div className="group bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 min-w-[200px] text-center">
            <div className="font-bold text-gray-700 mb-2 text-lg">Duration</div>
            <div className="text-xl font-semibold text-yellow-700">{t.duration}</div>
          </div>
        </div>
      </section>

      {/* Final Solution Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            {currentLang === "en" ? "Final Solution" : "最終的な解決策"}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.finalSolution}
          </p>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {currentLang === "en" ? "Before & After" : "Before & After"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Welcome Page */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Welcome</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-600 mb-2">Before</h4>
                  <Image
                    src={t.beforeAfter.welcome.before}
                    alt="Welcome Before"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2">After</h4>
                  <Image
                    src={t.beforeAfter.welcome.after}
                    alt="Welcome After"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>

            {/* Menu Page */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Menu</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-600 mb-2">Before</h4>
                  <Image
                    src={t.beforeAfter.menu.before}
                    alt="Menu Before"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2">After</h4>
                  <Image
                    src={t.beforeAfter.menu.after}
                    alt="Menu After"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>

            {/* Event Page */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Event</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-600 mb-2">Before</h4>
                  <Image
                    src={t.beforeAfter.event.before}
                    alt="Event Before"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2">After</h4>
                  <Image
                    src={t.beforeAfter.event.after}
                    alt="Event After"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>

            {/* Reservation Page */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Reservation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-600 mb-2">Before</h4>
                  <Image
                    src={t.beforeAfter.reservation.before}
                    alt="Reservation Before"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2">After</h4>
                  <Image
                    src={t.beforeAfter.reservation.after}
                    alt="Reservation After"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>

            {/* Contact Page */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-600 mb-2">Before</h4>
                  <Image
                    src={t.beforeAfter.contact.before}
                    alt="Contact Before"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2">After</h4>
                  <Image
                    src={t.beforeAfter.contact.after}
                    alt="Contact After"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {currentLang === "en" ? "Process & Findings" : "プロセスと発見"}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tasks */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {currentLang === "en" ? "User Tasks" : "ユーザータスク"}
              </h3>
              <ul className="space-y-3">
                {t.process.tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-lg">{index + 1}.</span>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Findings */}
            <div className="space-y-8">
              {/* Good Findings */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6">
                  {currentLang === "en" ? "Positive Findings" : "良い発見"}
                </h3>
                <ul className="space-y-3">
                  {t.process.findingsGood.map((finding, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bad Findings */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8">
                <h3 className="text-2xl font-bold text-red-700 mb-6">
                  {currentLang === "en" ? "Areas for Improvement" : "改善点"}
                </h3>
                <ul className="space-y-3">
                  {t.process.findingsBad.map((finding, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">⚠</span>
                      <span className="text-gray-700">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1.4s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            {currentLang === "en" ? "Style Guide" : "スタイルガイド"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Typography</h3>
              <p className="text-gray-700">{t.process.styleGuide.typography}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Colors</h3>
              <p className="text-gray-700">{t.process.styleGuide.colors}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Buttons</h3>
              <p className="text-gray-700">{t.process.styleGuide.buttons}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframe Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            {currentLang === "en" ? "Wireframe Process" : "ワイヤーフレームプロセス"}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t.process.wireframe}
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src="projects/sixacres/Wireframe.svg"
              alt="Wireframe Process"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '1.8s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            {currentLang === "en" ? "Reflection & Learnings" : "振り返りと学び"}
          </h2>

          <div className="space-y-6">
            {t.reflection.map((reflection, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {reflection}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className="text-center">
          <Link
            href="/uiux"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← {t.back}
          </Link>
        </div>
      </section>

      {/* Image Credit */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className="text-center">
          <p className="text-sm text-gray-500 italic">
            {t.imageCredit}
          </p>
        </div>
      </section>

      <Footer currentLang={currentLang} />
    </div>
  );
}