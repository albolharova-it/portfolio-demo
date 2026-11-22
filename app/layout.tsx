import type { Metadata } from "next";
import { Mate } from "next/font/google";
import "./globals.css";

const mate = Mate({
  variable: "--font-mate",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

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
