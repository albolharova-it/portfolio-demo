import Link from "next/link";
import { useId, type ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "sm";

type Common = {
  children: ReactNode;
  /** One primary button per zone; everything else is secondary. Default: secondary. */
  variant?: Variant;
  /** md — main buttons of a section ("View case"); sm — compact uppercase button in the header ("Download CV"). Default: md. */
  size?: Size;
};

type Enabled = Common & {
  disabled?: false;
  disabledReason?: never;
} & (
    | {
        href: string;
        /** Link downloads the file instead of opening it (e.g. the CV). */
        download?: boolean;
        onClick?: never;
      }
    | { href?: never; download?: never; onClick?: () => void; type?: "button" | "submit" }
  );

type Disabled = Common & {
  disabled: true;
  /** Shown next to a disabled button: tells why it can't be used. */
  disabledReason: string;
  href?: string;
};

export type ButtonProps = Enabled | Disabled;

const base =
  "inline-flex items-center justify-center gap-2 rounded-control border " +
  "transition-colors outline-accent focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes: Record<Size, string> = {
  md: "px-8 py-4 text-lead",
  sm: "px-6 py-3 text-body uppercase",
};

const enabled: Record<Variant, string> = {
  primary:
    "border-accent bg-accent text-canvas hover:border-ink-muted hover:bg-ink-muted",
  secondary:
    "border-ink-muted bg-transparent text-accent hover:border-accent hover:bg-accent hover:text-canvas",
};

const disabledStyle: Record<Variant, string> = {
  primary: "cursor-not-allowed border-ink-muted bg-surface text-ink-muted",
  secondary: "cursor-not-allowed border-ink-muted bg-transparent text-ink-muted",
};

/**
 * Button or link styled as a button. `primary` is the single main action of a zone, `secondary` everything else.
 * The label names what opens ("View Lasunka case"), not just "View case".
 * Disabled buttons always show `disabledReason` next to them.
 */
export function Button(props: ButtonProps) {
  const { children, variant = "secondary", size = "md" } = props;
  const reasonId = useId();

  if (props.disabled) {
    return (
      <span className="inline-flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled
          aria-describedby={reasonId}
          className={`${base} ${sizes[size]} ${disabledStyle[variant]}`}
        >
          {children}
        </button>
        <span id={reasonId} className="text-caption text-ink-muted">
          {props.disabledReason}
        </span>
      </span>
    );
  }

  const className = `${base} ${sizes[size]} ${enabled[variant]}`;

  if (props.href !== undefined) {
    return (
      <Link href={props.href} download={props.download || undefined} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={className}>
      {children}
    </button>
  );
}
