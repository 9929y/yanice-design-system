import type { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  /** Project name. Rendered at normal contrast in the caption. */
  title: string;
  /** Disciplines or year, right-aligned opposite the title. */
  meta?: string;
  /** Thumbnail. Omit to render the placeholder — thumbnails are not final yet. */
  children?: ReactNode;
  href?: string;
  /**
   * Tilt in degrees applied on hover/focus. Projected width is `w · cos(theta)`,
   * so `60` yields exactly 1:2. Steep enough to distort the thumbnail heavily —
   * lower it if that reads badly. Still an open decision.
   */
  tilt?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Project thumbnail. **1:1 at rest** — that ratio is the one settled piece of
 * the card spec and is what Figma artwork is drawn to.
 *
 * On hover *and* keyboard focus it rotates about the vertical axis. A tilted
 * card overhangs its cell, so grids need slack around it. Under
 * `prefers-reduced-motion` the tilt is dropped entirely.
 *
 * Flat material: hairline border, no shadow.
 */
export function Card({
  title,
  meta,
  children,
  href,
  tilt = 60,
  className,
  style,
}: CardProps) {
  const Tag = href ? 'a' : 'div';
  return (
    <div className="ds-card-stage">
      <Tag
        {...(href ? { href } : { tabIndex: 0, role: 'link' })}
        className={['ds-card', className].filter(Boolean).join(' ')}
        style={{ ['--ds-card-tilt' as string]: `${-Math.abs(tilt)}deg`, ...style }}
        aria-label={meta ? `${title} — ${meta}` : title}
      >
        <div className="ds-card__media">{children ?? 'placeholder'}</div>
      </Tag>
      <div className="ds-card__caption">
        <span className="ds-card__title">{title}</span>
        {meta ? <span className="ds-card__meta">{meta}</span> : null}
      </div>
    </div>
  );
}
