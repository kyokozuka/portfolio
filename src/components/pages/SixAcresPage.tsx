"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from '@/lib/i18n';
import { useUIUXProjectPage } from '@/features/uiux/hooks/useUIUXProjectPage';
import { SixAcresHero } from '@/components/organisms/SixAcresHero';
import { ProjectInfoBadge } from '@/components/atoms/icons/ProjectInfoBadge';
import { BeforeAfterGallery } from '@/components/organisms/BeforeAfterGallery';

export default function SixAcresPage() {
  const { currentLang, setCurrentLang } = useUIUXProjectPage();
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslations('ja');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!t) return null;

  const sixAcres = t.uiux.sixAcres;

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <section className="fixed inset-0 pointer-events-none z-0">
        <span className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse block" />
        <span className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse block" style={{animationDelay: '3s'}} />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse block" style={{animationDelay: '1.5s'}} />
      </section>

      <SixAcresHero title={sixAcres.title} subtitle={sixAcres.subtitle} />

      {/* Info Cards Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <article className={`flex flex-wrap gap-6 justify-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.6s' }}>
          <ProjectInfoBadge label="My Role" value={sixAcres.role} colorClass="text-amber-700" />
          <ProjectInfoBadge label="Tools" value={sixAcres.tools} colorClass="text-orange-700" />
          <ProjectInfoBadge label="Duration" value={sixAcres.duration} colorClass="text-yellow-700" />
        </article>
      </section>

      {/* Final Solution Section */}
      <section className="relative z-10 container mx-auto px-4 pb-16">
        <article className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '0.8s' }}>
          <header>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 tracking-tight">
              The Final Solution
            </h2>
          </header>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{sixAcres.finalSolution}</p>

          <figure className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <iframe
              style={{ border: 'none' }}
              width="100%"
              height="500"
              src="https://embed.figma.com/proto/84PDR0A84Mnb6PThtQX1Ti/Design_Communication_Assigment--Copy-?page-id=241%3A2815&node-id=240-3509&viewport=2107%2C81%2C0.45&scaling=scale-down&content-scaling=fixed&embed-host=share"
              allowFullScreen
              title="Figma Prototype"
              className="rounded-3xl"
            />
            <figcaption className="text-sm text-gray-500 text-center py-4 bg-gradient-to-r from-amber-50 to-orange-50">
              Interactive Prototype (Figma)
            </figcaption>
          </figure>
        </article>
      </section>

      <BeforeAfterGallery items={sixAcres.beforeAfter} />

      {/* Process Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <header>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
            Design Process
          </h2>
        </header>

        {/* Phase 1: Evaluation & Tasks */}
        <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <header className="flex items-center mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">1</span>
            </span>
            <h3 className="text-3xl font-bold text-gray-900">Evaluation & User Tasks</h3>
          </header>
          <section className="grid md:grid-cols-2 gap-8">
            <article>
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Tasks Given to Users</h4>
              <ul className="space-y-4">
                {sixAcres.process.tasks.map((task: string) => (
                  <li key={task} className="flex items-start group">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                    <span className="text-gray-700 text-lg leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Research Approach</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Conducted user testing with real tasks to identify pain points and opportunities for improvement in the existing restaurant website experience.
              </p>
            </article>
          </section>
        </article>

        {/* Phase 2: Findings */}
        <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <header className="flex items-center mb-8">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">2</span>
            </span>
            <h3 className="text-3xl font-bold text-gray-900">User Research & Findings</h3>
          </header>
          <section className="grid md:grid-cols-2 gap-8">
            <article>
              <h4 className="text-xl font-semibold mb-6 text-green-700">✅ What Worked Well</h4>
              <ul className="space-y-4">
                {sixAcres.process.findingsGood.map((finding: string) => (
                  <li key={finding} className="flex items-start group">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                    <span className="text-gray-700 text-lg leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <h4 className="text-xl font-semibold mb-6 text-red-700">🔧 Areas for Improvement</h4>
              <ul className="space-y-4">
                {sixAcres.process.findingsBad.map((finding: string) => (
                  <li key={finding} className="flex items-start group">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-3 h-3 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                    <span className="text-gray-700 text-lg leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </article>

        {/* Phase 3: Style Guide */}
        <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 mb-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <header className="flex items-center mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">3</span>
            </span>
            <h3 className="text-3xl font-bold text-gray-900">Style Guide & Design System</h3>
          </header>
          <section className="grid md:grid-cols-2 gap-8">
            <article className="space-y-6">
              <article className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Typography</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{sixAcres.process.styleGuide.typography}</p>
              </article>
              <article className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Color Palette</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{sixAcres.process.styleGuide.colors}</p>
              </article>
              <article className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">UI Components</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{sixAcres.process.styleGuide.buttons}</p>
              </article>
            </article>
            <figure className="flex items-center justify-center">
              <Image
                src={sixAcres.beforeAfter.welcome.after}
                alt="Style Guide Example"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover hover:scale-105 transition-transform duration-500"
              />
            </figure>
          </section>
        </article>

        {/* Phase 4: Wireframing & Prototyping */}
        <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-10 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <header className="flex items-center mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
              <span className="text-white font-bold text-2xl">4</span>
            </span>
            <h3 className="text-3xl font-bold text-gray-900">Wireframing & Prototyping</h3>
          </header>
          <section className="grid md:grid-cols-2 gap-8">
            <article className="space-y-6">
              <article className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Design Process</h4>
                <p className="text-gray-700 text-lg leading-relaxed">{sixAcres.process.wireframe}</p>
              </article>
              <article className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                <h4 className="text-lg font-semibold mb-4 text-gray-700">Key Focus Areas</h4>
                <nav className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">User Flow</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Visual Hierarchy</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Interaction Design</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">Responsive Layout</span>
                </nav>
              </article>
            </article>
            <article className="space-y-6">
              <figure>
                <figcaption className="text-lg font-semibold mb-4 text-gray-700">Wireframes</figcaption>
                <article className="w-full h-48 overflow-hidden border border-gray-200 rounded-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/projects/sixacres/Wireframe.svg"
                    alt="Wireframes"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </article>
              </figure>
              <figure>
                <figcaption className="text-lg font-semibold mb-4 text-gray-700">High-Fidelity Prototype</figcaption>
                <article className="w-full h-48 overflow-hidden border border-gray-200 rounded-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/projects/sixacres/Prototype.svg"
                    alt="Prototype"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </article>
              </figure>
            </article>
          </section>
        </article>
      </section>

      {/* Reflection & Learnings */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <header>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
            Reflection & Learnings
          </h2>
        </header>

        <article className="max-w-6xl mx-auto space-y-8">
          {/* Team Collaboration */}
          <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-blue-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <header className="flex items-center mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">👥</span>
              </span>
              <h3 className="text-3xl font-bold text-gray-900">Team Collaboration & Communication</h3>
            </header>
            <article className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{sixAcres.reflection[0]}</p>
            </article>
          </article>

          {/* User-Centered Design */}
          <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-green-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <header className="flex items-center mb-8">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🎯</span>
              </span>
              <h3 className="text-3xl font-bold text-gray-900">User-Centered Design Approach</h3>
            </header>
            <article className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{sixAcres.reflection[1]}</p>
            </article>
          </article>

          {/* Design Process & Tools */}
          <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-purple-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <header className="flex items-center mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🛠️</span>
              </span>
              <h3 className="text-3xl font-bold text-gray-900">Design Process & Tool Mastery</h3>
            </header>
            <article className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{sixAcres.reflection[2]}</p>
            </article>
          </article>

          {/* Future Improvements */}
          <article className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border-l-4 border-orange-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <header className="flex items-center mb-8">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                <span className="text-white text-2xl">🚀</span>
              </span>
              <h3 className="text-3xl font-bold text-gray-900">Future Improvements & Iterations</h3>
            </header>
            <article className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50">
              <p className="text-gray-700 leading-relaxed text-xl">{sixAcres.reflection[3]}</p>
            </article>
          </article>

          {/* Key Takeaways Summary */}
          <article className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-3xl p-10 border border-gray-200/50 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Takeaways</h3>
            <section className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                  <span className="text-gray-700 text-lg">Communication is essential for team alignment</span>
                </li>
                <li className="flex items-start group">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                  <span className="text-gray-700 text-lg">User feedback shapes design decisions</span>
                </li>
              </ul>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                  <span className="text-gray-700 text-lg">Style guides improve consistency and speed</span>
                </li>
                <li className="flex items-start group">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-4 h-4 mt-3 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 block" />
                  <span className="text-gray-700 text-lg">Foundation-first approach leads to better results</span>
                </li>
              </ul>
            </section>
          </article>
        </article>
      </section>

      {/* Back to Projects Link */}
      <nav className="relative z-10 text-center pb-16">
        <Link
          href="/uiux"
          className="group inline-block px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="flex items-center gap-3">
            <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {sixAcres.back}
          </span>
        </Link>
      </nav>

      <footer className="relative z-10 text-center pb-12 text-sm text-gray-500">
        {sixAcres.imageCredit}
      </footer>

    </main>
  );
}
