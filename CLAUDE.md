@AGENTS.md

## Стек
Next.js (App Router), TypeScript, Tailwind.

## Робота з Git
Уся робота в гілці main. Нових гілок не створюй, поки я прямо не
попрошу. Пуш у main публікує сайт, тому перед пушем питай мене.

## Токени
Значення живуть тільки в `@theme` у `app/globals.css`; стандартні
кольори, розміри шрифту, радіуси й пропорції Tailwind скинуто, тож
працюють лише класи нижче. Огляд — Storybook, Foundations/Tokens.

- Кольори (за роллю): `canvas` (фон сторінки; текст на accent),
  `surface` (картки й поля), `line` (лише декор: розділювачі, рамки
  карток), `accent` (кнопки, посилання, контур фокусу), `ink` (текст),
  `ink-muted` (підписи; межа полів і кнопок без заливки), `danger`
  (помилка: текст, межа й іконка поля, завжди разом із текстом).
- Шрифт: одна гарнітура Mate (`font-sans`), насиченість 400.
  Розміри: `text-caption`, `text-body`, `text-lead`, `text-heading`,
  `text-display` (висота рядка й трекінг задані в парі з розміром).
- Радіуси: `rounded-control` (кнопки, поля), `rounded-card` (картки,
  фото).
- Пропорції: `aspect-cover` (обкладинка роботи), `aspect-portrait`
  (портрет).
- Відступи: лише кроки 2, 3, 4, 6, 8 (`p-4`, `gap-6`…).

## Компоненти
Лежать у `components/`; поруч — історія `<Назва>.stories.tsx` з
Controls і docs (Storybook: `npm run storybook`).

- `Button` — primary (одна на зону) і secondary; розміри `md`
  (основні кнопки) і `sm` (компактна, великими літерами, у шапці);
  `href` дає посилання, `download` — завантаження файлу.
  Стани: default, hover, focus, disabled з `disabledReason`.
- `TextField` — поле з `label`, `hint`, `error`. Стани: default,
  hover, focus, disabled з `disabledReason`, помилка.
- `WorkCard` — картка кейсу: обкладинка, номер, назва, тип, `href`.
  Стани: default, hover, focus, disabled з `disabledReason`.
- `Nav` — навігація; `current` позначає поточний пункт. Стани:
  default, hover, focus, поточний, вимкнений пункт з поясненням.

Новий компонент чи зміна стану — одразу оновлюй його історію, docs і
цей список.

## Правила
Заповнимо далі.

## Посилання
- План сайту: [PLAN.md](PLAN.md)
