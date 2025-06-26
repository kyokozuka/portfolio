"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UIUXPage() {
  const [currentLang, setCurrentLang] = useState("en");

  const content = {
    en: {
      title: "UI/UX Designer",
      description: "Creating intuitive and engaging digital experiences through user-centered design thinking. Using data-driven approaches to deliver solutions that meet both business goals and user needs.",
      sections: {
        skills: "Design Skills",
        process: "Design Process",
        projects: "Design Projects",
        experience: "Experience",
        highlights: "Portfolio Highlights",
        contact: "Let's Work Together"
      },
      contact: {
        description: "Ready to create something amazing? Let's discuss your project.",
        getInTouch: "Get in Touch",
        viewDribbble: "View Dribbble"
      }
    },
    ja: {
      title: "UI/UXデザイナー",
      description: "ユーザー中心のデザイン思考を通じて、直感的で魅力的なデジタル体験を作成します。データ駆動型アプローチを使用して、ビジネス目標とユーザーニーズの両方を満たすソリューションを提供します。",
      sections: {
        skills: "デザインスキル",
        process: "デザインプロセス",
        projects: "デザインプロジェクト",
        experience: "経験",
        highlights: "ポートフォリオハイライト",
        contact: "一緒に働きましょう"
      },
      contact: {
        description: "素晴らしいものを作る準備はできていますか？プロジェクトについて話し合いましょう。",
        getInTouch: "お問い合わせ",
        viewDribbble: "Dribbbleを見る"
      }
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  const projects = [
    {
      id: "mobile-app-design",
      title: "Mobile App Design",
      description: "UI/UX design and prototyping for fintech app",
      category: "Mobile App",
      image: "/api/placeholder/400/250"
    },
    {
      id: "web-platform",
      title: "Web Platform Redesign",
      description: "Complete redesign of enterprise web platform",
      category: "Web Design",
      image: "/api/placeholder/400/250"
    },
    {
      id: "design-system",
      title: "Design System",
      description: "Comprehensive design system for enterprise brand",
      category: "Design System",
      image: "/api/placeholder/400/250"
    }
  ];

  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"] },
    { category: "Prototyping", items: ["Framer", "ProtoPie", "Axure RP", "Adobe Creative Suite"] },
    { category: "Research", items: ["User Research", "Usability Testing", "A/B Testing", "Analytics"] },
    { category: "Design Process", items: ["Design Thinking", "User Journey", "Wireframing", "Visual Design"] }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Conduct user research, competitive analysis, and understand business requirements to clarify project direction."
    },
    {
      step: "02",
      title: "Ideation & Strategy",
      description: "Create user journey maps, personas, and information architecture to develop strategic approach."
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Create wireframes, prototypes, and visual designs while validating usability."
    },
    {
      step: "04",
      title: "Testing & Iteration",
      description: "Conduct usability testing, gather feedback, and implement continuous improvements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </header>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.sections.skills}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.sections.process}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.sections.projects}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/uiux/${project.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.sections.experience}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Senior UI/UX Designer
                  </h3>
                  <p className="text-gray-600">Design Studio ABC</p>
                  <p className="text-sm text-gray-500">2021 - Present</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">
                    Leading UI/UX design for enterprise web applications. Building design systems,
                    conducting usability testing, and leading design teams.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Product Designer
                  </h3>
                  <p className="text-gray-600">Tech Startup XYZ</p>
                  <p className="text-sm text-gray-500">2019 - 2021</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">
                    Handled product design for mobile applications. Managed everything from user research
                    to prototype creation and visual design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentContent.sections.highlights}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Design</h3>
              <p className="text-gray-600 text-sm">Creating beautiful and functional visual designs that enhance user experience.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User Research</h3>
              <p className="text-gray-600 text-sm">Conducting comprehensive user research to understand needs and pain points.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prototyping</h3>
              <p className="text-gray-600 text-sm">Building interactive prototypes to test and validate design solutions.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentContent.sections.contact}
          </h2>
          <p className="text-gray-600 mb-6">
            {currentContent.contact.description}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:contact@example.com"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {currentContent.contact.getInTouch}
            </a>
            <a
              href="https://dribbble.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {currentContent.contact.viewDribbble}
            </a>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}