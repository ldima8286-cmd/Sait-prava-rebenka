import { LifeBuoy } from 'lucide-react'
import { HELP_CONTACTS, localize } from '../data'
import { useLanguage } from '../hooks/useLanguage'
import Reveal from './Reveal'

function Help() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="help"
      className="gradient-animated scroll-mt-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-extrabold backdrop-blur">
            <LifeBuoy className="size-4" aria-hidden /> {t.help.badge}
          </span>
          <h2 className="mt-5 text-3xl font-black sm:text-4xl">{t.help.title}</h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-white/85">
            {t.help.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {HELP_CONTACTS.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title.ru} delay={index * 100} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white/95 p-6 text-slate-800 shadow-xl backdrop-blur transition hover:-translate-y-1">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-100 to-fuchsia-100 text-indigo-600">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-slate-900">
                    {localize(item.title, lang)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {localize(item.text, lang)}
                  </p>
                  <p className="mt-4 select-all rounded-2xl bg-gradient-to-r from-indigo-50 to-fuchsia-50 px-4 py-3 text-center text-xl font-black tracking-wide text-indigo-700">
                    {localize(item.contact, lang)}
                  </p>
                  <p className="mt-auto pt-2 text-center text-xs font-bold uppercase tracking-wide text-slate-400">
                    {localize(item.note, lang)}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Help