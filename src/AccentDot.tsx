import type { CSSProperties } from 'react';

export interface AccentDotProps {
  /** What the dot means, for screen readers. Omit only if a sibling label says it. */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * The site's **one** saturated mark — a small teal dot, typically a status
 * indicator beside the name.
 *
 * Usage rule, inherited from the reference site: **once per site.** The accent
 * appears nowhere else — not in nav, not on hover, not on focus (focus uses the
 * primary text colour). Its scarcity is the point; a second use spends it.
 */
export function AccentDot({ label, className, style }: AccentDotProps) {
  return (
    <span
      className={['ds-accent-dot', className].filter(Boolean).join(' ')}
      style={style}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    />
  );
}
