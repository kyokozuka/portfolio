"use client";

import { Icon } from '@iconify/react';
import { CoreExpertise as CoreExpertiseType } from "@/data/softwareData";

interface CoreExpertiseProps {
  expertise: CoreExpertiseType[];
  title: string;
}

export default function CoreExpertise({ expertise, title }: CoreExpertiseProps) {
  return (
    <section className="mb-16 animate-slideInLeft">
      <h2 className="font-display text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 group cursor-pointer"
            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
          >
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-${item.color}-400/30 group-hover:to-${item.color}-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border border-${item.color}-400/30`}>
                <Icon icon={item.icon} className={`w-8 h-8 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {item.category}
              </h3>
              <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 bg-${item.color}-500/20 text-${item.color}-300 rounded-full text-sm font-semibold border border-${item.color}-400/30 shadow-sm hover:bg-${item.color}-400/30 transition-all duration-300 hover:scale-110 hover:shadow-md group-hover:animate-bounce`}
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}