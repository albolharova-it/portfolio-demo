import Image from "next/image";
import Link from "next/link";
import { useId } from "react";

type Common = {
  /** Order number shown on the card, e.g. "01". */
  number: string;
  title: string;
  /** Short type line, e.g. "website + app". */
  type: string;
  /** Cover image; square (aspect-cover). Without it a placeholder is drawn. */
  cover?: { src: string; alt: string };
};

export type WorkCardProps = Common &
  ({ href: string; disabled?: false; disabledReason?: never } | { href?: string; disabled: true; disabledReason: string });

function Cover({ number, cover }: Pick<Common, "number" | "cover">) {
  return (
    <div className="relative aspect-cover w-full overflow-hidden rounded-card bg-accent">
      {cover ? (
        <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-display text-canvas">{number}</span>
      )}
    </div>
  );
}

export function WorkCard(props: WorkCardProps) {
  const { number, title, type, cover } = props;
  const reasonId = useId();

  const text = (
    <span className="flex items-baseline gap-3">
      <span className="text-caption">{number}</span>
      <span className="flex flex-col">
        <span className="text-lead underline-offset-4 group-hover:underline">{title}</span>
        <span className="text-caption text-ink-muted">{type}</span>
      </span>
    </span>
  );

  if (props.disabled) {
    return (
      <div
        aria-disabled="true"
        aria-describedby={reasonId}
        className="flex cursor-not-allowed flex-col gap-4 rounded-card bg-surface p-4 text-ink-muted"
      >
        <div className="opacity-50">
          <Cover number={number} cover={cover} />
        </div>
        {text}
        <p id={reasonId} className="text-caption">
          {props.disabledReason}
        </p>
      </div>
    );
  }

  return (
    <Link
      href={props.href}
      className={
        "group flex flex-col gap-4 rounded-card bg-surface p-4 text-ink transition-colors " +
        "outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"
      }
    >
      <Cover number={number} cover={cover} />
      {text}
    </Link>
  );
}
