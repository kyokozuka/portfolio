export const DesignSprintInfo = () => {
  return (
    <section className="relative z-20 -mt-12 mb-20 flex flex-col items-center">
      <article className="relative flex flex-col md:flex-row justify-center items-center gap-8 bg-gradient-to-r from-blue-200/80 via-cyan-100/80 to-indigo-100/80 px-16 py-12 rounded-[2.5rem] shadow-xl border border-blue-100/40 backdrop-blur-lg animate-fadeIn max-w-5xl w-full mx-auto overflow-visible">
        <span className="text-xl font-black uppercase tracking-widest text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-lg rounded-full px-8 py-3 animate-bounce absolute -top-7 left-1/2 -translate-x-1/2 z-20 border-4 border-white/60">
          Design Sprint
        </span>
        <span className="text-lg font-semibold text-blue-900 bg-white/80 rounded-full px-8 py-3 shadow-md animate-fadeIn delay-100">
          5-day Process
        </span>
        <span className="text-lg font-semibold text-cyan-900 bg-cyan-100/90 rounded-full px-8 py-3 shadow-md animate-fadeIn delay-200">
          Role: <span className="font-bold">Decider</span>
        </span>
      </article>
      <p className="mt-8 text-xl text-gray-800 text-center max-w-2xl animate-fadeIn delay-300 font-semibold italic">
        I led the team as the <span className="text-blue-700 font-bold">Decider</span>, guiding ideation, voting, and final product decisions in a fast-paced, collaborative environment.<br/>
        <span className="text-cyan-600 font-bold">Google Design Sprint</span> allowed us to go from challenge to tested prototype in just 5 days.<br/>
        <span className="text-sm text-gray-600 mt-2 block">
          Based on <a href="https://www.thesprintbook.com/the-design-sprint" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">The Design Sprint methodology</a> by Jake Knapp & John Zeratsky.<br/>
          Our sprint documentation and process tracked on <a href="https://coda.io/d/Group3-Design-Sprint_d7y1CAtYe0g/The-Official-5-Day-Design-Sprint_supbBBqR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Coda.io</a>.
        </span>
      </p>
      <svg className="w-full h-12 md:h-16 -mb-2 animate-float opacity-70" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C360 0 1080 120 1440 60V0H0V60Z" fill="url(#sprintwave)"/>
        <defs>
          <linearGradient id="sprintwave" x1="0" y1="0" x2="1440" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e7ff"/>
            <stop offset="1" stopColor="#cffafe"/>
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};
