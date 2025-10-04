import Image from 'next/image';
import { BeforeAfterImages } from '@/types/uiuxProjectCommon';

interface BeforeAfterGalleryProps {
  items: Record<string, BeforeAfterImages>;
}

export const BeforeAfterGallery = ({ items }: BeforeAfterGalleryProps) => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-16">
      <header>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Before & After
        </h2>
      </header>
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {Object.entries(items).map(([key, val]) => (
          <>
            <article key={`${key}-before`} className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <header className="font-bold text-2xl mb-6 text-center text-red-600">Before</header>
              <figure className="w-full h-96 overflow-y-auto border border-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={val.before}
                  alt={`Before - ${key}`}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </figure>
            </article>
            <article key={`${key}-after`} className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <header className="font-bold text-2xl mb-6 text-center text-green-600">After</header>
              <figure className="w-full h-96 overflow-y-auto border border-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={val.after}
                  alt={`After - ${key}`}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </figure>
            </article>
          </>
        ))}
      </section>
    </section>
  );
};
