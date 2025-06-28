"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sixAcresData } from '@/data/uiux/sixAcresData';
import { useUIUXProjectPage } from '@/hooks/uiux/useUIUXProjectPage';

export default function ProjectPage() {
  const { currentLang, setCurrentLang } = useUIUXProjectPage();
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

      {/* Enhanced Final Solution Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.8s' }}>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 tracking-tight">
            The Final Solution
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{t.finalSolution}</p>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                style={{ border: 'none' }}
                width="100%"
                height="500"
                src="https://embed.figma.com/proto/84PDR0A84Mnb6PThtQX1Ti/Design_Communication_Assigment--Copy-?page-id=241%3A2815&node-id=240-3509&viewport=2107%2C81%2C0.45&scaling=scale-down&content-scaling=fixed&embed-host=share"
                allowFullScreen
                title="Figma Prototype"
                className="rounded-3xl"
              />
            </div>
            <div className="text-sm text-gray-500 text-center py-4 bg-gradient-to-r from-amber-50 to-orange-50">
              Interactive Prototype (Figma)
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Before/After Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Before & After
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {Object.entries(t.beforeAfter).map(([key, val]: [string, { before: string; after: string }]) => (
            <React.Fragment key={key}>
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="font-bold text-2xl mb-6 text-center text-red-600">Before</div>
                <div className="w-full h-96 overflow-y-auto border border-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={val.before}
                    alt={`Before - ${key}`}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="font-bold text-2xl mb-6 text-center text-green-600">After</div>
                <div className="w-full h-96 overflow-y-auto border border-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={val.after}
                    alt={`After - ${key}`}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Design Process
        </h2>

        {/* Phase 1: Evaluation & Tasks */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Evaluation & User Tasks</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Tasks Given to Users</h4>
              <div className="space-y-4">
                {t.process.tasks.map((task: string) => (
                  <div key={task} className="flex items-start group">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Research Approach</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Conducted user testing with real tasks to identify pain points and opportunities for improvement in the existing restaurant website experience.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 2: Findings */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">User Research & Findings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6 text-green-700">✅ What Worked Well</h4>
              <div className="space-y-4">
                {t.process.findingsGood.map((finding: string) => (
                  <div key={finding} className="flex items-start group">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-red-700">🔧 Areas for Improvement</h4>
              <div className="space-y-4">
                {t.process.findingsBad.map((finding: string) => (
                  <div key={finding} className="flex items-start group">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Style Guide */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Style Guide & Design System</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Typography</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.styleGuide.typography}</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Color Palette</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.styleGuide.colors}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">UI Components</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.styleGuide.buttons}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={t.beforeAfter.welcome.after}
                alt="Style Guide Example"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Phase 4: Wireframing & Prototyping */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">4</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Wireframing & Prototyping</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Design Process</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{t.process.wireframe}</p>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                <h4 className="text-lg font-semibold mb-4 text-gray-700">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">User Flow</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Visual Hierarchy</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Interaction Design</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Responsive Layout</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">Wireframes</h4>
                <div className="w-full h-48 overflow-hidden border border-gray-200 rounded-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="projects/sixacres/Wireframe.svg"
                    alt="Wireframes"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">High-Fidelity Prototype</h4>
                <div className="w-full h-48 overflow-hidden border border-gray-200 rounded-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="projects/sixacres/Prototype.svg"
                    alt="Prototype"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reflection & Learnings */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Reflection & Learnings
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Team Collaboration */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-blue-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Team Collaboration & Communication</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[0]}</p>
            </div>
          </div>

          {/* User-Centered Design */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-green-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">User-Centered Design Approach</h3>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[1]}</p>
            </div>
          </div>

          {/* Design Process & Tools */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-purple-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Design Process & Tool Mastery</h3>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[2]}</p>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-orange-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Future Improvements & Iterations</h3>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{t.reflection[3]}</p>
            </div>
          </div>

          {/* Key Takeaways Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-3xl p-10 border border-gray-200/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">Communication is essential for team alignment</span>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">User feedback shapes design decisions</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">Style guides improve consistency and speed</span>
                </div>
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg">Foundation-first approach leads to better results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Back to Projects Link */}
      <div className="relative z-10 text-center pb-16">
        <Link
          href="/uiux"
          className="group inline-block px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="flex items-center gap-3">
            <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.back}
          </span>
        </Link>
      </div>

      <div className="relative z-10 text-center pb-12 text-sm text-gray-500">
        {t.imageCredit}
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}