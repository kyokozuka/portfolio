import { Icon } from '@iconify/react';
import { UIUXExperience } from '@/data/uiux/uiuxData';

interface UIUXExperienceSectionProps {
  experience: UIUXExperience[];
}

export default function UIUXExperienceSection({ experience }: UIUXExperienceSectionProps) {
  return (
    <section className="mb-20 animate-slideInRight">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">
          Experience & Education
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          My journey in UI/UX design and continuous learning
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <div
            key={exp.title}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 mb-8"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start gap-6">
              <div className={`w-20 h-20 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Icon icon="mdi:school" className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full border border-green-200">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-700 mb-3">{exp.institution}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-sm font-medium rounded-full border border-green-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}