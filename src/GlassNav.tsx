import type { ReactNode, CSSProperties } from 'react';

export interface GlassNavTab {
  id: string;
  label: string;
}

export interface GlassNavProps {
  /** Usually two: `Dashboard` and `Project`. */
  tabs: GlassNavTab[];
  activeId: string;
  onChange?: (id: string) => void;
  /**
   * Optional second glass capsule to the right (icon buttons). The pair is
   * centred as a group, which is why the tab capsule itself sits left of centre.
   */
  trailing?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Tier 2 material — **Glass**. The floating tab bar, and the *only* glass in
 * the system. It earns the material by genuinely floating above content.
 *
 * Geometry is measured and self-consistent: `240 = 8 + 108 + 8 + 108 + 8`,
 * `40 = 8 + 24 + 8`. Everything lands on the 8px base.
 *
 * The selected tab **changes text colour only** — muted → primary. No sliding
 * pill, no fill, no shadow, no weight change. The glass container is the only
 * solid object; tabs are text inside it. This is deliberately more restrained
 * than a native iOS segmented control.
 *
 * The accent colour is never used here.
 */
export function GlassNav({
  tabs,
  activeId,
  onChange,
  trailing,
  className,
  style,
}: GlassNavProps) {
  return (
    <nav
      className={['ds-nav', className].filter(Boolean).join(' ')}
      style={style}
      aria-label="View switcher"
    >
      <div className="ds-nav__group ds-glass">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className="ds-nav__tab"
            aria-current={t.id === activeId ? 'page' : undefined}
            onClick={() => onChange?.(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {trailing ? <div className="ds-nav__trailing ds-glass">{trailing}</div> : null}
    </nav>
  );
}
