import { ProcessDayCard } from '@/components/molecules/ProcessDayCard';

const processSteps = [
  { day: 'Monday', title: 'Map', desc: 'Define the problem and create a user journey map' },
  { day: 'Tuesday', title: 'Sketch', desc: 'Generate solutions through Lightning Demos & Crazy 8' },
  { day: 'Wednesday', title: 'Decide', desc: 'Choose the best solutions and create storyboard' },
  { day: 'Thursday', title: 'Prototype', desc: 'Build a realistic prototype in Figma' },
  { day: 'Friday', title: 'Test', desc: 'Validate with 5 target users' }
];

export const DesignSprintProcess = () => {
  return (
    <section className="mb-20 flex flex-col items-center animate-fadeIn">
      <article className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 rounded-3xl shadow-xl border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-8 hover:shadow-2xl transition hover-lift">
        <header>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
            Our Design Sprint Journey
          </h2>
        </header>

        <article className="w-full max-w-4xl animate-fadeIn delay-100">
          <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">The 5-Day Sprint Process</h3>
          <section className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <ProcessDayCard
                key={i}
                day={step.day}
                title={step.title}
                description={step.desc}
              />
            ))}
          </section>
        </article>

        {/* Tools & Resources */}
        <article className="w-full max-w-4xl animate-fadeIn delay-200">
          <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Tools & Resources</h3>
          <section className="grid md:grid-cols-2 gap-6">
            <article className="bg-white/70 rounded-2xl p-6 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-blue-800 mb-3">Methodology & Documentation</h4>
              <nav className="space-y-3">
                <span className="flex items-center gap-3">
                  <span className="text-blue-500 text-xl">📚</span>
                  <a href="https://www.thesprintbook.com/the-design-sprint" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    The Design Sprint by Jake Knapp & John Zeratsky
                  </a>
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-blue-500 text-xl">📋</span>
                  <a href="https://coda.io/d/Group3-Design-Sprint_d7y1CAtYe0g/The-Official-5-Day-Design-Sprint_supbBBqR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Our Sprint Documentation on Coda.io
                  </a>
                </span>
              </nav>
            </article>
            <article className="bg-white/70 rounded-2xl p-6 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-blue-800 mb-3">Design & Prototyping</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 text-xl">🎨</span>
                  <span className="text-gray-800 font-medium">Figma for prototyping</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 text-xl">✏️</span>
                  <span className="text-gray-800 font-medium">Pen & paper for sketching</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 text-xl">📱</span>
                  <span className="text-gray-800 font-medium">User testing with real devices</span>
                </li>
              </ul>
            </article>
          </section>
        </article>

        {/* Team & Role */}
        <article className="w-full max-w-4xl animate-fadeIn delay-300">
          <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Team & My Role</h3>
          <article className="bg-white/70 rounded-2xl p-6 shadow-md border border-blue-100/30 hover:shadow-lg transition-shadow text-center">
            <p className="text-lg text-gray-800 mb-4">
              As the <span className="text-blue-700 font-bold">Decider</span>, I led the team through critical decision-making moments,
              ensuring we stayed focused and moved efficiently through each phase of the sprint.
            </p>
            <p className="text-gray-700">
              Our diverse team brought together different perspectives and skills,
              allowing us to tackle the ADHD student challenge from multiple angles
              and create a solution that truly addresses user needs.
            </p>
          </article>
        </article>
      </article>
    </section>
  );
};
