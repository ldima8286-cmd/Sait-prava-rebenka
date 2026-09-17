import { ArrowRight, Search } from 'lucide-react'
import { SOURCES, localize } from '../data'
import { useLanguage } from '../hooks/useLanguage'
import Reveal from './Reveal'

function Sources() {
  const { lang, t } = useLanguage()

  return (
    <section id="sources" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-extrabold text-violet-700">
            <Search className="size-4" aria-hidden /> {t.sources.badge}
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.sources.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
            {t.sources.subtitle}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {SOURCES.map((source, index) => (
            <Reveal key={source.href} delay={index * 80}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span
                  aria-hidden
                  className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-white shadow"
                >
                  <ArrowRight className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-extrabold text-slate-900 group-hover:text-indigo-600">
                    {localize(source.title, lang)}
                  </span>
                  <span className="block truncate text-sm text-slate-500">
                    {localize(source.note, lang)}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sources