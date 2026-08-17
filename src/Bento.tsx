import type { ReactNode, CSSProperties } from 'react';

export interface BentoProps {
  children?: ReactNode;
  /**
   * Column count. Omit to inherit from `Root columns`. Left as a prop on purpose:
   * still an open decision, and column count follows from it.
   */
  columns?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Dashboard grid. Cells are tight to each other (12px) but generous inside
 * (32px) — the density decision was "fewer, larger, airier cells", so a
 * Dashboard holds roughly four to six.
 *
 * Leave slack around any `Card`: a tilted card overhangs its cell.
 */
export function Bento({ children, columns, className, style }: BentoProps) {
  return (
    <div
      className={['ds-bento', className].filter(Boolean).join(' ')}
      style={{ ...(columns ? { ['--ds-bento-cols' as string]: columns } : {}), ...style }}
    >
      {children}
    </div>
  );
}

export interface BentoCellProps {
  children?: ReactNode;
  /** Columns to span. */
  w?: number;
  /** Rows to span. */
  h?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * One Dashboard cell — pure grid placement, with **no padding of its own**.
 * The padding that makes a cell feel airy belongs to the `Surface` inside it
 * (32px by default). Put it on both and the visual gap between two surfaces
 * becomes 76px instead of 12.
 *
 * ```tsx
 * <BentoCell w={2}><Surface>…</Surface></BentoCell>
 * ```
 */
export function BentoCell({ children, w = 1, h = 1, className, style }: BentoCellProps) {
  return (
    <div
      className={['ds-bento__cell', className].filter(Boolean).join(' ')}
      style={{
        ['--ds-cell-w' as string]: w,
        ['--ds-cell-h' as string]: h,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
