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
- Тільки токени: жодних hex/rgb, стандартних класів Tailwind поза
  системою (`text-white`, `text-sm`…) і значень у квадратних дужках.
  Нового кольору, розміру чи радіуса не додавай — запитай.
- Межу інтерактивного елемента не бери з `line`; для неї `ink-muted`
  (контраст не менше 3:1). Текст — не нижче 4.5:1 до свого фону;
  `ink-muted` на `accent` не став.
- Кожен компонент має стани default, hover, focus, disabled (поле
  форми — ще помилку). Фокус не прибирай. Поруч із disabled завжди
  текст-пояснення. Active і loading — лише коли потрібні.
- Одна primary-кнопка на зону; підпис кнопки називає, що відкриється
  («View Lasunka case»).
- Сторінки сайту збирай з компонентів системи. Тимчасових
  сторінок-перевірок не створюй: огляд системи — у Storybook.
- Картинки компонентів і сторінок — у `assets/`, імпортом; розмір
  через `aspect-*`.
- Кирилиці в Mate немає: для неї лишається запасний Georgia, `cyrillic`
  у `fonts.ts` не додавай.
- Storybook збирається разом із сайтом (`npm run build` →
  `public/storybook`) і відкривається на сайті за адресою `/storybook`.

## Посилання
- План сайту: [PLAN.md](PLAN.md)
- Сайт: https://portfolio-demo-delta-lime.vercel.app
- Storybook: https://portfolio-demo-delta-lime.vercel.app/storybook
- Токени: `app/globals.css` (`@theme`); огляд — Storybook,
  Foundations/Tokens:
  https://portfolio-demo-delta-lime.vercel.app/storybook/index.html?path=/docs/foundations-tokens--docs
