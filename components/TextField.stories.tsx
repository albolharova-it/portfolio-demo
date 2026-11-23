import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ComponentType } from "react";
import { TextField } from "./TextField";

type Args = {
  label: string;
  placeholder: string;
  defaultValue: string;
  hint: string;
  error: boolean;
  errorText: string;
  disabled: boolean;
  disabledReason: string;
};

const meta = {
  title: "Components/TextField",
  // Controls drive flat args; render maps them onto the component's props.
  component: TextField as unknown as ComponentType<Args>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Що це.** Однорядкове поле форми з підписом, підказкою і повідомленням про помилку.

**Параметри.**
- \`label\` — підпис над полем (обовʼязковий).
- \`hint\` — підказка під полем; ховається, коли є помилка.
- \`error\` — текст помилки; якщо є, поле в стані помилки.
- \`disabled\` + \`disabledReason\` — вимкнене поле і текст-пояснення під ним (обовʼязковий).
- Решта — звичайні атрибути \`<input>\`: \`type\`, \`placeholder\`, \`defaultValue\`, \`name\`, \`required\`…

**Стани.** default: фон \`surface\`, межа \`ink-muted\`. hover: межа \`accent\`. focus: межа й контур \`accent\`. disabled: фон \`canvas\`, текст і межа \`ink-muted\`, пояснення під полем. Помилка: межа \`danger\`, іконка \`danger\` у полі й текст помилки \`danger\` під ним (\`aria-invalid\`, повідомлення читається екранним читачем).

**Токени.** \`surface\`, \`canvas\`, \`ink\`, \`ink-muted\`, \`accent\`, \`danger\`, \`rounded-control\`, \`text-body\`, \`text-caption\`; відступи \`px-4\`, \`py-3\`, \`gap-2\`.

**Коли використовувати.** Короткі відповіді: імʼя, email, тема. Не для довгого тексту (потрібне окреме багаторядкове поле) і не для вибору з варіантів.

**Як брати в код.**
\`\`\`tsx
import { TextField } from "@/components/TextField";

<TextField label="Email" type="email" name="email" hint="I reply within two days." />
<TextField label="Email" defaultValue="alina@" error="Enter an email like name@example.com." />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    defaultValue: { control: "text", description: "Значення поля (стан «заповнене»)" },
    hint: { control: "text" },
    error: { control: "boolean", description: "Стан помилки" },
    errorText: { control: "text", description: "Текст помилки" },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    label: "Email",
    placeholder: "you@example.com",
    defaultValue: "",
    hint: "I reply within two days.",
    error: false,
    errorText: "Enter an email like name@example.com.",
    disabled: false,
    disabledReason: "The contact form opens after launch.",
  },
  render: ({ label, placeholder, defaultValue, hint, error, errorText, disabled, disabledReason }) => (
    <div className="max-w-md">
      {disabled ? (
        <TextField
          key={defaultValue}
          label={label}
          placeholder={placeholder}
          defaultValue={defaultValue}
          hint={hint}
          error={error ? errorText : undefined}
          disabled
          disabledReason={disabledReason}
        />
      ) : (
        <TextField
          key={defaultValue}
          label={label}
          placeholder={placeholder}
          defaultValue={defaultValue}
          hint={hint}
          error={error ? errorText : undefined}
        />
      )}
    </div>
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
