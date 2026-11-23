import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";
import { Nav } from "./Nav";

type Args = {
  current: "#work" | "#about" | "#contact" | "none";
  contactDisabled: boolean;
  disabledReason: string;
};

const meta = {
  title: "Components/Nav",
  // Controls drive flat args; render maps them onto the component's props.
  component: Nav as unknown as ComponentType<Args>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Що це.** Головна навігація сайту: пункти меню великими літерами.

**Параметри.**
- \`items\` — список пунктів: \`{ label, href }\` або вимкнений \`{ label, disabled: true, disabledReason }\`.
- \`current\` — \`href\` поточної сторінки чи розділу; пункт підкреслюється й отримує \`aria-current="page"\`.
- \`label\` — назва навігації для екранних читачів, за замовчуванням \`"Main"\`.

**Стани.** default: текст \`ink\`. hover: підкреслення. focus: контур \`accent\`. Поточний пункт: підкреслення. disabled: текст \`ink-muted\`, не посилання, поруч пояснення \`text-caption\` у дужках.

**Токени.** \`ink\`, \`ink-muted\`, \`accent\`, \`rounded-control\` (форма контуру фокусу), \`text-body\`, \`text-caption\`; відступи \`gap-6\`, \`gap-2\`.

**Коли використовувати.** Шапка сайту, перехід між розділами. Не для дій (для них \`Button\`). На вузькому екрані пункти переносяться на новий рядок: перевір це кнопкою Viewport у верхній панелі Storybook.

**Як брати в код.**
\`\`\`tsx
import { Nav } from "@/components/Nav";

<Nav current="#work" items={[
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]} />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    current: { control: "select", options: ["#work", "#about", "#contact", "none"], description: "Поточний пункт" },
    contactDisabled: { control: "boolean", description: "Вимкнути пункт Contact" },
    disabledReason: { control: "text" },
  },
  args: {
    current: "#work",
    contactDisabled: false,
    disabledReason: "coming soon",
  },
  render: ({ current, contactDisabled, disabledReason }) => (
    <Nav
      current={current === "none" ? undefined : current}
      items={[
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        contactDisabled
          ? { label: "Contact", disabled: true, disabledReason }
          : { label: "Contact", href: "#contact" },
      ]}
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
