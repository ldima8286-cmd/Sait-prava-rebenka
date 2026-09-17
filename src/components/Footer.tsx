import { Baby } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-base font-black text-white">
          <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 text-white">
            <Baby className="size-4" aria-hidden />
          </span>
          {t.header.brand}
        </a>
        <p className="max-w-xl text-sm leading-relaxed">{t.footer.text}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  )
}

export default Footer