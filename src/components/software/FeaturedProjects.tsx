"use client";

import Link from "next/link";
import { Icon } from '@iconify/react';
import { FeaturedProject } from "@/data/softwareData";

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
  title: string;
  currentLang: string;
}

export default function FeaturedProjects({ projects, title, currentLang }: FeaturedProjectsProps) {
  return (
    <section className="mb-16 animate-slideInUp">
      <h2 className="font-display text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const currentProject = project[currentLang as keyof typeof project] as FeaturedProject["en"];
          const projectId = project.id;

          // Color mapping for better visual consistency
          const colorMap = {
            green: {
              bg: "from-green-500/10 to-emerald-500/10",
              border: "border-green-400/20",
              icon: "text-green-400",
              tech: "bg-green-500/20 text-green-300 border-green-400/30",
              impact: "bg-green-500/20 text-green-300 border-green-400/30"
            },
            blue: {
              bg: "from-blue-500/10 to-cyan-500/10",
              border: "border-blue-400/20",
              icon: "text-blue-400",
              tech: "bg-blue-500/20 text-blue-300 border-blue-400/30",
              impact: "bg-blue-500/20 text-blue-300 border-blue-400/30"
            },
            emerald: {
              bg: "from-emerald-500/10 to-teal-500/10",
              border: "border-emerald-400/20",
              icon: "text-emerald-400",
              tech: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
              impact: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
            }
          };

          const colors = colorMap[project.color as keyof typeof colorMap] || colorMap.green;

          return (
            <Link
              key={index}
              href={`/software/${projectId}`}
              className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header with icon and title */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 ${colors.border}`}>
                    <Icon icon={project.icon} className={`w-6 h-6 ${colors.icon} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300 flex-1">
                    {currentProject.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${colors.tech} rounded-full text-xs font-medium shadow-sm hover:scale-105 transition-all duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                  {currentProject.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs font-medium border border-gray-400/30">
                      +{currentProject.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer with period and impact */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {currentProject.period}
                  </div>
                  <div className={`px-4 py-2 ${colors.impact} rounded-full text-xs font-semibold shadow-sm group-hover:scale-105 transition-all duration-300`}>
                    {currentProject.impact}
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon icon="mdi:arrow-top-right" className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}