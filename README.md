# yanice-design-system

Design system for **yaniceyang.com** — Yanice Yang's UX portfolio.

Light neutral palette, Inter, and **exactly two material tiers**. Built to be
consumed by Claude Design via `/design-sync`.

- **Spec of record:** `AI_materials_library/01_projects/portfolio_ux/05_design_system.md`
- **Motion:** `.../06_animation.md`
- Every value in `src/tokens.css` is either a decision Yanice made or a figure
  measured off a reference site. Nothing here is invented for looks.

## Install / build / preview

```bash
npm install
npm run build      # tsc -> dist/*.d.ts, then vite -> dist/yanice-ds.{js,css}
npx vite demo      # visual verification page on :4310
```

## The two material tiers

There is no third tier, and **the system defines no elevation shadow.** Every
element is one of these:

| Tier | Where | How |
|---|---|---|
| **Flat** | every card, cell, container (`Surface`) | surface colour + 1px hairline, `box-shadow: none` |
| **Glass** | the floating nav, and nothing else (`GlassNav`) | `backdrop-filter: blur(8px) saturate(1.5)` + 6 inset/outer shadow layers, no border |

Glass is reserved for the nav because the nav is the only thing that genuinely
floats above content. Giving a card a shadow breaks the system.

### Verified behaviour (2026-08-17)

- The glass recipe **works over content and is nearly invisible over flat
  background** — it needs something to refract. See `demo/verify-glass-zoom.png`.
- `box-sizing: border-box` is **required**. Without it `height: 40px` +
  `padding: 8px` computes to 56px and the nav geometry collapses.
- Flat layering is quiet by design: surface-vs-page is 1.05:1, hairline-vs-page
  1.19:1. Apple's own cards sit at the same order of magnitude — this is what
  light minimal looks like, not a defect.
- Card tilt at 60° reads well; 30° is imperceptible, 70° is too extreme.

## Components

| Component | Notes |
|---|---|
| `Root` | **Required wrapper.** Carries background, Inter stack, and all tokens. Nothing is styled outside it. |
| `Surface` | Flat tier. `padding` defaults to 32px. |
| `Text` | The type scale. Never hard-code a font-size. |
| `GlassNav` | 240×40 capsule, 8px from the bottom. Selected tab changes **text colour only**. |
| `Card` | 1:1 at rest, tilts on hover *and* focus. `tilt` in degrees. |
| `Pill` | Skill tags / filter chips. Transparent fill + hairline. |
| `AccentDot` | The site's **one** saturated mark. |
| `Bento`, `BentoCell` | Dashboard grid. `columns` is a prop because the cell inventory is still open. |

## Typography

Inter. The scale is deliberately bimodal — `10 / 12 / 14 / 16` carry the page,
`display` appears at most once per screen, and `24 / 32` are the only steps
between. That shape comes from a pattern shared by every reference site in the
research: dense small text plus one huge display size, with 20–48px thin.

Inter runs wider than SF Pro, so display sizes take extra negative tracking
(`-0.03em`) and body takes 0.03 less line-height (1.44 rather than 1.47).

## Colour

Five neutrals plus one accent.

```
--ds-bg        #faf9f7   page (never pure white)
--ds-surface   #ffffff   card face
--ds-hairline  #e8e5e0   1px rule — the only card boundary
--ds-dim       #78716c   muted text (4.71:1 on glass — this is its LOWER bound)
--ds-fg        #1a1917   primary text (never pure black)
--ds-accent    #0d7d74   teal — ONCE per site, as a 999px dot
```

The accent follows the reference site's cyan family but inverts lightness: the
original `rgb(0,255,247)` glows on near-black and is 1.20:1 here. `#0d7d74` is
the lightest teal that still clears AA body text (4.75:1).

**The accent is never used in nav, on hover, or on focus** — focus uses
`--ds-fg`. Interaction feedback comes from form, not colour: `scale(0.95)` on
press, colour shift on nav tabs, 3D tilt on cards.

## Light source

One assumption for the whole system: **light from above-left.** Glass top edge
occludes (dark), bottom edge transmits (bright); tilted elements shade toward
lower-right. Break this in one place and every 3D read collapses.

## Accessibility

- Every `:hover` effect is also bound to `:focus-visible`.
- `prefers-reduced-motion: reduce` drops all transforms — a 3D tilt is a real
  vestibular trigger.
- `--ds-dim` at 4.71:1 on glass has almost no headroom. Lightening it fails AA.

## Still open

These are parameterised rather than guessed, and are tracked in the spec:

- Dashboard cell inventory → drives `Bento columns`
- Neutral colour temperature (warm vs pure grey)
- Whether Dashboard content extends under the nav (decides if glass reads there)
- Dark mode
