import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Root,
  Surface,
  Text,
  GlassNav,
  Card,
  Pill,
  AccentDot,
  Bento,
  BentoCell,
} from '../src';

const PROJECTS = [
  { title: 'Northwind', meta: 'Product · Agents · Shipped' },
  { title: 'Lark Design', meta: '1:1 Interviews · Onboarding' },
  { title: 'Opus Clip', meta: '0→1 · 6M users' },
  { title: 'McKinsey Ecommerce', meta: 'Strategy · Commerce' },
  { title: 'MiFinance', meta: 'Onboarding · Fintech' },
];

function Demo() {
  const [view, setView] = useState('dashboard');
  const [filter, setFilter] = useState('all');

  return (
    <Root>
      <div style={{ minHeight: '100vh', padding: 48, paddingBottom: 0 }}>
        {/* ── type scale ─────────────────────────────────────── */}
        <Text size="xs" tone="dim">TYPE SCALE</Text>
        <div style={{ margin: '8px 0 40px' }}>
          <Text size="display" weight="medium">Yanice Yang</Text>
          <Text size="xl">32 — section title</Text>
          <Text size="lg">24 — card title</Text>
          <Text size="md">16 — emphasised body</Text>
          <Text size="base">14 — body. The page is carried by small text.</Text>
          <Text size="sm" tone="dim">12 — meta, highest volume</Text>
          <Text size="xs" tone="dim">10 — labels</Text>
        </div>

        {/* ── accent: exactly one ────────────────────────────── */}
        <Text size="xs" tone="dim">ACCENT — ONE PER SITE</Text>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0 40px' }}>
          <AccentDot label="Available for work" />
          <Text size="sm">Yanice Yang · UX Designer</Text>
        </div>

        {/* ── pills ──────────────────────────────────────────── */}
        <Text size="xs" tone="dim">PILLS / FILTER CHIPS</Text>
        <div style={{ display: 'flex', gap: 6, margin: '8px 0 40px', flexWrap: 'wrap' }}>
          {[['all', 'All', 5], ['product', 'Product', 3], ['research', 'Research', 2]].map(
            ([id, label, n]) => (
              <Pill
                key={id as string}
                selected={filter === id}
                count={n as number}
                onClick={() => setFilter(id as string)}
              >
                {label as string}
              </Pill>
            ),
          )}
        </div>

        {/* ── Bento: Flat surfaces ───────────────────────────── */}
        <Text size="xs" tone="dim">DASHBOARD — FLAT SURFACES, NO SHADOW</Text>
        <div style={{ margin: '8px 0 40px' }}>
          <Bento columns={4}>
            <BentoCell w={2} h={2}>
              <Surface style={{ height: '100%', padding: 32 }}>
                <Text size="lg">UX Designer</Text>
                <Text size="base" tone="dim" style={{ marginTop: 12 }}>
                  Fashion designer for five years, then UX, now AI products.
                </Text>
              </Surface>
            </BentoCell>
            <BentoCell>
              <Surface style={{ height: '100%' }}>
                <Text size="sm" tone="dim">Résumé</Text>
              </Surface>
            </BentoCell>
            <BentoCell>
              <Surface style={{ height: '100%' }}>
                <Text size="sm" tone="dim">Contact</Text>
              </Surface>
            </BentoCell>
            <BentoCell w={2}>
              <Surface style={{ height: '100%' }}>
                <Text size="sm" tone="dim">Explorations</Text>
              </Surface>
            </BentoCell>
          </Bento>
        </div>

        {/* ── Cards: 1:1 → tilt. Hover to verify. ────────────── */}
        <Text size="xs" tone="dim">
          PROJECT CARDS — 1:1 AT REST, TILT ON HOVER (3rd is forced tilted for capture)
        </Text>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 24,
            margin: '8px 0 40px',
          }}
        >
          {PROJECTS.map((p, i) => (
            <Card key={p.title} {...p} tilt={i === 2 ? 60 : 60} />
          ))}
        </div>

        {/* ── tilt angle comparison ──────────────────────────── */}
        <Text size="xs" tone="dim">TILT ANGLES — 0 / 30 / 45 / 60 / 70</Text>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 24,
            margin: '8px 0 40px',
          }}
        >
          {[0, 30, 45, 60, 70].map((a) => (
            <div key={a} className="ds-card-stage">
              <div
                className="ds-card"
                style={{ transform: `rotateY(-${a}deg)`, transition: 'none' }}
              >
                <div className="ds-card__media">{a}°</div>
              </div>
              <div className="ds-card__caption">
                <span className="ds-card__title">{a}°</span>
                <span className="ds-card__meta">
                  {a === 0 ? '1:1' : `1:${(1 / Math.cos((a * Math.PI) / 180)).toFixed(2)}`}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── content UNDER the nav, so glass has something to refract ── */}
        <Text size="xs" tone="dim">
          GLASS TEST — content runs beneath the nav so refraction is visible
        </Text>
        {/* extends to the document edge on purpose: at scroll-end the nav
            sits ON this band, which is the only way to judge refraction */}
        <div
          style={{
            marginTop: 8,
            marginLeft: -48,
            marginRight: -48,
            height: 360,
            background:
              'linear-gradient(90deg, #0d7d74 0%, #1a1917 22%, #ffffff 44%, #0d9488 62%, #1a1917 82%, #faf9f7 100%)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Text size="xl" style={{ color: '#fff' }}>
            the nav should be sitting on this
          </Text>
        </div>
      </div>

      <GlassNav
        tabs={[
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'project', label: 'Project' },
        ]}
        activeId={view}
        onChange={setView}
        trailing={
          <>
            <button className="ds-nav__tab" style={{ width: 24 }} aria-label="Grid">▦</button>
            <button className="ds-nav__tab" style={{ width: 24 }} aria-label="Info">◉</button>
          </>
        }
      />
    </Root>
  );
}

createRoot(document.getElementById('root')!).render(<Demo />);
