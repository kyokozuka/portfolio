import { Icon } from '@iconify/react';
import { UIUXSkill } from '@/data/uiux/uiuxData';

interface UIUXSkillsSectionProps {
  skillsByCategory: Record<string, UIUXSkill[]>;
  categoryColors: Record<string, string>;
}

export default function UIUXSkillsSection({
  skillsByCategory,
  categoryColors
}: UIUXSkillsSectionProps) {
  return (
    <section className="mb-20 animate-slideInLeft">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 tracking-tight">
          Design Skills
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          A comprehensive toolkit for creating exceptional user experiences
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
          <div key={category} className="mb-12">
            <div className="text-center mb-8">
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent mb-4`}>
                {category}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 text-center"
                  style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon icon={skill.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}