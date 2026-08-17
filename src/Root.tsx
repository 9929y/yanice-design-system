import type { ReactNode, CSSProperties } from 'react';

export interface RootProps {
  children?: ReactNode;
  /** Bento column count. Open decision — pass the value you want. */
  columns?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Root wrapper. **Required.** It carries the page background, the Inter
 * stack, and every design token — without it, nothing below is styled and
 * `var(--ds-*)` lookups fail silently.
 *
 * Wrap the whole app once:
 * ```tsx
 * <Root><Bento>…</Bento><GlassNav … /></Root>
 * ```
 */
export function Root({ children, columns, className, style }: RootProps) {
  return (
    <div
      className={['ds-root', className].filter(Boolean).join(' ')}
      style={{ ...(columns ? { ['--ds-bento-cols' as string]: columns } : {}), ...style }}
    >
      {children}
    </div>
  );
}
