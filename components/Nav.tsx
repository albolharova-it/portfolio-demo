import Link from "next/link";

export type NavItem =
  | { label: string; href: string; disabled?: false; disabledReason?: never }
  | { label: string; href?: string; disabled: true; disabledReason: string };

export type NavProps = {
  items: NavItem[];
  /** href of the current page or section; marked with aria-current. */
  current?: string;
  label?: string;
};

const link =
  "uppercase underline-offset-4 transition-colors hover:underline " +
  "rounded-control outline-accent focus-visible:outline-2 focus-visible:outline-offset-2";

export function Nav({ items, current, label = "Main" }: NavProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap items-baseline gap-6 text-body">
        {items.map((item) =>
          item.disabled ? (
            <li key={item.label} className="flex items-baseline gap-2 text-ink-muted">
              <span aria-disabled="true" className="cursor-not-allowed uppercase">
                {item.label}
              </span>
              <span className="text-caption">({item.disabledReason})</span>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={item.href === current ? "page" : undefined}
                className={`${link} text-ink ${item.href === current ? "underline" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
