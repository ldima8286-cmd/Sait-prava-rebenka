export type Lang = 'ru' | 'be'

export interface Localized {
  ru: string
  be: string
}

export interface Translations {
  langName: Localized
  header: {
    brand: string
    nav: { href: string; label: string }[]
    menuOpen: string
    menuClose: string
  }
  hero: {
    badge: string
    title: string
    titleAccent: string
    subtitle: string
    primary: string
    secondary: string
  }
  rights: {
    badge: string
    title: string
    subtitle: string
    all: string
    cardsTitle: string
    more: string
    close: string
    whatItMeans: string
    conventionReference: string
    modalCallout: string
  }
  quiz: {
    badge: string
    title: string
    subtitle: string
    start: string
    questionOf: (current: number, total: number) => string
    score: string
    next: string
    complete: string
    restart: string
    finish: string
    result: string
    resultHint: (score: number, total: number) => string
    resultEmpty: string
    resultGood: string
    resultGreat: string
  }
  about: {
    badge: string
    title: string
    subtitle: string
    pillarsTitle: string
    pillarsSubtitle: string
  }
  help: {
    badge: string
    title: string
    subtitle: string
  }
  sources: {
    badge: string
    title: string
    subtitle: string
  }
  footer: {
    text: string
    tagline: string
  }
}

