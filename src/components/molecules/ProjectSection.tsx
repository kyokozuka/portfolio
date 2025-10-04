import { ReactNode } from 'react';

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export const ProjectSection = ({
  title,
  children,
  gradientFrom = 'blue-500',
  gradientTo = 'cyan-500',
  className = ''
}: ProjectSectionProps) => {
  return (
    <section className={`mb-20 flex flex-col items-center animate-fadeIn ${className}`}>
      <article className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 rounded-3xl shadow-xl border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
        <header>
          <h2 className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-${gradientFrom} via-cyan-500 to-${gradientTo} bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft`}>
            {title}
          </h2>
        </header>
        {children}
      </article>
    </section>
  );
};
