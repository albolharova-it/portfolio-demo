import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";
import { WorkCard } from "./WorkCard";

type Args = {
  number: string;
  title: string;
  type: string;
  disabled: boolean;
  disabledReason: string;
};

const meta = {
  title: "Components/WorkCard",
  // Controls drive flat args; render maps them onto the component's props.
  component: WorkCard as unknown as ComponentType<Args>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Що це.** Картка роботи (кейсу): обкладинка, номер, назва і тип. Уся картка — посилання на кейс.

**Параметри.**
- \`number\` — порядковий номер, наприклад \`"01"\`.
- \`title\` — назва кейсу; \`type\` — короткий тип («website + app»).
- \`cover\` — \`{ src, alt }\`, обкладинка в пропорції \`aspect-cover\`; без неї малюється заглушка з номером.
- \`href\` — адреса кейсу.
- \`disabled\` + \`disabledReason\` — кейс ще недоступний, пояснення під карткою (обовʼязкове).

**Стани.** default: фон \`surface\`, текст \`ink\`, тип \`ink-muted\`. hover: назва підкреслюється. focus: контур \`accent\` навколо картки. disabled: текст \`ink-muted\`, обкладинка-заглушка \`ink-muted\` (картинка напівпрозора й сіра), пояснення під карткою, посилання немає.

**Токени.** \`surface\`, \`ink\`, \`ink-muted\`, \`accent\`, \`canvas\`, \`rounded-card\`, \`aspect-cover\`, \`text-lead\`, \`text-caption\`, \`text-display\` (номер на заглушці); відступи \`p-4\`, \`gap-4\`, \`gap-3\`.

**Коли використовувати.** Список робіт на головній і в розділі робіт. На головній завжди передавай \`cover\` з превʼю інтерфейсу: роботодавець має одразу бачити приклад роботи (заглушка з номером — лише поки немає скрінів). Не для інших посилань (для них \`Button\` або \`Nav\`).

**Як брати в код.**
\`\`\`tsx
import { WorkCard } from "@/components/WorkCard";
import cover from "@/assets/lasunka-cover.jpg";

<WorkCard number="01" title="Lasunka" type="website + app" href="/work/lasunka"
  cover={{ src: cover.src, alt: "Lasunka checkout screens" }} />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    number: { control: "text" },
    title: { control: "text" },
    type: { control: "text" },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    number: "01",
    title: "Lasunka",
    type: "website + app",
    disabled: false,
    disabledReason: "Coming in 2027.",
  },
  render: ({ disabled, disabledReason, ...rest }) => (
    <div className="max-w-sm">
      {disabled ? (
        <WorkCard {...rest} disabled disabledReason={disabledReason} />
      ) : (
        <WorkCard {...rest} href="#" />
      )}
    </div>
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
