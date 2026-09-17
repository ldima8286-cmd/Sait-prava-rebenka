import { useEffect } from 'react'
import { ArrowRight, LifeBuoy, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CATEGORIES, localize } from '../data'
import type { RightCard } from '../data'
import { useLanguage } from '../hooks/useLanguage'

interface RightCardModalProps {
  card: RightCard | null
  onClose: () => void
}

function RightCardModal({ card, onClose }: RightCardModalProps) {
  const { lang, t } = useLanguage()

  useEffect(() => {
    if (!card) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [card, onClose])

  if (!card) return null

  const category = CATEGORIES.find((c) => c.id === card.category)
  const accent = category?.accent ?? 'from-sky-400 to-blue-600'
  const Icon: LucideIcon = card.icon

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={card.title[lang]}
      onClick={onClose}
    >
      <div
        className="modal-panel relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div aria-hidden className={`h-2 bg-gradient-to-r ${accent}`} />

        <div className="flex items-start gap-4 p-6 pb-4 sm:p-8 sm:pb-4">
          <span className={`grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${accent}`}>
            <Icon className="size-7" aria-hidden />
          </span>
          <div className="min-w-0 pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-500">
              {category?.icon !== undefined && (
                <category.icon className="size-3.5" aria-hidden />
              )}
              {category ? localize(category.label, lang) : ''}
            </span>
            <h3 className="mt-2 text-xl font-black leading-snug text-slate-900">
              {card.title[lang]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.rights.close}
            className="ml-auto grid size-10 shrink-0 place-items-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="size-6" aria-hidden />
          </button>
        </div>

        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-600">
            {card.article[lang]} · {t.rights.conventionReference}
          </span>

          <p className="mt-4 text-[15px] font-extrabold text-slate-900">
            {t.rights.whatItMeans}
          </p>
          <p className="mt-2 leading-relaxed text-slate-600">{card.details[lang]}</p>

          <a
            href="#help"
            onClick={onClose}
            className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 transition hover:bg-amber-100"
          >
            <span className="flex items-center gap-2 text-sm font-bold text-amber-900">
              <LifeBuoy className="size-5 shrink-0 text-amber-500" aria-hidden />
              {t.rights.modalCallout}
            </span>
            <ArrowRight className="size-5 shrink-0 text-amber-500" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  )
}

export default RightCardModal