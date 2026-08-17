import type { ReactNode, CSSProperties, ElementType } from 'react';

export type TextSize = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'display';

export interface TextProps {
  children?: ReactNode;
  /**
   * Step on the scale. The scale is deliberately bimodal — `xs`–`md`
   * (10–16px) carry the page, `display` appears at most once per screen,
   * and `lg`/`xl` (24/32px) are the only steps in between.
   */
  size?: TextSize;
  tone?: 'fg' | 'dim' | 'accent';
  /** 400 or 500. There is no 600+ in this system. */
  weight?: 'regular' | 'medium';
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Type primitive. Sizes, line-heights and tracking all come from tokens —
 * never hard-code a font-size.
 *
 * `display` already carries tight negative tracking (Inter runs wider than
 * SF Pro, so it needs it); do not add more.
 */
export function Text({
  children,
  size = 'base',
  tone = 'fg',
  weight = 'regular',
  as: Tag = 'p',
  className,
  style,
}: TextProps) {
  return (
    <Tag
      className={[
        'ds-text',
        `ds-text--${size}`,
        `ds-text--${tone}`,
        `ds-text--${weight}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {children}
    </Tag>
  );
}
