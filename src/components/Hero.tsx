import { BookOpen, Palette, PartyPopper, Rainbow, Sparkles, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Floater {
  id: string
  Icon: LucideIcon
  className: string
  delay?: string
}

const FLOATERS: Floater[] = [
  { id: 'balloon', Icon: PartyPopper, className: 'left-[6%] top-16 size-10 sm:size-14' },
  { id: 'trophy', Icon: Trophy, className: 'right-[8%] top-24 size-9 sm:size-12', delay: 'delay-500' },
  { id: 'book', Icon: BookOpen, className: 'left-[12%] bottom-24 size-10 sm:size-14', delay: 'delay-300' },
  { id: 'rainbow', Icon: Rainbow, className: 'right-[14%] bottom-32 size-10 sm:size-12', delay: 'delay-150' },
  { id: 'palette', Icon: Palette, className: 'right-[40%] top-10 hidden size-8 sm:block', delay: 'delay-700' },
  { id: 'sparkles', Icon: Sparkles, className: 'left-[42%] bottom-12 hidden size-10 sm:block' },
]

function Hero() {
  const ref = useScrollReveal<HTMLDivElement>()
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="gradient-animated relative overflow-hidden bg-gradient-to-br from-sky-300 via-indigo-300 to-violet-300"
    >
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-white/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-1/3 size-96 rounded-full bg-amber-200/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/4 size-80 rounded-full bg-rose-200/50 blur-3xl" />

      {FLOATERS.map((f) => (
        <f.Icon
          key={f.id}
          aria-hidden
          strokeWidth={1.75}
          className={`animate-float pointer-events-none absolute select-none text-white/90 drop-shadow ${f.className} ${f.delay ?? ''}`}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-extrabold text-indigo-800 shadow-sm backdrop-blur">
            <Sparkles className="size-4" aria-hidden /> {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-6xl">
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#rights"
              className="rounded-full bg-slate-900 px-7 py-3 text-base font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              {t.hero.primary}
            </a>
            <a
              href="#day"
              className="rounded-full border-2 border-slate-900/20 bg-white/60 px-7 py-3 text-base font-extrabold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero