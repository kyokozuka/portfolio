"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UIUXPage() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Pre-generated static values for animations to avoid hydration mismatch
  const floatingElements = [
    { left: "15%", top: "25%", delay: "0s", duration: "4s" },
    { left: "80%", top: "20%", delay: "1.2s", duration: "5s" },
    { left: "25%", top: "75%", delay: "2.1s", duration: "3s" },
    { left: "85%", top: "65%", delay: "0.8s", duration: "6s" },
    { left: "45%", top: "15%", delay: "1.5s", duration: "4s" },
    { left: "20%", top: "55%", delay: "0.3s", duration: "5s" },
    { left: "70%", top: "80%", delay: "2.8s", duration: "3s" },
    { left: "35%", top: "35%", delay: "1.1s", duration: "4s" },
    { left: "55%", top: "45%", delay: "0.6s", duration: "5s" },
    { left: "30%", top: "85%", delay: "2.3s", duration: "3s" },
    { left: "75%", top: "30%", delay: "1.7s", duration: "4s" },
    { left: "10%", top: "70%", delay: "0.9s", duration: "5s" }
  ];

  const pinkElements = [
    { left: "40%", top: "30%", delay: "0.4s", duration: "5s" },
    { left: "65%", top: "40%", delay: "1.8s", duration: "4s" },
    { left: "50%", top: "70%", delay: "0.7s", duration: "6s" },
    { left: "80%", top: "50%", delay: "2.5s", duration: "3s" },
    { left: "25%", top: "80%", delay: "1.3s", duration: "5s" },
    { left: "60%", top: "90%", delay: "0.2s", duration: "4s" },
    { left: "35%", top: "20%", delay: "2.9s", duration: "6s" },
    { left: "70%", top: "60%", delay: "1.6s", duration: "3s" }
  ];

  const designElements = [
    { left: "25%", top: "35%", delay: "0.5s", fontSize: "16px", text: "🎨" },
    { left: "75%", top: "25%", delay: "1.4s", fontSize: "14px", text: "✨" },
    { left: "15%", top: "65%", delay: "0.8s", fontSize: "18px", text: "💡" },
    { left: "85%", top: "55%", delay: "2.2s", fontSize: "12px", text: "🎯" },
    { left: "45%", top: "85%", delay: "1.1s", fontSize: "15px", text: "🚀" },
    { left: "65%", top: "15%", delay: "2.7s", fontSize: "13px", text: "🌟" }
  ];

  const content = {
    en: {
      title: "UI/UX Designer",
      subtitle: "Creating intuitive digital experiences through user-centered design",
      description: "Currently studying UI/UX Design at a Canadian college, focusing on modern design methodologies and hands-on project experience.",
      contact: "Let's Connect"
    },
    ja: {
      title: "UI/UXデザイナー",
      subtitle: "ユーザー中心のデザインで直感的なデジタル体験を創造",
      description: "現在カナダのカレッジでUI/UXデザインを学んでおり、現代的なデザイン手法と実践的なプロジェクト経験に焦点を当てています。",
      contact: "お問い合わせ"
    }
  };

  const currentContent = content[currentLang as keyof typeof content];

  const projects = [
    {
      id: "six-acres",
      title: "Six Acres Restaurant",
      description: "Complete website redesign focusing on improved user experience and modern design principles",
      category: "Web Redesign",
      image: "/projects/sixacres/Redesign_thumnail.jpg"
    },
    {
      id: "task-management",
      title: "Task Management System",
      description: "Design Sprint methodology applied to create an efficient team collaboration platform",
      category: "Web Application",
      image: "/api/placeholder/400/250"
    }
  ];

  const skills = [
    { name: "Figma", category: "Design" },
    { name: "Miro", category: "Collaboration" },
    { name: "Notion", category: "Documentation" },
    { name: "User Research", category: "Research" },
    { name: "Wireframing", category: "Design" },
    { name: "Prototyping", category: "Design" },
    { name: "Usability Testing", category: "Research" },
    { name: "Design Sprint", category: "Methodology" }
  ];

  const experience = [
    {
      title: "UI/UX Design Course",
      institution: "CICCC",
      period: "Current",
      description: "Comprehensive program covering Information Design, Interaction Design, Multi-Platform UI Design, and Design Evaluation"
    }
  ];

  const academicProjects = [
    {
      title: "E-Scooter App",
      description: "Complete design process from briefing to prototyping",
      tools: ["Figma", "Miro", "User Research"]
    },
    {
      title: "E-Learning System",
      description: "Platform design with usability testing and heuristic evaluation",
      tools: ["Figma", "Prototyping", "Usability Testing"]
    },
    {
      title: "Task Management System",
      description: "Design Sprint methodology for team collaboration solution",
      tools: ["Design Sprint", "Figma", "Rapid Prototyping"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {floatingElements.map((element, index) => (
          <div
            key={`purple-${index}`}
            className="absolute w-3 h-3 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration
            }}
          />
        ))}
        {pinkElements.map((element, index) => (
          <div
            key={`pink-${index}`}
            className="absolute w-2 h-2 bg-pink-400/30 rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration
            }}
          />
        ))}
        {/* Design elements */}
        {designElements.map((element, index) => (
          <div
            key={`design-${index}`}
            className="absolute text-purple-400/10 font-mono text-sm animate-pulse"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              fontSize: element.fontSize
            }}
          >
            {element.text}
          </div>
        ))}
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fadeIn">
          <h1 className={`font-display text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {currentContent.title}
          </h1>
          <p className={`font-display text-2xl md:text-3xl text-gray-700 mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.2s' }}>
            {currentContent.subtitle}
          </p>
          <p className={`font-body text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '0.4s' }}>
            {currentContent.description}
          </p>
        </header>

        {/* Skills Grid */}
        <section className="mb-16 animate-slideInUp">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-2 group cursor-pointer"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-sm text-purple-600 font-medium mb-2 group-hover:text-purple-800 transition-colors duration-300">
                  {skill.category}
                </div>
                <div className="font-display font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {skill.name}
                </div>
                <div className="mt-4 w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="mb-16 animate-slideInLeft">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            Portfolio Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/uiux/${project.id}`} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-white/50">
                  <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                    {project.image !== "/api/placeholder/400/250" ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                        <div className="text-4xl mb-2 animate-bounce">📱</div>
                        <div>Project Preview</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium group-hover:bg-purple-200 transition-colors duration-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-6 flex items-center text-purple-600 group-hover:text-purple-800 transition-colors duration-300">
                      <span className="font-medium">View Project</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Education & Experience */}
        <section className="mb-16 animate-slideInRight">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            Education & Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 mb-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {exp.institution}
                    </p>
                  </div>
                  <span className="px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-medium mt-4 md:mt-0 group-hover:bg-green-200 transition-colors duration-300 animate-pulse">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Projects */}
        <section className="mb-16 animate-slideInUp">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">
            Academic Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {academicProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-2 group cursor-pointer"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200 shadow-sm hover:bg-purple-100 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                      style={{ animationDelay: `${toolIndex * 0.1}s` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              {currentContent.contact}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to create amazing user experiences together? Let's discuss your next design project!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-display font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}