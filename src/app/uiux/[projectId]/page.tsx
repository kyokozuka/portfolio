"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const [currentLang, setCurrentLang] = useState("en");

  // --- Content (EN/JA) ---
  const content = {
    en: {
      title: "Redesign",
      subtitle: "Six Acres Restaurant",
      role: "UX/UI Designer",
      tools: "Figma, Notion",
      duration: "1 Week",
      finalSolution: "A comprehensive redesign of the Six Acres restaurant website, focused on improving usability, visual appeal, and the overall dining experience. The new design features a modern, friendly look and clear navigation, making it easy for users to find information and book a table.",
      beforeAfter: {
        welcome: { before: "/projects/sixacres/Before/Welcome.svg", after: "/projects/sixacres/After/Welcome.svg" },
        menu: { before: "/projects/sixacres/Before/Menu.svg", after: "/projects/sixacres/After/Menu.svg" },
        event: { before: "/projects/sixacres/Before/Event.svg", after: "/projects/sixacres/After/Event.svg" },
        reservation: { before: "/projects/sixacres/Before/Reservation.svg", after: "/projects/sixacres/After/Reservation.svg" },
        contact: { before: "/projects/sixacres/Before/Contact.svg", after: "/projects/sixacres/After/Contact.svg" },
      },
      process: {
        tasks: [
          "Find the happy hour time",
          "Locate the restaurant's address",
          "Discover details about the 'Good Wing Mondays' event",
          "Find the Instagram page",
          "Find out how much it costs to rent the restaurant space"
        ],
        findingsGood: [
          "Most users found the overall layout clear and appreciated the structure compared to the original version.",
          "The colorful design and improved alignment created a more lively, approachable feel.",
          "Information was easier to locate compared to the original, which had a gray, flat atmosphere."
        ],
        findingsBad: [
          "The hero image lacked contrast, making the text hard to read.",
          "The logo was not very visible. Using a bolder gold or switching to black was suggested.",
          "Users struggled to find social links like Instagram, as they were just text links without icons.",
          "Menu navigation was inconvenient due to PDF links.",
          "Some inconsistencies were noted between the location details on the contact and reservation pages.",
          "UI elements like input font size, button spacing, and section icons were cited as areas to improve.",
          "There was no clear happy hour info, and footer content (e.g. contact info) was minimal."
        ],
        styleGuide: {
          typography: "DIN Condensed for modern, minimal, slightly industrial character. Large headings, clean body text, multiple weights.",
          colors: "Warm, welcoming tones. Primary Yellow #FFF865, Deep Burgundy #6D0E0F, Cream #FFF7EB, balanced text colors.",
          buttons: "Rounded, clear, with strong contrast for CTAs."
        },
        wireframe: "Started with low-fidelity wireframes to define layout and user flow, then created high-fidelity prototypes in Figma. This allowed for realistic interaction testing and clear team communication. The goal was intuitive navigation, visual clarity, and a seamless user experience before development."
      },
      reflection: [
        "This project helped me realize how essential communication is when working on a team. Throughout the redesign process, I noticed that without consistent conversations, the project could easily drift in different directions. Aligning on a shared vision early and maintaining that alignment was key to delivering a cohesive experience.",
        "I also learned how valuable user feedback is — hearing real impressions helped me understand how each page could better serve its purpose. This shaped how I approached design decisions and deepened my sense of user empathy.",
        "Additionally, I gained hands-on experience with design tools like Figma and Notion, and I became more confident in building and applying a style guide. Establishing visual consistency through reusable components helped improve both design speed and quality.",
        "If I were to do this project again, I would spend more time upfront defining foundational elements like the style guide, component system, and user flow. That way, I could cycle through design and evaluation more effectively — leading to faster iterations and a stronger final product."
      ],
      back: "Back to UI/UX Projects",
      imageCredit: "All images are quoted from the official Six Acres website for design study purposes."
    },
    ja: {
      // ...日本語訳（省略。必要なら追加）...
    }
  };
  // Use only English content for now, with explicit type
  type ContentType = typeof content.en;
  const t: ContentType = content.en;

  return (
    <div className="min-h-screen bg-[#FFF7EB] text-gray-900 font-sans">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      {/* Hero Title Section */}
      <section className="container mx-auto px-4 pt-16 pb-2 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-gray-900 tracking-tight animate-fadeinup" style={{ animationDelay: '0.1s' }}>{t.title}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 animate-fadeinup" style={{ animationDelay: '0.25s' }}>{t.subtitle}</h2>
      </section>

      {/* Hero Section - Large Visual */}
      <section className="container mx-auto px-4 pt-0 pb-8 flex flex-col items-center animate-fadeinup" style={{ animationDelay: '0.4s' }}>
        <img src="/projects/sixacres/Hero.svg" alt="Six Acres Redesign Hero" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover border-4 border-white mb-10" />
      </section>

      {/* Info Cards Section */}
      <section className="container mx-auto px-4 pb-8 flex flex-col items-center animate-fadeinup" style={{ animationDelay: '0.6s' }}>
        <div className="flex flex-wrap gap-6 justify-center mb-2">
          <div className="bg-white/70 rounded-lg px-6 py-4 shadow border border-gray-100 min-w-[160px] text-center">
            <div className="font-bold text-gray-700 mb-1">My Role</div>
            <div>{t.role}</div>
          </div>
          <div className="bg-white/70 rounded-lg px-6 py-4 shadow border border-gray-100 min-w-[160px] text-center">
            <div className="font-bold text-gray-700 mb-1">Tools</div>
            <div>{t.tools}</div>
          </div>
          <div className="bg-white/70 rounded-lg px-6 py-4 shadow border border-gray-100 min-w-[160px] text-center">
            <div className="font-bold text-gray-700 mb-1">Duration</div>
            <div>{t.duration}</div>
          </div>
        </div>
      </section>

      {/* The Final Solution Section */}
      <section className="container mx-auto px-4 pb-8 flex flex-col items-center animate-fadeinup" style={{ animationDelay: '0.8s' }}>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">The Final Solution</h2>
        <p className="mb-6 max-w-2xl text-lg text-gray-800 leading-relaxed text-center">{t.finalSolution}</p>
        <div className="w-full max-w-2xl mx-auto my-6 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <div className="aspect-w-16 aspect-h-9">
            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="450" src="https://embed.figma.com/proto/84PDR0A84Mnb6PThtQX1Ti/Design_Communication_Assigment--Copy-?page-id=241%3A2815&node-id=240-3509&viewport=2107%2C81%2C0.45&scaling=scale-down&content-scaling=fixed&embed-host=share" allowFullScreen title="Figma Prototype"></iframe>
          </div>
          <div className="text-xs text-gray-500 text-center py-2">Interactive Prototype (Figma)</div>
        </div>
      </section>

      {/* Final Design Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Final Design</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(t.beforeAfter).map(([key, val]: [string, { before: string; after: string }]) => (
            <React.Fragment key={key}>
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <div className="font-semibold text-lg mb-4 text-gray-800">Before</div>
                <div className="w-full h-96 overflow-y-auto border border-gray-200 rounded-lg">
                  <img src={val.before} alt={`Before - ${key}`} className="w-full object-cover" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <div className="font-semibold text-lg mb-4 text-gray-800">After</div>
                <div className="w-full h-96 overflow-y-auto border border-gray-200 rounded-lg">
                  <img src={val.after} alt={`After - ${key}`} className="w-full object-cover" />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
      {/* Process Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Process</h2>

        {/* Phase 1: Evaluation & Tasks */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Evaluation & User Tasks</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Tasks Given to Users</h4>
              <div className="space-y-3">
                {t.process.tasks.map((task: string, i: number) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Research Approach</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Conducted user testing with real tasks to identify pain points and opportunities for improvement in the existing restaurant website experience.
              </p>
            </div>
          </div>
        </div>

        {/* Phase 2: Findings */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">User Research & Findings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-700">✅ What Worked Well</h4>
              <div className="space-y-3">
                {t.process.findingsGood.map((finding: string, i: number) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-700">🔧 Areas for Improvement</h4>
              <div className="space-y-3">
                {t.process.findingsBad.map((finding: string, i: number) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-red-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Style Guide */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Style Guide & Design System</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Typography</h4>
                <p className="text-gray-700 text-sm">{t.process.styleGuide.typography}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Color Palette</h4>
                <p className="text-gray-700 text-sm">{t.process.styleGuide.colors}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">UI Components</h4>
                <p className="text-gray-700 text-sm">{t.process.styleGuide.buttons}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={t.beforeAfter.welcome.after} alt="Style Guide Example" className="rounded-lg shadow-md w-full max-w-sm object-cover" />
            </div>
          </div>
        </div>

        {/* Phase 4: Wireframing & Prototyping */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold text-xl">4</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Wireframing & Prototyping</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Design Process</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{t.process.wireframe}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-2 text-gray-600">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">User Flow</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">Visual Hierarchy</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">Interaction Design</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">Responsive Layout</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-600">Wireframes</h4>
                <div className="w-full h-48 overflow-y-auto border border-gray-200 rounded-lg">
                  <img src="/projects/sixacres/Wireframe.svg" alt="Wireframes" className="w-full object-cover" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-600">High-Fidelity Prototype</h4>
                <div className="w-full h-48 overflow-y-auto border border-gray-200 rounded-lg">
                  <img src="/projects/sixacres/Prototype.svg" alt="Prototype" className="w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reflection & Learnings */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Reflection & Learnings</h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Team Collaboration */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Team Collaboration & Communication</h3>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-lg">{t.reflection[0]}</p>
            </div>
          </div>

          {/* User-Centered Design */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-green-600 text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">User-Centered Design Approach</h3>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-lg">{t.reflection[1]}</p>
            </div>
          </div>

          {/* Design Process & Tools */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-purple-600 text-xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Design Process & Tool Mastery</h3>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-lg">{t.reflection[2]}</p>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-orange-600 text-xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Future Improvements & Iterations</h3>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-lg">{t.reflection[3]}</p>
            </div>
          </div>

          {/* Key Takeaways Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Communication is essential for team alignment</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">User feedback shapes design decisions</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-500 rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Style guides improve consistency and speed</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full w-3 h-3 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Foundation-first approach leads to better results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Back to Projects Link */}
      <div className="text-center pb-4">
        <Link href="/uiux" className="inline-block px-8 py-3 bg-yellow-300 text-gray-900 font-bold rounded-lg shadow hover:bg-yellow-400 transition-colors">{t.back}</Link>
      </div>
      <div className="text-center pb-12 text-xs text-gray-500">
        {t.imageCredit}
      </div>
      <Footer currentLang={currentLang} />
      <style jsx global>{`
        @keyframes fadeinup {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeinup {
          animation: fadeinup 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </div>
  );
}