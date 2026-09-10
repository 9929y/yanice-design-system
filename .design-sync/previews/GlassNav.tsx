import { Root, GlassNav, Text } from 'yanice-design-system';

const TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'project', label: 'Project' },
];

const WORK = [
  { name: 'Northwind', tint: '#0d7d74' },
  { name: 'Lark Design', tint: '#1a1917' },
  { name: 'Opus Clip', tint: '#78716c' },
  { name: 'McKinsey', tint: '#0d9488' },
  { name: 'MiFinance', tint: '#3f3a35' },
];

/**
 * Glass needs something behind it to refract. On a flat background the nav is
 * very nearly invisible — measured behaviour, not a preview artefact — so most
 * cells here sit the nav over a thumbnail row like the Project view's.
 */
const Stage = ({ children, flat }: { children: React.ReactNode; flat?: boolean }) => (
  <Root>
    <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
      {flat ? null : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            gap: 12,
            padding: 16,
          }}
        >
          {WORK.map((w) => (
            <div
              key={w.name}
              style={{
                flex: 1,
                borderRadius: 12,
                background: w.tint,
                display: 'grid',
                placeItems: 'end start',
                padding: 12,
              }}
            >
              <Text size="xs" as="span" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {w.name}
              </Text>
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  </Root>
);

/** Dashboard selected. The selected tab changes text colour only — no pill, no fill. */
export const DashboardActive = () => (
  <Stage>
    <GlassNav tabs={TABS} activeId="dashboard" />
  </Stage>
);

/** Project selected — same capsule, the colour weight has moved to the right tab. */
export const ProjectActive = () => (
  <Stage>
    <GlassNav tabs={TABS} activeId="project" />
  </Stage>
);

/** With the second glass capsule for icon actions. The pair centres as a group. */
export const WithTrailing = () => (
  <Stage>
    <GlassNav
      tabs={TABS}
      activeId="dashboard"
      trailing={
        <>
          <button className="ds-nav__tab" style={{ width: 24 }} aria-label="Grid view">▦</button>
          <button className="ds-nav__tab" style={{ width: 24 }} aria-label="About">◉</button>
        </>
      }
    />
  </Stage>
);

/**
 * Over the plain page background, with nothing to refract. This is how quiet the
 * glass really is — worth knowing before placing it on a static screen.
 */
export const OverFlatBackground = () => (
  <Stage flat>
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
      <Text size="sm" tone="dim">nothing behind the nav — glass reads as a faint outline</Text>
    </div>
    <GlassNav tabs={TABS} activeId="dashboard" />
  </Stage>
);
