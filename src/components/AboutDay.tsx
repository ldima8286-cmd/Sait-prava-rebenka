import { CalendarDays } from 'lucide-react'
import { PRINCIPLES, TIMELINE, localize } from '../data'
import { useLanguage } from '../hooks/useLanguage'
import Reveal from './Reveal'

function AboutDay() {
  const { lang, t } = useLanguage()

  return (
    <section id="day" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-extrabold text-amber-700">
            <CalendarDays className="size-4" aria-hidden /> {t.about.badge}
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
            {t.about.subtitle}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <ol className="relative space-y-8 border-l-4 border-dashed border-slate-200 pl-8">
            {TIMELINE.map((item, index) => (
              <li key={item.year.ru} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[45px] top-2 grid size-7 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-sky-400 to-violet-500 shadow"
                >
                  <span className="size-2 rounded-full bg-white" />
                </span>
                <Reveal delay={index * 90}>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:bg-white hover:shadow-md">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="rounded-full bg-slate-900 px-3 py-0.5 text-sm font-black tracking-wide text-white">
                        {localize(item.year, lang)}
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900">
                        {localize(item.title, lang)}
                      </h3>
                    </div>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {localize(item.text, lang)}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              {t.about.pillarsTitle}
            </h3>
            <p className="mt-3 text-lg font-medium text-slate-600">
              {t.about.pillarsSubtitle}
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, index) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title.ru} delay={index * 90} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-violet-600 shadow-sm">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h4 className="mt-3 text-base font-extrabold text-slate-900">
                      {localize(p.title, lang)}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {localize(p.text, lang)}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDay