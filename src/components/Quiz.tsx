import { useState } from 'react'
import {
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Play,
  RotateCcw,
  Trophy,
  XCircle,
} from 'lucide-react'
import { QUIZ_QUESTIONS } from '../quiz'
import { useLanguage } from '../hooks/useLanguage'
import Reveal from './Reveal'

type Status = 'idle' | 'playing' | 'finished'

function optionButtonClass(
  index: number,
  selected: number | null,
  correctIndex: number,
): string {
  if (selected === null) {
    return 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50'
  }
  if (index === correctIndex) {
    return 'border-emerald-400 bg-emerald-50 text-emerald-900'
  }
  if (index === selected) {
    return 'border-rose-400 bg-rose-50 text-rose-900'
  }
  return 'border-slate-200 bg-white text-slate-400 opacity-70'
}

function Quiz() {
  const { lang, t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const total = QUIZ_QUESTIONS.length
  const question = QUIZ_QUESTIONS[current]

  const restart = () => {
    setStatus('playing')
    setCurrent(0)
    setSelected(null)
    setScore(0)
  }

  const handleSelect = (index: number) => {
    if (selected !== null) return
    setSelected(index)
    if (index === question.correctIndex) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setStatus('finished')
    }
  }

  const resultMessage =
    score >= 8
      ? t.quiz.resultGreat
      : score >= 5
        ? t.quiz.resultGood
        : t.quiz.resultEmpty

  return (
    <section id="quiz" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-extrabold text-emerald-700">
            <HelpCircle className="size-4" aria-hidden /> {t.quiz.badge}
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.quiz.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
            {t.quiz.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm sm:p-8">
            {status === 'idle' && (
              <div className="flex flex-col items-center gap-5 py-6 text-center">
                <span className="grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-lg">
                  <HelpCircle className="size-8" aria-hidden />
                </span>
                <p className="max-w-md font-medium leading-relaxed text-slate-600">
                  {t.quiz.subtitle}
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-base font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-500"
                >
                  <Play className="size-5" aria-hidden /> {t.quiz.start}
                </button>
              </div>
            )}

            {status === 'playing' && (
              <div aria-live="polite">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-extrabold text-slate-500">
                    {t.quiz.questionOf(current + 1, total)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-sm font-extrabold text-emerald-700">
                    <CheckCircle2 className="size-4" aria-hidden />
                    {t.quiz.score}: {score}
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500"
                    style={{ width: `${((current + (selected !== null ? 1 : 0)) / total) * 100}%` }}
                  />
                </div>

                <h3 className="mt-6 text-xl font-extrabold leading-snug text-slate-900">
                {question.question[lang]}
              </h3>

              <div className="mt-5 space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={option.ru + index}
                    type="button"
                    onClick={() => handleSelect(index)}
                    disabled={selected !== null}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border-2 px-4 py-3 text-left font-bold transition ${optionButtonClass(index, selected, question.correctIndex)}`}
                  >
                    <span>{option[lang]}</span>
                    {selected !== null && index === question.correctIndex && (
                      <CheckCircle2 className="size-5 shrink-0 text-emerald-500" aria-hidden />
                    )}
                    {selected !== null && index === selected && index !== question.correctIndex && (
                      <XCircle className="size-5 shrink-0 text-rose-500" aria-hidden />
                    )}
                  </button>
                ))}
              </div>

              {selected !== null && (
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-amber-900">
                    <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
                    <span>{question.explanation[lang]}</span>
                  </p>
                </div>
              )}

              {selected !== null && (
                <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-slate-700"
                  >
                    {current < total - 1 ? t.quiz.next : t.quiz.complete}
                  </button>
                </div>
              )}
            </div>
          )}

          {status === 'finished' && (
            <div className="flex flex-col items-center gap-5 py-6 text-center">
              <span className="grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-lg">
                <Trophy className="size-8" aria-hidden />
              </span>
              <p className="text-sm font-extrabold uppercase tracking-wide text-slate-400">
                {t.quiz.finish}
              </p>
              <h3 className="text-2xl font-black text-slate-900">{t.quiz.result}</h3>
              <p className="text-lg font-extrabold text-emerald-600">
                {t.quiz.resultHint(score, total)}
              </p>
              <p className="max-w-md font-medium leading-relaxed text-slate-600">
                {resultMessage}
              </p>
              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-base font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-700"
              >
                <RotateCcw className="size-5" aria-hidden /> {t.quiz.restart}
              </button>
              <a
                href="#rights"
                className="text-sm font-bold text-indigo-600 underline-offset-4 hover:underline"
              >
                {t.hero.primary}
              </a>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  </section>
  )
}

export default Quiz