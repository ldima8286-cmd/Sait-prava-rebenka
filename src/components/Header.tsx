import { useState } from 'react'
import { Baby, Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

function Header() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const toggleLang = () => setLang(lang === 'ru' ? 'be' : 'ru')

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-black text-slate-800"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-white shadow-md">
            <Baby className="size-5" aria-hidden />
          </span>
          {t.header.brand}
        </a>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Основная навигация">
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-bold text-slate-600 transition-colors hover:bg-white hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleLang}
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-extrabold text-slate-700 transition hover:border-slate-300"
            aria-label="Переключить язык"
          >
            <Globe className="size-4" aria-hidden />
            {t.langName[lang]}
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-extrabold text-slate-700"
            aria-label="Переключить язык"
          >
            <Globe className="size-4" aria-hidden />
            {t.langName[lang]}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl text-slate-700 transition-colors hover:bg-white"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/50 bg-white/90 px-4 pb-4 pt-2 backdrop-blur-lg sm:hidden"
          aria-label="Мобильная навигация"
        >
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header