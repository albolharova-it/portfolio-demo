import { useId, type InputHTMLAttributes } from "react";

type Base = Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className" | "disabled"> & {
  label: string;
  /** Hint under the field (hidden while an error is shown). */
  hint?: string;
  /** Error message. Always shown as text together with the red border and icon. */
  error?: string;
};

export type TextFieldProps = Base &
  ({ disabled?: false; disabledReason?: never } | { disabled: true; disabledReason: string });

/**
 * Single-line form field with label, hint and error message.
 * Error state: `danger` border, icon and message text together.
 */
export function TextField({ label, hint, error, disabled, disabledReason, ...input }: TextFieldProps) {
  const id = useId();
  const noteId = `${id}-note`;
  const note = error ?? (disabled ? disabledReason : hint);

  const state = error
    ? "border-danger bg-surface text-ink"
    : disabled
      ? "cursor-not-allowed border-ink-muted bg-canvas text-ink-muted"
      : "border-ink-muted bg-surface text-ink hover:border-accent";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`text-caption ${disabled ? "text-ink-muted" : "text-ink"}`}>
        {label}
      </label>

      <div className="relative flex items-center">
        <input
          id={id}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={note ? noteId : undefined}
          className={
            "w-full rounded-control border px-4 py-3 text-body " +
            "placeholder:text-ink-muted outline-accent transition-colors " +
            "focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 " +
            (error ? "pr-8 " : "") +
            state
          }
          {...input}
        />
        {error && (
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-3 size-5 text-danger"
            fill="currentColor"
          >
            <path d="M10 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm0 12.5a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Zm.833-4.167a.833.833 0 0 1-1.666 0V6.667a.833.833 0 0 1 1.666 0V10Z" />
          </svg>
        )}
      </div>

      {note && (
        <p
          id={noteId}
          role={error ? "alert" : undefined}
          className={`text-caption ${error ? "text-danger" : "text-ink-muted"}`}
        >
          {note}
        </p>
      )}
    </div>
  );
}
