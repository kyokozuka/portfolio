'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/shared/ui';
import { sixAcresData } from '@/features/uiux/data';
import { useUIUXProjectPage } from '@/features/uiux/model';

export default function UIUXSixAcresPage() {
  const { currentLang, setCurrentLang } = useUIUXProjectPage();
  const t = sixAcresData[currentLang as keyof typeof sixAcresData] ?? sixAcresData.en;

  const beforeAfterEntries = Object.entries(t.beforeAfter) as [
    string,
    { before: string; after: string }
  ][];

  return (
    <div className="min-h-screen bg-canvas">
      <Header currentLang={currentLang} onLanguageChange={(l) => setCurrentLang(l as 'en' | 'ja')} />

      <main>
        <article>

          {/* ── Hero ──────────────────────────────────────── */}
          <section
            aria-labelledby="project-title"
            className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16"
          >
            <Link
              href="/uiux"
              className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 mb-12"
            >
              <span aria-hidden="true">←</span> {t.back}
            </Link>

            <p className="hero-l1 font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-6">
              01 · UI/UX Design
            </p>

            <h1
              id="project-title"
              className="hero-l2 font-display font-light text-ink leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.025em' }}
            >
              {t.subtitle}
            </h1>

            <p
              className="hero-l3 font-display italic text-ink-muted mb-14"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.35 }}
            >
              {t.title}
            </p>

            {/* Metadata */}
            <dl className="hero-l4 grid grid-cols-1 sm:grid-cols-3 border-t border-hairline">
              <div className="py-6 sm:pr-10 sm:border-r border-b sm:border-b-0 border-hairline">
                <dt className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-1.5">
                  {currentLang === 'en' ? 'Role' : '役割'}
                </dt>
                <dd className="font-body text-sm text-ink">{t.role}</dd>
              </div>
              <div className="py-6 sm:px-10 sm:border-r border-b sm:border-b-0 border-hairline">
                <dt className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-1.5">
                  {currentLang === 'en' ? 'Tools' : 'ツール'}
                </dt>
                <dd className="font-body text-sm text-ink">{t.tools}</dd>
              </div>
              <div className="py-6 sm:pl-10">
                <dt className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-1.5">
                  {currentLang === 'en' ? 'Duration' : '期間'}
                </dt>
                <dd className="font-body text-sm text-ink">{t.duration}</dd>
              </div>
            </dl>
          </section>

          {/* ── Overview ─────────────────────────────────── */}
          <section aria-labelledby="overview-heading" className="border-t border-hairline">
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
                    {t.finalSolution}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Before / After ───────────────────────────── */}
          <section aria-labelledby="redesign-heading" className="border-t border-hairline bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <h2
                id="redesign-heading"
                className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-10"
              >
                {currentLang === 'en' ? 'Before / After' : 'Before / After'}
              </h2>

              <div className="space-y-16">
                {beforeAfterEntries.map(([key, images]) => (
                  <div key={key}>
                    <p className="font-body text-xs text-ink-muted uppercase tracking-[0.1em] mb-6 capitalize">
                      {key}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
                      <figure className="bg-surface p-4">
                        <figcaption className="font-body text-xs text-ink-muted mb-3 uppercase tracking-[0.1em]">
                          Before
                        </figcaption>
                        <div className="border border-hairline">
                          <Image
                            src={images.before}
                            alt={`${key} before redesign`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover grayscale opacity-70"
                          />
                        </div>
                      </figure>
                      <figure className="bg-surface p-4">
                        <figcaption className="font-body text-xs text-ink-muted mb-3 uppercase tracking-[0.1em]">
                          After
                        </figcaption>
                        <div className="border border-hairline">
                          <Image
                            src={images.after}
                            alt={`${key} after redesign`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                ))}
              </div>

              {t.imageCredit && (
                <p className="font-body text-xs text-ink-muted/50 mt-8">{t.imageCredit}</p>
              )}
            </div>
          </section>

          {/* ── Usability Tasks ──────────────────────────── */}
          <section aria-labelledby="tasks-heading" className="border-t border-hairline">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2
                    id="tasks-heading"
                    className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                  >
                    {currentLang === 'en' ? 'Usability Tasks' : 'ユーザビリティタスク'}
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <ol className="space-y-3">
                    {t.process.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-4 border-b border-hairline pb-3 last:border-b-0 last:pb-0">
                        <span className="font-body text-xs text-ink-muted/40 tabular-nums mt-0.5 shrink-0 w-5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-body text-sm text-ink-muted">{task}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* ── Findings ─────────────────────────────────── */}
          <section aria-labelledby="findings-heading" className="border-t border-hairline bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <h2
                id="findings-heading"
                className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase mb-10"
              >
                {currentLang === 'en' ? 'Findings' : '調査結果'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
                {/* Good */}
                <div className="bg-surface p-8">
                  <h3 className="font-body text-xs text-ink-muted uppercase tracking-[0.1em] mb-6">
                    {currentLang === 'en' ? 'What worked' : '良かった点'}
                  </h3>
                  <ul className="space-y-3">
                    {t.process.findingsGood.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-body text-xs text-accent mt-0.5 select-none shrink-0">+</span>
                        <span className="font-body text-sm text-ink-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Bad */}
                <div className="bg-surface p-8">
                  <h3 className="font-body text-xs text-ink-muted uppercase tracking-[0.1em] mb-6">
                    {currentLang === 'en' ? 'What to improve' : '改善点'}
                  </h3>
                  <ul className="space-y-3">
                    {t.process.findingsBad.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-body text-xs text-ink-muted/40 mt-0.5 select-none shrink-0">—</span>
                        <span className="font-body text-sm text-ink-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── Style Guide ──────────────────────────────── */}
          <section aria-labelledby="style-heading" className="border-t border-hairline">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2
                    id="style-heading"
                    className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                  >
                    {currentLang === 'en' ? 'Style Guide' : 'スタイルガイド'}
                  </h2>
                </div>
                <div className="lg:col-span-9 space-y-8">
                  <dl className="space-y-6">
                    {[
                      { label: currentLang === 'en' ? 'Typography' : 'タイポグラフィ', value: t.process.styleGuide.typography },
                      { label: currentLang === 'en' ? 'Colours'    : 'カラー',         value: t.process.styleGuide.colors    },
                      { label: currentLang === 'en' ? 'Buttons'    : 'ボタン',          value: t.process.styleGuide.buttons   },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-hairline pb-6 last:border-b-0 last:pb-0">
                        <dt className="font-body text-xs text-ink-muted uppercase tracking-[0.1em] mb-2">{label}</dt>
                        <dd className="font-body text-sm text-ink-muted leading-relaxed">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="border-t border-hairline pt-6">
                    <p className="font-body text-xs text-ink-muted uppercase tracking-[0.1em] mb-2">
                      {currentLang === 'en' ? 'Wireframe Process' : 'ワイヤーフレームプロセス'}
                    </p>
                    <p className="font-body text-sm text-ink-muted leading-relaxed">{t.process.wireframe}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Reflection ───────────────────────────────── */}
          <section aria-labelledby="reflection-heading" className="border-t border-hairline bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-3">
                  <h2
                    id="reflection-heading"
                    className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                  >
                    {currentLang === 'en' ? 'Reflection' : '振り返り'}
                  </h2>
                </div>
                <div className="lg:col-span-9 space-y-6">
                  {t.reflection.map((para, i) => (
                    <p key={i} className="font-body text-base text-ink-muted leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Navigation ───────────────────────────────── */}
          <nav aria-label="Project navigation" className="border-t border-hairline">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex items-center justify-between">
              <Link
                href="/uiux"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span aria-hidden="true">←</span> {t.back}
              </Link>
              <Link
                href="/uiux/achievy"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
              >
                Achievy <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>

        </article>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
