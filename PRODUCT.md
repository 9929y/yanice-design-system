# Product Notes

## Register

Design system / portfolio infrastructure.

## User

Yanice, future collaborators, and any implementation environment that needs to render the portfolio's design language consistently.

## Product purpose

`yanice-design-system` turns the visual decisions behind `yaniceyang.com` into code. It gives the portfolio a small, durable layer of tokens and components so future pages can be built from the same rules instead of copying CSS by hand.

Success criteria:

- The package builds cleanly.
- Tokens are readable and map to visible design decisions.
- Components are small enough to understand quickly.
- The demo page makes visual regressions obvious.
- Accessibility and reduced-motion behavior are part of the component contract.

## Product decisions

### A system for one portfolio

This is intentionally not a general-purpose design system. Its value comes from being specific: light neutral portfolio surfaces, compact information layouts, a restrained accent, and one glass navigation element.

### Two materials only

The system uses flat surfaces and one glass navigation tier. That constraint prevents visual drift. If every card can become glass or elevated, the portfolio loses hierarchy.

### Form before color

Interaction feedback should come from shape, tilt, scale, focus, and text changes before accent color. The accent is a mark, not a general state token.

### Code as the source of truth

The package makes design decisions executable: tokens, components, demo states, and build output. This keeps portfolio updates closer to implementation reality.

### Verification belongs in the system

The demo page is not decoration. It is the review surface for component behavior, glass readability, focus states, card tilt, and reduced-motion behavior.

## Component contract

- `Root` owns the background and global token context.
- `Surface` is flat and shadowless.
- `Text` prevents one-off type sizes.
- `GlassNav` is the only glass tier.
- `Card` has hover and focus parity.
- `Pill` stays quiet and compact.
- `AccentDot` is the only saturated visual mark.
- `Bento` and `BentoCell` support dense project information.

## Quality gates

- `npm run build`
- Demo page visual review.
- Keyboard focus review.
- Reduced-motion review.
- Contrast check for muted text on glass.
- Component import check from a clean app.

## Public story

This repo should show Yanice working across design and implementation:

- She made a narrow product decision: a portfolio-specific system.
- She translated visual taste into tokens and reusable components.
- She defined constraints so future pages do not drift.
- She treated verification as part of the design system, not an afterthought.
