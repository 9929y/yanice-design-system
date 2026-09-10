# yanice-design-system

Design system package for [yaniceyang.com](https://yaniceyang.com), Yanice Yang's UX and AI product portfolio.

The system turns the site's visual direction into reusable tokens, components, and verification pages. It is intentionally small: a light neutral palette, Inter typography, two material tiers, and a strict rule that interaction feedback should come from form and motion before color.

## Why this exists

The portfolio needed a design system that could stay consistent across case studies, dashboard-like project sections, and compact navigation. This package captures those decisions as code rather than leaving them as one-off CSS.

The goal is not to make a broad component library. The goal is to make the portfolio's visual language durable enough to reuse, review, and evolve.

## Install / build / preview

```bash
npm install
npm run build
npx vite demo
```

Build output:

- `dist/yanice-ds.js`
- `dist/yanice-ds.css`
- TypeScript declarations

## Material model

The system has exactly two material tiers.

| Tier | Used for | Rule |
|---|---|---|
| Flat | cards, cells, containers | surface color plus one hairline, no elevation shadow |
| Glass | floating navigation | backdrop blur plus calibrated inset/outer shadows |

Glass is reserved for navigation because it is the only element that truly floats above content. Cards stay flat so the site remains quiet and scannable.

## Components

| Component | Purpose |
|---|---|
| `Root` | global background, font stack, and design tokens |
| `Surface` | flat container tier |
| `Text` | type scale and text variants |
| `GlassNav` | bottom floating navigation |
| `Card` | square interactive project card with hover/focus tilt |
| `Pill` | tags and compact filter chips |
| `AccentDot` | the site's single saturated mark |
| `Bento`, `BentoCell` | dashboard-style project grids |

## Tokens

```css
--ds-bg: #faf9f7;
--ds-surface: #ffffff;
--ds-hairline: #e8e5e0;
--ds-dim: #78716c;
--ds-fg: #1a1917;
--ds-accent: #0d7d74;
```

The palette is intentionally restrained. `--ds-accent` is used as a small mark, not as a general hover or focus color.

## Design constraints

- No elevation shadows on cards.
- No third material tier.
- No accent-color hover states.
- Type uses a tight small-text range plus one display size.
- Every hover affordance must also work with keyboard focus.
- Reduced-motion users should not receive 3D tilt.

## Verification

The repo includes a demo page for visual checks and component review.

Verified behavior to keep:

- Glass needs content underneath it to read as glass.
- `box-sizing: border-box` is required for nav geometry.
- Flat layering should stay quiet: surface, page, and hairline contrast are intentionally subtle.
- Card tilt should be visible but not theatrical.

## Licence

MIT — see [LICENSE](LICENSE).
