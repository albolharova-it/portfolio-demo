import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 p-8">
      <p>Alina Bolharova — portfolio. Design system in progress.</p>
      <Link href="/design-system" className="text-accent underline underline-offset-4">
        Open the design system
      </Link>
    </main>
  );
}
