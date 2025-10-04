"use client";

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from '@/lib/i18n';
import { useUIUXProjectPage } from '@/features/uiux/hooks/useUIUXProjectPage';
import { AchievyHeroSection } from '@/components/organisms/AchievyHeroSection';
import { DesignSprintInfo } from '@/components/organisms/DesignSprintInfo';
import { DesignSprintProcess } from '@/components/organisms/DesignSprintProcess';
import { ProjectSection } from '@/components/molecules/ProjectSection';
import { FigmaPrototype } from '@/components/organisms/FigmaPrototype';

export default function AchievyPage() {
  const { currentLang, setCurrentLang } = useUIUXProjectPage();
  const { t } = useTranslations('ja');

  if (!t) return null;

  const achievy = t.uiux.achievy;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 relative overflow-x-hidden">

      <article className="container mx-auto px-4 py-16">
        <AchievyHeroSection
          title={achievy.hero.title}
          subtitle={achievy.hero.subtitle}
          tagline={achievy.hero.tagline}
        />

        <DesignSprintInfo />

        <DesignSprintProcess />

        {/* The Final Solution Section */}
        <ProjectSection title="The Final Solution">
          <p className="text-lg text-gray-700 text-center max-w-2xl animate-fadeIn delay-100 font-medium">
            Explore the interactive prototype that brings all our ideas to life. This is the culmination of our 5-day sprint—tested, refined, and ready to inspire confidence for ADHD students.<br/>
            <span className="text-blue-700 font-bold">Try the Figma prototype below!</span>
          </p>
          <FigmaPrototype
            src="https://embed.figma.com/proto/KvN4jj4vxZxKCYMOcljRlI/Kento_Nene_Sayumi_Inori_DesignSprint?page-id=12751%3A7378&node-id=12754-12361&embed-host=share"
            title="Achievy Figma Prototype"
          />
        </ProjectSection>

        {/* Results & Learnings */}
        <ProjectSection title={achievy.result.title} gradientFrom="cyan-500" gradientTo="blue-500">
          <p className="text-lg text-gray-800 text-center max-w-2xl animate-fadeIn delay-100 font-medium leading-relaxed">
            <span className="block text-xl font-bold text-blue-700 mb-2">What did we learn? What&apos;s next?</span>
            <span className="block mb-2">{achievy.result.text.split('\n')[0]}</span>
            <span className="block mb-2 text-cyan-700 font-semibold">{achievy.result.text.split('\n')[1]}</span>
            <span className="block italic text-gray-600">{achievy.result.text.split('\n').slice(2).join(' ')}</span>
          </p>
        </ProjectSection>

        {/* Sitemap */}
        <ProjectSection title="Sitemap" gradientFrom="indigo-500" gradientTo="cyan-500">
          <p className="text-lg text-gray-700 text-center max-w-2xl animate-fadeIn delay-100 font-medium">
            The blueprint of our app&apos;s structure—every screen, every flow, every interaction designed with ADHD students in mind.<br/>
            <span className="text-blue-700 font-bold">See how we organized the experience!</span>
          </p>
          <figure className="flex justify-center w-full animate-fadeIn delay-200">
            <Image
              src="/projects/achievy/sitemap.svg"
              alt="Achievy Sitemap"
              width={600}
              height={800}
              className="rounded-2xl shadow-2xl border border-blue-100/30 hover:scale-105 transition-transform duration-300"
            />
          </figure>
        </ProjectSection>

        {/* Background / Problem */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-100 rounded-3xl shadow-xl border border-orange-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
                {achievy.background.title}
              </h2>
            </header>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-red-700 mb-4">The Challenge We Faced</span>
              <span className="block mb-3 text-lg">{achievy.background.text.split('\n')[0]}</span>
              <span className="block mb-3 text-orange-700 font-semibold">{achievy.background.text.split('\n')[1]}</span>
              <span className="block mb-3 text-yellow-700 font-semibold">{achievy.background.text.split('\n')[2]}</span>
              <span className="block italic text-gray-600">{achievy.background.text.split('\n').slice(3).join(' ')}</span>
            </p>
          </article>
        </section>

        {/* Research & Discovery */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 rounded-3xl shadow-xl border border-green-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
                {achievy.research.title}
              </h2>
            </header>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-green-700 mb-4">Understanding the Real Needs</span>
              <span className="block mb-3">{achievy.research.text.split('\n')[0]}</span>
              <span className="block mb-3 text-emerald-700 font-semibold">{achievy.research.text.split('\n')[1]}</span>
              <span className="block mb-3 text-teal-700 font-semibold">{achievy.research.text.split('\n')[2]}</span>
              <span className="block italic text-gray-600">{achievy.research.text.split('\n').slice(3).join(' ')}</span>
            </p>
            <figure className="w-full flex flex-col items-center animate-fadeIn delay-200">
              <figcaption className="text-lg font-bold text-green-700 mb-4">User Journey Map</figcaption>
              <article className="bg-white/60 rounded-2xl p-8 shadow-2xl border border-green-100/30 hover:shadow-3xl transition-shadow">
                <Image
                  src="/projects/achievy/map.svg"
                  alt="Journey Map"
                  width={600}
                  height={300}
                  className="rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </article>
            </figure>
          </article>
        </section>

        {/* Insights & HMW */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-100 rounded-3xl shadow-xl border border-purple-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
                {achievy.insight.title}
              </h2>
            </header>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-purple-700 mb-4">The Key Questions That Guided Us</span>
              <span className="block mb-3">{achievy.insight.text.split('\n')[0]}</span>
              <span className="block mb-3 text-violet-700 font-semibold">{achievy.insight.text.split('\n')[1]}</span>
              <span className="block mb-4 italic text-gray-600">{achievy.insight.text.split('\n').slice(2).join(' ')}</span>
            </p>
            <article className="w-full max-w-3xl animate-fadeIn delay-200">
              <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">Our &quot;How Might We&quot; Statements</h3>
              <ul className="grid gap-4">
                {achievy.insight.hmw.map((item: string, i: number) => (
                  <li key={i} className="bg-white/60 rounded-2xl p-4 shadow-md border border-purple-100/30 hover:shadow-lg transition-shadow">
                    <span className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-purple-500 bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        {i + 1}
                      </span>
                      <p className="text-lg text-gray-800 font-medium">{item}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </article>
        </section>

        {/* Ideation */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-100 rounded-3xl shadow-xl border border-pink-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
                {achievy.ideation.title}
              </h2>
            </header>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-pink-700 mb-4">From Lightning Speed to Crazy Ideas</span>
              <span className="block mb-3">{achievy.ideation.text.split('\n')[0]}</span>
              <span className="block mb-3 text-rose-700 font-semibold">{achievy.ideation.text.split('\n')[1]}</span>
              <span className="block italic text-gray-600">{achievy.ideation.text.split('\n').slice(2).join(' ')}</span>
            </p>
            <section className="w-full grid md:grid-cols-2 gap-8 justify-center animate-fadeIn delay-200">
              <figure className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-pink-100/30 hover:shadow-lg transition-shadow">
                <figcaption className="text-lg font-bold text-pink-700 mb-4">Crazy 8 Sketch</figcaption>
                <Image
                  src="/projects/achievy/crazy8.jpg"
                  alt="Crazy 8 Sketch"
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <figure className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-pink-100/30 hover:shadow-lg transition-shadow">
                <figcaption className="text-lg font-bold text-pink-700 mb-4">Lightning Demos</figcaption>
                <Image
                  src="/projects/achievy/LightningDemos.svg"
                  alt="Lightning Demos"
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </figure>
            </section>
          </article>
        </section>

        {/* Design & Iteration */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 rounded-3xl shadow-xl border border-amber-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
                {achievy.design.title}
              </h2>
            </header>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-amber-700 mb-4">From Wireframes to Working Prototypes</span>
              <span className="block mb-3">{achievy.design.text.split('\n')[0]}</span>
              <span className="block mb-3 text-yellow-700 font-semibold">{achievy.design.text.split('\n')[1]}</span>
              <span className="block italic text-gray-600">{achievy.design.text.split('\n').slice(2).join(' ')}</span>
            </p>
            <section className="w-full grid md:grid-cols-2 gap-8 justify-center animate-fadeIn delay-200">
              <figure className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-amber-100/30 hover:shadow-lg transition-shadow">
                <figcaption className="text-lg font-bold text-amber-700 mb-4">Storyboard</figcaption>
                <Image
                  src="/projects/achievy/storyboard.svg"
                  alt="Storyboard"
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <figure className="flex flex-col items-center bg-white/60 rounded-2xl p-6 shadow-md border border-amber-100/30 hover:shadow-lg transition-shadow">
                <figcaption className="text-lg font-bold text-amber-700 mb-4">Prototype Screen</figcaption>
                <Image
                  src="/projects/achievy/prototype.svg"
                  alt="Prototype Screen"
                  width={400}
                  height={200}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </figure>
            </section>
          </article>
        </section>

        {/* Usability Testing */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 rounded-3xl shadow-xl border border-slate-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-6 hover:shadow-2xl transition hover-lift">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-500 via-gray-500 to-zinc-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow-xl text-center animate-slideInLeft">
                {achievy.testing.title}
              </h2>
            </header>
            <p className="text-lg text-gray-800 text-center max-w-3xl animate-fadeIn delay-100 font-medium leading-relaxed">
              <span className="block text-xl font-bold text-slate-700 mb-4">Putting Our Ideas to the Test</span>
              <span className="block mb-3">{achievy.testing.text.split('\n')[0]}</span>
              <span className="block mb-3 text-gray-700 font-semibold">{achievy.testing.text.split('\n')[1]}</span>
              <span className="block mb-3 text-zinc-700 font-semibold">{achievy.testing.text.split('\n')[2]}</span>
              <span className="block italic text-gray-600">{achievy.testing.text.split('\n').slice(3).join(' ')}</span>
            </p>
            <article className="w-full max-w-2xl animate-fadeIn delay-200">
              <article className="bg-white/60 rounded-2xl p-6 shadow-md border border-slate-100/30 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-700 mb-3 text-center">Key Testing Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <p className="text-gray-800">&quot;Feels like a friend, not just a to-do list&quot;</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">💡</span>
                    <p className="text-gray-800">Areas for improvement: color design, engagement</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl">🎯</span>
                    <p className="text-gray-800">User feedback validated our core concept</p>
                  </li>
                </ul>
              </article>
            </article>
          </article>
        </section>

        {/* Quote */}
        <section className="mb-20 flex flex-col items-center animate-fadeIn">
          <article className="bg-gradient-to-r from-blue-100 via-cyan-50 to-indigo-100 rounded-2xl shadow-lg border border-blue-100/40 p-8 max-w-5xl w-full mx-auto flex flex-col items-center gap-4 hover:shadow-2xl transition hover-lift">
            <blockquote className="text-2xl md:text-3xl font-extrabold text-blue-700 italic text-center animate-slideInLeft">{achievy.quote}</blockquote>
            <figcaption className="text-base text-gray-500 text-center animate-fadeIn delay-100">— User Feedback</figcaption>
          </article>
        </section>
      </article>

    </main>
  );
}
