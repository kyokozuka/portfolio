import Link from "next/link";
import { Icon } from '@iconify/react';

interface ProjectNavigationProps {
  backText: string;
  backLink?: string;
  nextText: string;
  nextLink: string;
}

export default function ProjectNavigation({
  backText,
  backLink = '/software',
  nextText,
  nextLink
}: ProjectNavigationProps) {
  return (
    <section className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn">
      <Link
        href={backLink}
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-2" />
        {backText}
      </Link>

      <Link
        href={nextLink}
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-display font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        {nextText}
        <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
      </Link>
    </section>
  );
}
