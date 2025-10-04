import Link from "next/link";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { GradientBadge } from '@/components/atoms/icons/GradientBadge';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
}

export const ProjectCard = ({ id, title, description, image, category, tools }: ProjectCardProps) => {
  return (
    <Link href={`/uiux/${id}`} className="group">
      <article className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
        <figure className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <header className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-semibold rounded-full shadow-lg">
              {category}
            </span>
          </header>
        </figure>
        <section className="p-8">
          <header>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
              {title}
            </h3>
          </header>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          <nav className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool, toolIndex) => (
              <GradientBadge
                key={toolIndex}
                text={tool}
                colorFrom="purple-100"
                colorTo="pink-100"
              />
            ))}
          </nav>
          <footer className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
            <span>View Project</span>
            <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </footer>
        </section>
      </article>
    </Link>
  );
};
