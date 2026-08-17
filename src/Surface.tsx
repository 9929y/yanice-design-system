import type { ReactNode, CSSProperties, ElementType } from 'react';

export interface SurfaceProps {
  children?: ReactNode;
  /** Render as a different element. Default `div`. */
  as?: ElementType;
  /** Inner padding. Default `card` (32px) — fewer, larger cells each need air. */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'card';
  className?: string;
  style?: CSSProperties;
}

const PAD: Record<NonNullable<SurfaceProps['padding']>, string> = {
  none: '0',
  sm: 'var(--ds-sp-sm)',
  md: 'var(--ds-sp-md)',
  lg: 'var(--ds-sp-lg)',
  card: 'var(--ds-pad-card)',
};

/**
 * Tier 1 material — **Flat**. Every container in the system is one of these.
 *
 * Layering comes from surface colour plus a 1px hairline. **It has no shadow,
 * and must not be given one:** the system defines exactly two materials, and
 * elevation shadow is not one of them. To separate two surfaces, change the
 * background or rely on the hairline.
 */
export function Surface({
  children,
  as: Tag = 'div',
  padding = 'card',
  className,
  style,
}: SurfaceProps) {
  return (
    <Tag
      className={['ds-surface', className].filter(Boolean).join(' ')}
      style={{ padding: PAD[padding], ...style }}
    >
      {children}
    </Tag>
  );
}
