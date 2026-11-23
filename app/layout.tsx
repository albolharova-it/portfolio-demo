import type { Metadata } from "next";
import { mate } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alina Bolharova — UI/UX Designer",
  description:
    "UI/UX designer for brands that sell online: a clear catalog, a simple cart, a fast checkout.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mate.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
