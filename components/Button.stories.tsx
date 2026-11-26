import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";
import { Button } from "./Button";

type Args = {
  children: string;
  variant: "primary" | "secondary";
  size: "md" | "sm";
  disabled: boolean;
  disabledReason: string;
};

const meta = {
  title: "Components/Button",
  // Controls drive flat args; render maps them onto the component's props.
  component: Button as unknown as ComponentType<Args>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Що це.** Кнопка або посилання у формі кнопки: головна дія (primary) чи другорядна (secondary).

**Параметри.**
- \`children\` — текст кнопки.
- \`variant\` — \`primary\` | \`secondary\`, за замовчуванням \`secondary\`.
- \`size\` — \`md\` (основні кнопки секції, текст \`text-lead\`) | \`sm\` (компактна кнопка в шапці, текст \`text-body\` великими літерами), за замовчуванням \`md\`.
- \`href\` — якщо є, рендериться посилання; без нього \`<button>\` з \`onClick\` і \`type\` (за замовчуванням \`button\`).
- \`download\` — разом з \`href\`: посилання завантажує файл (наприклад, CV).
- \`disabled\` — вимикає кнопку; тоді обовʼязковий \`disabledReason\`, текст-пояснення поруч.

**Варіанти й стани.** primary: заливка \`accent\`, текст \`canvas\`; hover: заливка \`ink-muted\`. secondary: межа \`ink-muted\`, текст \`accent\`; hover: заливка \`accent\`, текст \`canvas\`. focus: контур \`accent\` з відступом. disabled: текст і межа \`ink-muted\` (у primary ще фон \`surface\`) і пояснення \`text-caption\` поруч.

**Розміри.** md: відступи \`px-8\`, \`py-4\`, текст \`text-lead\`. sm: відступи \`px-6\`, \`py-3\`, текст \`text-body\` великими літерами.

**Токени.** \`accent\`, \`canvas\`, \`ink-muted\`, \`surface\`, \`rounded-control\`, \`text-lead\`, \`text-body\`, \`text-caption\`.

**Коли використовувати.** primary — одна головна дія в зоні (наприклад, «View Lasunka case»). secondary — решта дій («Contact me», «Download CV»). Підпис називає, що саме відкриється: «View Lasunka case», а не просто «View case», коли на екрані кілька кейсів. Не для навігації між розділами (для цього \`Nav\`) і не для тексту посилань усередині абзацу.

**Як брати в код.**
\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="primary" href="/work/lasunka">View Lasunka case</Button>
<Button href="#contact">Contact me</Button>
<Button size="sm" href="/cv.pdf" download>Download CV ↓</Button>
<Button size="sm" disabled disabledReason="CV will be added soon">Download CV ↓</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    children: { control: "text", description: "Текст кнопки" },
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "sm"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text", description: "Пояснення поруч з вимкненою кнопкою" },
  },
  args: {
    children: "View Lasunka case",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Case study is being written",
  },
  render: ({ children, variant, size, disabled, disabledReason }) =>
    disabled ? (
      <Button variant={variant} size={size} disabled disabledReason={disabledReason}>
        {children}
      </Button>
    ) : (
      <Button variant={variant} size={size} href="#">
        {children}
      </Button>
    ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
