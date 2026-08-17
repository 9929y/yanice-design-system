import type { ReactNode, CSSProperties } from 'react';

export interface BentoProps {
  children?: ReactNode;
  /**
   * Column count. Left as a prop on purpose: the Dashboard cell inventory is
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
export function Bento({ children, columns = 4, className, style }: BentoProps) {
  return (
    <div
      className={['ds-bento', className].filter(Boolean).join(' ')}
      style={{ ['--ds-bento-cols' as string]: columns, ...style }}
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
 * One Dashboard cell. Combine with `Surface` for the Flat material:
 * ```tsx
 * <BentoCell w={2}><Surface padding="none">…</Surface></BentoCell>
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