export const translations: Record<Lang, Translations> = {
  ru: {
    langName: { ru: 'БЕ', be: 'RU' },
    header: {
      brand: 'Мои права',
      nav: [
        { href: '#rights', label: 'Права' },
        { href: '#quiz', label: 'Викторина' },
        { href: '#day', label: 'О дне' },
        { href: '#help', label: 'Помощь' },
        { href: '#sources', label: 'Источники' },
      ],
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
    },
    hero: {
      badge: '20 ноября — Всемирный день ребёнка',
      title: 'Каждый ребёнок',
      titleAccent: 'имеет право',
      subtitle:
        'Права детей записаны в Конвенции ООН и в Законе Беларуси «О правах ребёнка». Рассказываем о них простыми словами — чтобы каждый мог знать свои права и уметь их защищать.',
      primary: 'Смотреть права',
      secondary: 'Почему 20 ноября',
    },
    rights: {
      badge: 'Права ребёнка',
      title: '16 главных прав — простыми словами',
      subtitle:
        'Собрали ключевые статьи Конвенции о правах ребёнка. Права работают для всех детей Беларуси — вне зависимости от того, где ты живёшь.',
      all: 'Все права',
      cardsTitle: 'Как пользоваться правами',
      more: 'Подробнее',
      close: 'Закрыть',
      whatItMeans: 'Что это значит',
      conventionReference: 'Конвенция ООН о правах ребёнка',
      modalCallout: 'Если тебе нужна помощь — загляни в раздел «Помощь».',
    },
    quiz: {
      badge: 'Викторина',
      title: 'Проверь, как хорошо ты знаешь свои права',
      subtitle:
        '10 вопросов о правах ребёнка в Беларуси. После ответа — пояснение, чтобы узнать новое.',
      start: 'Начать викторину',
      questionOf: (current, total) => `Вопрос ${current} из ${total}`,
      score: 'Правильно',
      next: 'Дальше',
      complete: 'Завершить',
      restart: 'Пройти ещё раз',
      finish: 'Викторина окончена',
      result: 'Твой результат',
      resultHint: (score, total) => `Правильных ответов: ${score} из ${total}`,
      resultEmpty: 'Ничего страшного! Вернись к карточкам прав и попробуй снова.',
      resultGood: 'Хорошо! Но есть куда расти — загляни в раздел «Права».',
      resultGreat: 'Отлично! Ты отлично знаешь свои права!',
    },
    about: {
      badge: 'Как это было',
      title: 'Почему 20 ноября — особенный день',
      subtitle:
        'Именно 20 ноября в разные годы были приняты главные документы о защите детства. Беларусь присоединилась к Конвенции одной из первых.',
      pillarsTitle: 'Четыре опоры Конвенции',
      pillarsSubtitle: 'На этих принципах построены все права ребёнка.',
    },
    help: {
      badge: 'Если нужна помощь',
      title: 'Ты не один: о помощи можно попросить',
      subtitle:
        'Если тебе страшно, обидно или грустно — всегда есть взрослые и службы, которые выслушают и помогут. Просить о помощи — это правильно.',
    },
    sources: {
      badge: 'Узнать больше',
      title: 'Официальные источники',
      subtitle:
        'Здесь можно прочитать полные тексты документов и найти детский правовой сайт Беларуси.',
    },
    footer: {
      text: 'Образовательный сайт ко Всемирному дню ребёнка — 20 ноября. Материалы носят ознакомительный характер и основаны на Конвенции ООН о правах ребёнка и Законе Республики Беларусь «О правах ребёнка» от 19.11.1993.',
      tagline: 'Каждый ребёнок имеет право · Беларусь',
    },
  },
  be: {
    langName: { ru: 'БЕ', be: 'RU' },
    header: {
      brand: 'Мае правы',
      nav: [
        { href: '#rights', label: 'Правы' },
        { href: '#quiz', label: 'Віктарына' },
        { href: '#day', label: 'Пра дзень' },
        { href: '#help', label: 'Дапамога' },
        { href: '#sources', label: 'Крыніцы' },
      ],
      menuOpen: 'Адкрыць меню',
      menuClose: 'Закрыць меню',
    },
    hero: {
      badge: '20 лістапада — Сусветны дзень дзіцяці',
      title: 'Кожнае дзіця',
      titleAccent: 'мае права',
      subtitle:
        'Правы дзяцей запісаны ў Канвенцыі ААН і ў Законе Беларусі «Аб правах дзіцяці». Распавядаем пра іх простымі словамі — каб кожны мог ведаць свае правы і ўмець іх абараняць.',
      primary: 'Глядзець правы',
      secondary: 'Чаму 20 лістапада',
    },
    rights: {
      badge: 'Правы дзіцяці',
      title: '16 галоўных правоў — простымі словамі',
      subtitle:
        'Сабралі ключавыя артыкулы Канвенцыі аб правах дзіцяці. Правы дзейнічаюць для ўсіх дзяцей Беларусі — незалежна ад таго, дзе ты жывеш.',
      all: 'Усе правы',
      cardsTitle: 'Як карыстацца правамі',
      more: 'Падрабязней',
      close: 'Закрыць',
      whatItMeans: 'Што гэта значыць',
      conventionReference: 'Канвенцыя ААН аб правах дзіцяці',
      modalCallout: 'Калі табе патрэбна дапамога — зазірні ў раздзел «Дапамога».',
    },
    quiz: {
      badge: 'Віктарына',
      title: 'Правер, як добра ты ведаеш свае правы',
      subtitle:
        '10 пытанняў аб правах дзіцяці ў Беларусі. Пасля адказу — тлумачэнне, каб даведацца новае.',
      start: 'Пачаць віктарыну',
      questionOf: (current, total) => `Пытанне ${current} з ${total}`,
      score: 'Правільна',
      next: 'Далей',
      complete: 'Скончыць',
      restart: 'Прайсці яшчэ раз',
      finish: 'Віктарына скончана',
      result: 'Твой вынік',
      resultHint: (score, total) => `Правільных адказаў: ${score} з ${total}`,
      resultEmpty: 'Нічога страшнага! Вярніся да картак правоў і паспрабуй зноў.',
      resultGood: 'Добра! Але ёсць куды расці — зазірні ў раздзел «Правы».',
      resultGreat: 'Выдатна! Ты выдатна ведаеш свае правы!',
    },
    about: {
      badge: 'Як гэта было',
      title: 'Чаму 20 лістапада — асаблівы дзень',
      subtitle:
        'Менавіта 20 лістапада ў розныя гады былі прыняты галоўныя дакументы аб абароне дзяцінства. Беларусь далучылася да Канвенцыі адной з першых.',
      pillarsTitle: 'Чатыры апоры Канвенцыі',
      pillarsSubtitle: 'На гэтых прынцыпах пабудаваны ўсе правы дзіцяці.',
    },
    help: {
      badge: 'Калі патрэбна дапамога',
      title: 'Ты не адзін: аб дапамозе можна папрасіць',
      subtitle:
        'Калі табе страшна, крыўдна ці сумна — заўсёды ёсць дарослыя і службы, якія выслухаюць і дапамогуць. Прасіць аб дапамозе — гэта правільна.',
    },
    sources: {
      badge: 'Даведацца больш',
      title: 'Афіцыйныя крыніцы',
      subtitle:
        'Тут можна прачытаць поўныя тэксты дакументаў і знайсці дзіцячы прававы сайт Беларусі.',
    },
    footer: {
      text: 'Адукацыйны сайт да Сусветнага дня дзіцяці — 20 лістапада. Матэрыялы маюць азнаёмленчы характар і заснаваны на Канвенцыі ААН аб правах дзіцяці і Законе Рэспублікі Беларусь «Аб правах дзіцяці» ад 19.11.1993.',
      tagline: 'Кожнае дзіця мае права · Беларусь',
    },
  },
}