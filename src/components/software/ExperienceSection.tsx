"use client";

import { Experience } from "@/data/softwareData";

interface ExperienceSectionProps {
  experience: Experience[];
  title: string;
  showMoreText: string;
  showLessText: string;
  showAllExperience: boolean;
  onToggleExperience: () => void;
  currentLang: string;
}

export default function ExperienceSection({
  experience,
  title,
  showMoreText,
  showLessText,
  showAllExperience,
  onToggleExperience,
  currentLang
}: ExperienceSectionProps) {
  const displayedExperience = showAllExperience ? experience : experience.slice(0, 2);

  return (
    <section className="mb-16 animate-slideInUp">
      <h2 className="font-display text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
        {title}
      </h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {displayedExperience.map((exp, index) => {
          const currentExp = exp[currentLang as keyof typeof exp] as Experience["en"];
          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {currentExp.title}
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold">{currentExp.company}</p>
                  <p className="text-gray-400">{currentExp.focus}</p>
                </div>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium group-hover:bg-blue-400/30 transition-colors duration-300 border border-blue-400/30">
                  {currentExp.period}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {currentExp.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentExp.keyTechnologies.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-400/30 shadow-sm hover:bg-indigo-400/30 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce"
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-3">
                {currentExp.achievements.map((achievement: string, achievementIndex: number) => (
                  <li
                    key={achievementIndex}
                    className="flex items-start space-x-3 group-hover:text-gray-100 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={onToggleExperience}
          className="px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white font-display font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse border border-blue-400/30 backdrop-blur-md"
        >
          {showAllExperience ? showLessText : showMoreText}
        </button>
      </div>
    </section>
  );
}