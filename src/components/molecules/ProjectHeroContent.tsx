interface ProjectHeroContentProps {
  title: string;
  subtitle: string;
  tagline?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export const ProjectHeroContent = ({
  title,
  subtitle,
  tagline,
  primaryColor = 'blue',
  secondaryColor = 'cyan'
}: ProjectHeroContentProps) => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-16 md:py-24">
      <header className="mb-8">
        <h1 className={`text-7xl md:text-9xl font-black bg-gradient-to-r from-${primaryColor}-600 via-${secondaryColor}-500 to-indigo-600 bg-clip-text text-transparent tracking-tight drop-shadow-2xl text-center animate-slideInLeft`}>
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
      </header>

      <article className="mb-6 transform transition-all duration-500 hover:scale-105">
        <h2 className={`text-2xl md:text-4xl text-gray-900/90 font-bold tracking-wide drop-shadow-lg text-center backdrop-blur-md px-8 py-4 rounded-3xl bg-white/60 border border-white/30 animate-fadeIn delay-300`}>
          <span className="text-gray-800">{subtitle.split(' for ')[0]}</span>
          <span className={`inline-block mx-3 text-${primaryColor}-700 font-extrabold bg-gradient-to-r from-${primaryColor}-100 to-${secondaryColor}-100 px-4 py-2 rounded-full border-2 border-${primaryColor}-200 shadow-lg transform hover:scale-110 transition-transform duration-200`}>
            for
          </span>
          <span className="text-gray-800">{subtitle.split(' for ')[1]}</span>
        </h2>
      </article>

      {tagline && (
        <article className="transform transition-all duration-500 hover:scale-105">
          <p className={`text-xl md:text-3xl text-${primaryColor}-700 font-semibold italic opacity-90 text-center max-w-4xl mx-auto backdrop-blur-md px-8 py-4 rounded-3xl bg-white/40 border border-white/20 animate-fadeIn delay-500 shadow-lg`}>
            {tagline}
          </p>
        </article>
      )}
    </section>
  );
};
