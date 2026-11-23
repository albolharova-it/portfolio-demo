import type { Preview } from "@storybook/nextjs-vite";
import { mate } from "../app/fonts";
import "../app/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${mate.variable} font-sans text-body text-ink`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
};

export default preview;
