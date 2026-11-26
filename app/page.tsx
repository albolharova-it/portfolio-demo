import Image from "next/image";
import Link from "next/link";
import photo from "@/assets/photo.jpg";
import { Button } from "@/components/Button";
import { Nav } from "@/components/Nav";

const cases = [
  { number: "01", title: "Lasunka", type: "website + app", href: "#lasunka" },
  { number: "02", title: "BalanceFIT", type: "mobile app", href: "#balancefit" },
];

const tags = ["UX/UI design", "E-commerce", "Mobile apps", "Catalog → Cart → Checkout", "Figma", "Framer"];

/** Concentric grooves of the record; drawn in the current text colour. */
function Grooves() {
  const radii = [44, 51, 58, 65, 72, 79, 86];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className="absolute inset-0 size-full text-canvas opacity-25"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.35"
    >
      {radii.map((r) => (
        <circle key={r} cx="100" cy="100" r={r} />
      ))}
    </svg>
  );
}

function CaseLink({ number, title, type, href }: (typeof cases)[number]) {
  return (
    <Link
      href={href}
      className={
        "group flex items-baseline gap-3 rounded-control text-canvas " +
        "outline-canvas focus-visible:outline-2 focus-visible:outline-offset-2"
      }
    >
      <span className="text-body">{number}</span>
      <span className="flex flex-col">
        <span className="text-lead underline-offset-4 group-hover:underline">{title}</span>
        <span className="text-caption">{type}</span>
      </span>
    </Link>
  );
}

function SelectedWork() {
  return (
    <section aria-labelledby="work-title" className="flex w-full max-w-md flex-col gap-6 justify-self-center">
      <h2 id="work-title" className="text-caption uppercase">
        ( Selected work )
      </h2>
      <div className="relative aspect-square w-full overflow-hidden rounded-full bg-accent">
        <Grooves />
        <div className="absolute inset-0 grid grid-rows-3 place-items-center p-8">
          <CaseLink {...cases[0]} />
          <div className="flex aspect-square w-2/5 flex-col items-center justify-center gap-2 rounded-full bg-canvas text-center text-ink">
            <span className="text-body">2 cases</span>
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            <span className="text-caption uppercase">Concepts · 2026</span>
          </div>
          <CaseLink {...cases[1]} />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const line = tags.join(" · ");
  return (
    <aside aria-label="What I do" className="overflow-hidden bg-accent py-6 text-canvas">
      <p className="whitespace-nowrap px-8 text-caption uppercase">
        {line} · <span aria-hidden="true">{line} · {line}</span>
      </p>
    </aside>
  );
}

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-6 px-6 py-8 md:px-8">
        <Link
          href="/"
          className="mr-auto rounded-control text-display outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Alina Bolharova (UI/UX Designer)
        </Link>
        <Nav
          items={[
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <Button size="sm" disabled disabledReason="CV coming soon">
          Download CV ↓
        </Button>
      </header>

      <main className="mx-auto grid w-full max-w-7xl flex-1 items-start gap-8 px-6 pb-8 md:grid-cols-2 md:px-8">
        <section id="about" aria-labelledby="intro-title" className="flex max-w-xl flex-col gap-6">
          <p className="text-body">01 About me</p>
          <div className="flex flex-col gap-3">
            <h1 id="intro-title" className="text-heading">
              UI/UX designer for brands that sell online: a clear catalog, a simple cart, a fast checkout.
            </h1>
            <p className="text-caption text-ink-muted">
              UI/UX Designer · Warsaw · Open to full-time, project and remote work.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="#lasunka">
              View Lasunka case
            </Button>
            <Button href="#contact">Contact me</Button>
          </div>
          <Image
            src={photo}
            alt="Alina Bolharova"
            sizes="(min-width: 768px) 36rem, 100vw"
            className="aspect-portrait w-full max-w-md rounded-card bg-surface object-cover"
            loading="eager"
          />
        </section>

        <div id="work" className="grid">
          <SelectedWork />
        </div>
      </main>

      <Ticker />
    </>
  );
}
