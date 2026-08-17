import type { ReactNode, CSSProperties } from 'react';

export interface PillProps {
  children?: ReactNode;
  /** Selected filter chips darken border and text — they do not fill. */
  selected?: boolean;
  /** Optional count, as on a filter chip. */
  count?: number;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Small capsule label — skill tags, filter chips, categories.
 *
 * Transparent fill plus a 1px hairline; selection darkens the border and text
 * rather than filling the shape. Height is 21px, matching the measured
 * reference. Never uses the accent colour.
 */
export function Pill({ children, selected, count, onClick, className, style }: PillProps) {
  const Tag = onClick ? 'button' : 'span';
  return (
    <Tag
      {...(onClick ? { type: 'button' as const, onClick } : {})}
      className={['ds-pill', selected && 'ds-pill--selected', className]
        .filter(Boolean)
        .join(' ')}
      {...(selected ? { 'aria-pressed': true } : {})}
      style={style}
    >
      {children}
      {count != null ? <span>{count}</span> : null}
    </Tag>
  );
}
