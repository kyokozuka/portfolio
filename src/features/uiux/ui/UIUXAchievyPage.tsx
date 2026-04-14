'use client';

import Link from 'next/link';
import { Header, Footer } from '@/shared/ui';
import { achievyData } from '@/features/uiux/data';
import { useUIUXProjectPage } from '@/features/uiux/model';

export default function UIUXAchievyPage() {
  const { currentLang, setCurrentLang } = useUIUXProjectPage();
  const t = achievyData[currentLang as 'en' | 'ja'];

  const processSteps = [
    { key: 'background', data: t.background },
    { key: 'research',   data: t.research   },
    { key: 'insight',    data: t.insight    },
    { key: 'ideation',   data: t.ideation   },
    { key: 'design',     data: t.design     },
    { key: 'testing',    data: t.testing    },
    { key: 'result',     data: t.result     },
  ] as const;

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
              <span aria-hidden="true">←</span>{' '}
              {currentLang === 'en' ? 'Back to Design Work' : 'デザイン作品に戻る'}
            </Link>

            <p className="hero-l1 font-body text-xs text-ink-muted tracking-[0.18em] uppercase mb-6">
              01 · UI/UX Design
            </p>

            <h1
              id="project-title"
              className="hero-l2 font-display font-light text-ink leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.025em' }}
            >
              {t.hero.title}
            </h1>

            <p
              className="hero-l3 font-display italic text-ink-muted mb-4"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.35 }}
            >
              {t.hero.subtitle}
            </p>

            <p
              className="hero-l3 font-body text-ink-muted leading-relaxed max-w-2xl"
              style={{ fontSize: '1.0625rem' }}
            >
              {t.hero.tagline}
            </p>
          </section>

          {/* ── Process Steps ────────────────────────────── */}
          {processSteps.map((step, idx) => (
            <section
              key={step.key}
              aria-labelledby={`step-${step.key}`}
              className={`border-t border-hairline ${idx % 2 === 1 ? 'bg-surface' : ''}`}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                  {/* Step number + heading */}
                  <div className="lg:col-span-3">
                    <p className="font-body text-xs text-ink-muted/40 mb-2 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                    <h2
                      id={`step-${step.key}`}
                      className="font-body text-xs text-ink-muted tracking-[0.12em] uppercase lg:sticky lg:top-24"
                    >
                      {step.data.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <p className="font-body text-base text-ink-muted leading-relaxed whitespace-pre-line mb-6">
                      {step.data.text}
                    </p>

                    {/* HMW list — only on insight step */}
                    {'hmw' in step.data && Array.isArray(step.data.hmw) && (
                      <ul className="space-y-3 mt-6 border-l-2 border-accent pl-6">
                        {(step.data.hmw as string[]).map((item, i) => (
                          <li key={i} className="font-body text-sm text-ink-muted">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* ── Pull Quote ───────────────────────────────── */}
          <section className="border-t border-hairline bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
              <blockquote className="max-w-3xl">
                <p
                  className="font-display italic text-ink leading-snug"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  {t.quote}
                </p>
              </blockquote>
            </div>
          </section>

          {/* ── Navigation ───────────────────────────────── */}
          <nav aria-label="Project navigation" className="border-t border-hairline">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex items-center justify-between">
              <Link
                href="/uiux"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span aria-hidden="true">←</span>{' '}
                {currentLang === 'en' ? 'All Design Work' : 'デザイン作品一覧'}
              </Link>
              <Link
                href="/uiux/six-acres"
                className="font-body text-sm text-ink-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
              >
                {currentLang === 'en' ? 'Six Acres' : 'Six Acres'}{' '}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>

        </article>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
