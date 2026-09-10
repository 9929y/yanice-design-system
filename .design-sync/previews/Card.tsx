import { Root, Card } from 'yanice-design-system';

/** 1:1 at rest — the ratio Figma artwork is drawn to. Flat: hairline, no shadow. */
export const AtRest = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      <Card title="Northwind" meta="Product · Agents" />
      <Card title="Lark Design" meta="1:1 Interviews" />
      <Card title="Opus Clip" meta="0→1 · 6M users" />
    </div>
  </Root>
);

/**
 * The hover/focus state, held open. Projected width is w·cos(theta), so 60°
 * gives exactly 1:2. Note how far the card overhangs its column — grids need
 * slack, or a raised z-index on the active card.
 */
export const TiltedOpen = () => (
  <Root>
    <div style={{ padding: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
      {[30, 45, 60].map((deg) => (
        <div key={deg} style={{ perspective: 1200 }}>
          <div
            className="ds-card"
            style={{ transform: `rotateY(-${deg}deg)`, transition: 'none' }}
          >
            <div className="ds-card__media">{deg}°</div>
          </div>
          <div className="ds-card__caption">
            <span className="ds-card__title">{deg}°</span>
            <span className="ds-card__meta">
              1:{(1 / Math.cos((deg * Math.PI) / 180)).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  </Root>
);

/** With real thumbnail content rather than the placeholder. */
export const WithThumbnail = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
      <Card title="Northwind" meta="Product · Agents · Shipped">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(140deg, #0d7d74, #1a1917)',
          }}
        />
      </Card>
      <Card title="Opus Clip" meta="0→1 · 6M users">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(140deg, #78716c, #e8e5e0)',
          }}
        />
      </Card>
    </div>
  </Root>
);

/** Caption without meta — title only. */
export const TitleOnly = () => (
  <Root>
    <div style={{ padding: 32, width: 260 }}>
      <Card title="TikTok Research" />
    </div>
  </Root>
);
