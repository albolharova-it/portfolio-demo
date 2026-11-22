import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { Nav } from "@/components/Nav";
import { TextField } from "@/components/TextField";
import { WorkCard } from "@/components/WorkCard";

export const metadata: Metadata = { title: "Design system — Alina Bolharova" };

const colors = [
  { token: "canvas", value: "#FEFCEF", use: "page background; text on accent" },
  { token: "surface", value: "#F4EDDA", use: "cards and fields" },
  { token: "line", value: "#E7D6D0", use: "decorative lines only" },
  { token: "accent", value: "#66001F", use: "buttons, links, focus" },
  { token: "ink", value: "#66001F", use: "text" },
  { token: "ink-muted", value: "#944C5D", use: "captions; field and outline-button borders" },
  { token: "danger", value: "#A63A00", use: "error text, border, icon" },
];

const swatch: Record<string, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  line: "bg-line",
  accent: "bg-accent",
  ink: "bg-ink",
  "ink-muted": "bg-ink-muted",
  danger: "bg-danger",
};

const type = [
  { token: "text-display", spec: "34 / 1.1 / −0.03em", className: "text-display" },
  { token: "text-heading", spec: "28 / 1.2 / −0.02em", className: "text-heading" },
  { token: "text-lead", spec: "20 / 1.3", className: "text-lead" },
  { token: "text-body", spec: "15 / 1.4", className: "text-body" },
  { token: "text-caption", spec: "13 / 1.35", className: "text-caption" },
];

function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6 border-t border-line py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-heading">{title}</h2>
        {note && <p className="text-caption text-ink-muted">{note}</p>}
      </div>
      {children}
    </section>
  );
}

function State({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-caption text-ink-muted uppercase">{name}</span>
      {children}
    </div>
  );
}

export default function DesignSystem() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col p-6 md:p-8">
      <header className="flex flex-col gap-3 pb-8">
        <h1 className="text-display">Design system</h1>
        <p className="text-lead text-ink-muted">Tokens and components for the portfolio. Rules: CLAUDE.md.</p>
      </header>

      <Section title="Colours">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map((c) => (
            <li key={c.token} className="flex flex-col gap-2">
              <span className={`aspect-cover w-full rounded-card border border-line ${swatch[c.token]}`} />
              <span className="text-body">{c.token}</span>
              <span className="text-caption text-ink-muted">
                {c.value} · {c.use}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Typography" note="Mate, regular 400 — the only weight the font has.">
        <ul className="flex flex-col gap-4">
          {type.map((t) => (
            <li key={t.token} className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
              <span className="text-caption text-ink-muted md:w-48">
                {t.token} · {t.spec}
              </span>
              <span className={t.className}>A clear catalog, a simple cart</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Shape and spacing" note="Spacing steps: 8 · 12 · 16 · 24 · 32 px (p-2, p-3, p-4, p-6, p-8).">
        <div className="flex flex-wrap items-end gap-8">
          <State name="rounded-control">
            <span className="block rounded-control bg-accent px-6 py-3 text-canvas">999px</span>
          </State>
          <State name="rounded-card">
            <span className="flex size-32 items-center justify-center rounded-card bg-surface">32px</span>
          </State>
          <State name="aspect-cover">
            <span className="flex aspect-cover w-32 items-center justify-center rounded-card bg-accent text-canvas">
              1 : 1
            </span>
          </State>
          <State name="spacing">
            <span className="flex items-end gap-3">
              {["p-2", "p-3", "p-4", "p-6", "p-8"].map((p) => (
                <span key={p} className="flex flex-col items-center gap-2">
                  <span className={`block bg-accent ${p}`} />
                  <span className="text-caption text-ink-muted">{p}</span>
                </span>
              ))}
            </span>
          </State>
        </div>
      </Section>

      <Section
        title="Button"
        note="Hover with the mouse and press Tab to see hover and focus. One primary button per zone."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <State name="Primary — default · hover · focus">
            <div>
              <Button variant="primary" href="#">
                View case
              </Button>
            </div>
          </State>
          <State name="Primary — disabled">
            <Button variant="primary" disabled disabledReason="Case study is being written">
              View case
            </Button>
          </State>
          <State name="Secondary — default · hover · focus">
            <div>
              <Button href="#">Contact me</Button>
            </div>
          </State>
          <State name="Secondary — disabled">
            <Button disabled disabledReason="CV will be added soon">
              Download CV
            </Button>
          </State>
        </div>
      </Section>

      <Section title="Text field" note="Hover, click or press Tab to see hover and focus.">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <State name="Default · hover · focus">
            <TextField label="Email" type="email" placeholder="you@example.com" hint="I reply within two days." />
          </State>
          <State name="Error">
            <TextField
              label="Email"
              type="email"
              defaultValue="alina@"
              error="Enter an email like name@example.com."
            />
          </State>
          <State name="Disabled">
            <TextField label="Message" disabled disabledReason="The contact form opens after launch." />
          </State>
        </div>
      </Section>

      <Section title="Work card" note="Hover underlines the title; Tab shows focus.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <State name="Default · hover · focus">
            <WorkCard number="01" title="Lasunka" type="website + app" href="#" />
          </State>
          <State name="Default · hover · focus">
            <WorkCard number="02" title="BalanceFIT" type="mobile app" href="#" />
          </State>
          <State name="Disabled">
            <WorkCard number="03" title="Next case" type="in progress" disabled disabledReason="Coming in 2027." />
          </State>
        </div>
      </Section>

      <Section title="Navigation" note="Current item is underlined; hover underlines; Tab shows focus.">
        <div className="flex flex-col gap-6">
          <State name="Default · current · hover · focus">
            <Nav
              current="#work"
              items={[
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </State>
          <State name="With a disabled item">
            <Nav
              label="Example"
              items={[
                { label: "Work", href: "#work" },
                { label: "Blog", disabled: true, disabledReason: "coming soon" },
              ]}
            />
          </State>
        </div>
      </Section>
    </main>
  );
}
