'use client';

import Link from 'next/link';
import { Header, Footer } from '@/shared/ui';
import { SoftwareProjectData, TechnicalDetail } from '@/features/software/types';
import { useSoftwareProjectPage } from '@/features/software/model';

interface SoftwareProjectPageProps {
  projectData: SoftwareProjectData;
}

export default function SoftwareProjectPage({ projectData }: SoftwareProjectPageProps) {
  const { currentLang, setCurrentLang, currentData } = useSoftwareProjectPage(projectData);

  return (
    <div className="min-h-screen bg-canvas">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

      <main>
        <article>

          {/* ── Hero ──────────────────────────────────────── */}
          <section
            aria-labelledby="project-title"
            className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16"
          >
            <Link
              href="/software"
              className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 mb-12"
            >
              <span aria-hidden="true">←</span> {currentData.back}
            </Link>

            <p className="hero-l1 font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-6">
              01 · Software Engineering
            </p>

            <h1
              id="project-title"
              className="hero-l2 font-display font-light text-ink leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              {currentData.title}
            </h1>

            <p
              className="hero-l3 font-display italic text-ink-muted mb-14"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.35 }}
            >
              {currentData.subtitle}
            </p>

            {/* Metadata */}
            <dl className="hero-l4 grid grid-cols-1 sm:grid-cols-3 border-t border-hairline">
              <div className="py-6 sm:pr-10 sm:border-r border-b sm:border-b-0 border-hairline">
                <dt className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-1.5">
                  {currentLang === 'en' ? 'Role' : '役割'}
                </dt>
                <dd className="font-body text-sm text-ink">{currentData.role}</dd>
              </div>
              <div className="py-6 sm:px-10 sm:border-r border-b sm:border-b-0 border-hairline">
                <dt className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-1.5">
                  {currentLang === 'en' ? 'Tools' : 'ツール'}
                </dt>
                <dd className="font-body text-sm text-ink">{currentData.tools}</dd>
              </div>
              <div className="py-6 sm:pl-10">
                <dt className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-1.5">
                  {currentLang === 'en' ? 'Duration' : '期間'}
                </dt>
                <dd className="font-body text-sm text-ink">{currentData.duration}</dd>
              </div>
            </dl>
          </section>

          {/* ── Overview ─────────────────────────────────── */}
          <section
            aria-labelledby="overview-heading"
            className="border-t border-hairline"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2
                    id="overview-heading"
                    className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                  >
                    {currentLang === 'en' ? 'Overview' : '概要'}
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <p className="font-body text-base text-ink-muted leading-relaxed">
                    {currentData.overview}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Solution ─────────────────────────────────── */}
          <section
            aria-labelledby="solution-heading"
            className="border-t border-hairline bg-surface"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2
                    id="solution-heading"
                    className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                  >
                    {currentLang === 'en' ? 'Solution' : 'ソリューション'}
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <p className="font-body text-base text-ink-muted leading-relaxed">
                    {currentData.finalSolution}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Key Features ─────────────────────────────── */}
          <section
            aria-labelledby="features-heading"
            className="border-t border-hairline"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2
                    id="features-heading"
                    className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                  >
                    {currentLang === 'en' ? 'Key Features' : '主要機能'}
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <ul className="space-y-3">
                    {currentData.keyFeatures.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 border-b border-hairline pb-3 last:border-b-0 last:pb-0">
                        <span className="font-body text-xs text-accent mt-0.5 select-none shrink-0">—</span>
                        <span className="font-body text-sm text-ink-muted leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Technical Details ────────────────────────── */}
          <section
            aria-labelledby="tech-heading"
            className="border-t border-hairline bg-surface"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <h2
                id="tech-heading"
                className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-10"
              >
                {currentLang === 'en' ? 'Technical Details' : '技術詳細'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline">
                {Object.entries(currentData.technicalDetails).map(([key, detail]) => {
                  const d = detail as TechnicalDetail;
                  return (
                    <div key={key} className="bg-surface p-8">
                      <h3 className="font-body text-sm font-medium text-ink mb-3">{d.title}</h3>
                      <p className="font-body text-xs text-ink-muted leading-relaxed mb-5">{d.description}</p>
                      <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                        {d.technologies.map((tech: string) => (
                          <li key={tech}>
                            <span className="font-body text-xs text-ink-muted border border-hairline px-2 py-0.5">
                              {tech}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Impact Metrics ───────────────────────────── */}
          <section
            aria-labelledby="impact-heading"
            className="border-t border-hairline"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <h2
                id="impact-heading"
                className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-10"
              >
                {currentData.performance.title}
              </h2>
              <dl className="grid grid-cols-2 md:grid-cols-4">
                {currentData.performance.metrics.map((metric, i: number) => (
                  <div
                    key={i}
                    className="py-8 px-0 md:px-8 first:pl-0 md:border-l md:first:border-l-0 border-hairline"
                  >
                    <dd
                      className="font-display font-light text-ink leading-none mb-2"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                    >
                      {metric.value}
                    </dd>
                    <dt className="font-body text-xs text-ink-muted uppercase tracking-[0.1em] mb-1">
                      {metric.label}
                    </dt>
                    <p className="font-body text-xs text-ink-muted/60 leading-snug">{metric.improvement}</p>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ── Navigation ───────────────────────────────── */}
          <nav
            aria-label="Project navigation"
            className="border-t border-hairline"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex items-center justify-between">
              <Link
                href="/software"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span aria-hidden="true">←</span> {currentData.back}
              </Link>
              {currentData.nextProjectLink && (
                <Link
                  href={currentData.nextProjectLink}
                  className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
                >
                  {currentData.nextProject} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </nav>

        </article>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
