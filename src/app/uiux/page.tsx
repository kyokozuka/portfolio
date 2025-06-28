"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UIUXPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Pre-generated static values for animations to avoid hydration mismatch
  const creativeElements = [
    { left: "5%", top: "10%", size: "w-4 h-4", color: "bg-gradient-to-r from-pink-400 to-purple-400", delay: "0s" },
    { left: "90%", top: "15%", size: "w-3 h-3", color: "bg-gradient-to-r from-blue-400 to-cyan-400", delay: "1.2s" },
    { left: "15%", top: "80%", size: "w-5 h-5", color: "bg-gradient-to-r from-yellow-400 to-orange-400", delay: "2.1s" },
    { left: "85%", top: "70%", size: "w-4 h-4", color: "bg-gradient-to-r from-green-400 to-emerald-400", delay: "0.8s" },
    { left: "50%", top: "5%", size: "w-3 h-3", color: "bg-gradient-to-r from-indigo-400 to-purple-400", delay: "1.5s" },
    { left: "10%", top: "60%", size: "w-4 h-4", color: "bg-gradient-to-r from-red-400 to-pink-400", delay: "0.3s" },
    { left: "80%", top: "90%", size: "w-3 h-3", color: "bg-gradient-to-r from-teal-400 to-blue-400", delay: "2.8s" },
    { left: "40%", top: "40%", size: "w-5 h-5", color: "bg-gradient-to-r from-violet-400 to-purple-400", delay: "1.1s" },
    { left: "70%", top: "50%", size: "w-4 h-4", color: "bg-gradient-to-r from-amber-400 to-yellow-400", delay: "0.6s" },
    { left: "30%", top: "95%", size: "w-3 h-3", color: "bg-gradient-to-r from-rose-400 to-pink-400", delay: "2.3s" },
    { left: "75%", top: "25%", size: "w-4 h-4", color: "bg-gradient-to-r from-sky-400 to-blue-400", delay: "1.7s" },
    { left: "2%", top: "75%", size: "w-5 h-5", color: "bg-gradient-to-r from-lime-400 to-green-400", delay: "0.9s" }
  ];

  const designIcons = [
    { left: "25%", top: "35%", icon: "mdi:palette", delay: "0.5s", size: "text-2xl", color: "text-pink-400" },
    { left: "75%", top: "25%", icon: "mdi:vector-square", delay: "1.4s", size: "text-xl", color: "text-blue-400" },
    { left: "15%", top: "65%", icon: "mdi:layers", delay: "0.8s", size: "text-3xl", color: "text-purple-400" },
    { left: "85%", top: "55%", icon: "mdi:format-paint", delay: "2.2s", size: "text-lg", color: "text-cyan-400" },
    { left: "45%", top: "85%", icon: "mdi:brush", delay: "1.1s", size: "text-2xl", color: "text-orange-400" },
    { left: "65%", top: "15%", icon: "mdi:eyedropper", delay: "2.7s", size: "text-xl", color: "text-green-400" },
    { left: "35%", top: "85%", icon: "mdi:shape", delay: "0.3s", size: "text-lg", color: "text-indigo-400" },
    { left: "55%", top: "75%", icon: "mdi:grid", delay: "1.9s", size: "text-2xl", color: "text-yellow-400" }
  ];

  const content = {
    en: {
      title: "UI/UX Designer",
      subtitle: "Turning ideas into beautiful experiences",
      description: "Passionate about creating intuitive, accessible, and beautiful user interfaces. Currently studying UI/UX Design at CICCC, focusing on user-centered design principles and modern design systems.",
      contact: "Let's Create Something Amazing"
    },
    ja: {
      title: "UI/UXデザイナー",
      subtitle: "アイデアを美しい体験に変える",
      description: "直感的でアクセシブル、美しいユーザーインターフェースの作成に情熱を持っています。現在CICCCでUI/UXデザインを学び、ユーザー中心のデザイン原則とモダンなデザインシステムに焦点を当てています。",
      contact: "素晴らしいものを作りましょう"
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  const projects = [
    {
      id: "six-acres",
      title: "Six Acres Restaurant",
      description: "Complete website redesign focusing on improved user experience and modern design principles",
      category: "Web Redesign",
      image: "/projects/sixacres/Redesign_thumnail.jpg",
      tools: ["Figma", "User Research", "Prototyping"],
      color: "from-pink-500 to-purple-600"
    },
    {
      id: "task-management",
      title: "Task Management System",
      description: "Design Sprint methodology applied to create an efficient team collaboration platform",
      category: "Web Application",
      image: "/api/placeholder/400/250",
      tools: ["Design Sprint", "Figma", "User Testing"],
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const skills = [
    { name: "Figma", category: "Design Tools", icon: "logos:figma", level: 90, color: "from-purple-400 to-pink-500" },
    { name: "User Research", category: "Research", icon: "mdi:account-search", level: 85, color: "from-blue-400 to-cyan-500" },
    { name: "Prototyping", category: "Design", icon: "mdi:layers-triple", level: 88, color: "from-green-400 to-emerald-500" },
    { name: "Wireframing", category: "Design", icon: "mdi:vector-square", level: 92, color: "from-orange-400 to-red-500" },
    { name: "Usability Testing", category: "Research", icon: "mdi:test-tube", level: 80, color: "from-indigo-400 to-purple-500" },
    { name: "Design Sprint", category: "Methodology", icon: "mdi:run-fast", level: 85, color: "from-yellow-400 to-orange-500" },
    { name: "Miro", category: "Collaboration", icon: "logos:miro", level: 88, color: "from-pink-400 to-rose-500" },
    { name: "Notion", category: "Documentation", icon: "logos:notion-icon", level: 82, color: "from-slate-400 to-gray-500" }
  ];

  const experience = [
    {
      title: "UI/UX Design Program",
      institution: "CICCC",
      period: "Current",
      description: "Comprehensive program covering Information Design, Interaction Design, Multi-Platform UI Design, and Design Evaluation. Hands-on projects with real-world applications.",
      highlights: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      color: "from-green-400 to-emerald-500"
    }
  ];

  const academicProjects = [
    {
      title: "E-Scooter App",
      description: "Complete design process from user research to high-fidelity prototyping",
      tools: ["Figma", "Miro", "User Research"],
      status: "Completed",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "E-Learning System",
      description: "Platform design with comprehensive usability testing and heuristic evaluation",
      tools: ["Figma", "Prototyping", "Usability Testing"],
      status: "In Progress",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Task Management System",
      description: "Design Sprint methodology for team collaboration solution",
      tools: ["Design Sprint", "Figma", "Rapid Prototyping"],
      status: "Completed",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Creative Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-pink-100/30 animate-pulse"></div>

        {/* Floating creative elements */}
        {creativeElements.map((element, index) => (
          <div
            key={`creative-${index}`}
            className={`absolute ${element.size} ${element.color} rounded-full animate-float blur-sm`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Design icons with colors */}
        {designIcons.map((icon, index) => (
          <div
            key={`icon-${index}`}
            className={`absolute ${icon.color} ${icon.size} animate-pulse opacity-60`}
            style={{
              left: icon.left,
              top: icon.top,
              animationDelay: icon.delay,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <Icon icon={icon.icon} />
          </div>
        ))}

        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-24 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <h1 className={`font-display text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-8 tracking-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {currentContent.title}
              </h1>
              {/* Floating elements around title */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
            <p className={`font-display text-3xl md:text-4xl text-gray-700 mb-10 font-light tracking-wide transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.2s' }}>
              {currentContent.subtitle}
            </p>
            <p className={`font-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '0.4s' }}>
              {currentContent.description}
            </p>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-24 animate-slideInUp">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive toolkit for creating exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Icon icon={skill.icon} className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                    {skill.name}
                  </h3>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium text-gray-600 mb-3">
                      <span>Proficiency</span>
                      <span className="text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="mb-24 animate-slideInLeft">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing design thinking and user-centered solutions
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/uiux/${project.id}`} className="group block">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                      {project.image !== "/api/placeholder/400/250" ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="text-center text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                          <div className="text-6xl mb-4 animate-bounce">📱</div>
                          <div className="text-xl font-bold">Project Preview</div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="lg:w-2/3 p-10 relative">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-display text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-bold group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-6 text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={tool}
                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-bold border border-gray-300 shadow-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-purple-600 group-hover:text-purple-800 transition-colors duration-300 font-bold">
                        <span className="text-lg">View Case Study</span>
                        <svg className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Education & Experience */}
        <section className="mb-24 animate-slideInRight">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Education & Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
                    <div className="flex-1">
                      <h3 className="font-display text-4xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-3">
                        {exp.title}
                      </h3>
                      <p className="text-2xl text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {exp.institution}
                      </p>
                    </div>
                    <span className="px-8 py-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-lg font-bold mt-6 lg:mt-0 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300 animate-pulse">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-8 text-lg">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlight}
                        className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-lg font-bold border border-gray-300 shadow-sm group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Projects */}
        <section className="mb-24 animate-slideInUp">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Academic Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on learning through real-world design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {academicProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      project.status === 'Completed'
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800'
                        : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-8 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-bold border border-gray-300 shadow-sm group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-20 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h2 className="font-display text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 tracking-tight">
                {currentContent.contact}
              </h2>
              <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Ready to create exceptional user experiences together? Let's discuss your next design project and bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-display font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}