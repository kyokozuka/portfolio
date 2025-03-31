import { FC } from 'react';

const SectionTitle: FC<{ id: string, title: string }> = ({ id, title }) => {
  return (
    <section id={id}>
      <h1 className="text-4xl font-bold text-center mb-6 relative inline-block after:block after:h-[2px] after:bg-blue-600 after:w-230 after:mt-2 after:mx-auto">
        {title}
      </h1>
    </section>
  )
}
export default SectionTitle;