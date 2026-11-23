import { Mate } from "next/font/google";

/**
 * Base font of the site, shared by the app layout and Storybook.
 * Mate has no Cyrillic subset on Google Fonts, so Ukrainian text falls back to Georgia.
 */
export const mate = Mate({
  variable: "--font-mate",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});
