import { createContext } from 'react'
import type { Lang, Translations } from '../i18n'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)