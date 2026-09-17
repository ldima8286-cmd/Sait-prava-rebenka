import { useState } from 'react'
import { ArrowRight, ScrollText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CATEGORIES, RIGHTS, categoryAccent, localize } from '../data'
import type { CategoryId, RightCard as RightCardData } from '../data'
import { useLanguage } from '../hooks/useLanguage'
import Reveal from './Reveal'
import RightCardModal from './RightCardModal'

type Filter = CategoryId | 'all'

function RightCard({
  icon,
  title,
  text,
  article,
  accent,
  hint,
  onOpen,
}: {
  icon: LucideIcon
  title: string
  text: string
  article: string
  accent: string
  hint: string
  onOpen: () => void
}) {
  const Icon = icon
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full w-full cursor-pointer flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
    >
      <div aria-hidden className={`h-1.5 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="flex items-start justify-between gap-2">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-sky-50 group-hover:text-sky-600">
          <Icon className="size-6" aria-hidden />
        </span>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-500">
          {article}
        </span>
      </div>
      <h3 className="text-lg font-extrabold leading-snug text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{text}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-extrabold text-indigo-600">
        {hint}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </button>
  )
}

function Rights() {
  const [filter, setFilter] = useState<Filter>('all')
  const [openRight, setOpenRight] = useState<RightCardData | null>(null)
  const { lang, t } = useLanguage()
  const visible = RIGHTS.filter((r) => filter === 'all' || r.category === filter)

  return (
    <section id="rights" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-extrabold text-sky-700">
            <ScrollText className="size-4" aria-hidden /> {t.rights.badge}
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.rights.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
            {t.rights.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2" delay={100}>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.rights.all}
          </button>
          {CATEGORIES.map((cat) => {
            const active = filter === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                  active
                    ? `bg-gradient-to-r text-white shadow ${cat.accent}`
                    : 'bg-white text-slate-600 hover:bg-slate-200'
                }`}
              >
                <cat.icon className="size-4" aria-hidden />
                {localize(cat.label, lang)}
              </button>
            )
          })}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((right, index) => (
            <Reveal key={right.id} delay={(index % 3) * 90} className="h-full">
              <RightCard
                icon={right.icon}
                title={localize(right.title, lang)}
                text={localize(right.text, lang)}
                article={localize(right.article, lang)}
                accent={categoryAccent(right.category)}
                hint={t.rights.more}
                onOpen={() => setOpenRight(right)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <RightCardModal card={openRight} onClose={() => setOpenRight(null)} />
    </section>
  )
}

export default Rights