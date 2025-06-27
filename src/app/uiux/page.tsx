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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-2xl text-gray-700 mb-6">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </header>

        {/* Skills Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="text-sm text-purple-600 font-medium mb-1">{skill.category}</div>
                <div className="font-semibold text-gray-900">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <Link key={project.id} href={`/uiux/${project.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    {project.image !== "/api/placeholder/400/250" ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">📱</div>
                        <div>Project Preview</div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
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

        {/* Education & Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education & Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.institution}</p>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {academicProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
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
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.contact}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
            >
              View Dribbble
            </a>
          </div>
        </section>
      </div>

      <Footer currentLang={currentLang} />
    </div>
  );
}