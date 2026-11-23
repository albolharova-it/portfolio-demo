import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";
import { Button } from "./Button";

type Args = {
  children: string;
  variant: "primary" | "secondary";
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
- \`href\` — якщо є, рендериться посилання; без нього \`<button>\` з \`onClick\` і \`type\` (за замовчуванням \`button\`).
- \`disabled\` — вимикає кнопку; тоді обовʼязковий \`disabledReason\`, текст-пояснення поруч.

**Варіанти й стани.** primary: заливка \`accent\`, текст \`canvas\`; hover: заливка \`ink-muted\`. secondary: межа \`ink-muted\`, текст \`accent\`; hover: заливка \`accent\`, текст \`canvas\`. focus: контур \`accent\` з відступом. disabled: текст і межа \`ink-muted\` (у primary ще фон \`surface\`) і пояснення \`text-caption\` поруч.

**Токени.** \`accent\`, \`canvas\`, \`ink-muted\`, \`surface\`, \`rounded-control\`, \`text-body\`, \`text-caption\`; відступи \`px-6\`, \`py-3\`.

**Коли використовувати.** primary — одна головна дія в зоні (наприклад, «View case»). secondary — решта дій («Contact me», «Download CV»). Не для навігації між розділами (для цього \`Nav\`) і не для тексту посилань усередині абзацу.

**Як брати в код.**
\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="primary" href="/work/lasunka">View case</Button>
<Button disabled disabledReason="CV will be added soon">Download CV</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    children: { control: "text", description: "Текст кнопки" },
    variant: { control: "select", options: ["primary", "secondary"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text", description: "Пояснення поруч з вимкненою кнопкою" },
  },
  args: {
    children: "View case",
    variant: "primary",
    disabled: false,
    disabledReason: "Case study is being written",
  },
  render: ({ children, variant, disabled, disabledReason }) =>
    disabled ? (
      <Button variant={variant} disabled disabledReason={disabledReason}>
        {children}
      </Button>
    ) : (
      <Button variant={variant} href="#">
        {children}
      </Button>
    ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
