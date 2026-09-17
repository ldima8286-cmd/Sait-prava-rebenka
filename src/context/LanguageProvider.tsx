import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../i18n'
import type { Lang } from '../i18n'
import { LanguageContext } from './languageContext'

function getInitialLang(): Lang {
  try {
    return localStorage.getItem('lang') === 'be' ? 'be' : 'ru'
  } catch {
    return 'ru'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // localStorage may be unavailable
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}