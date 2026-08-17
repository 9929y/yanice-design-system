import { Root, Text } from 'yanice-design-system';

/** The full scale, in order. Note the deliberate gap between 16 and 24. */
export const Scale = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 14 }}>
      <Text size="display" weight="medium">Yanice Yang</Text>
      <Text size="xl">Selected work</Text>
      <Text size="lg">Lark Design — onboarding research</Text>
      <Text size="md">Fashion designer for five years, then UX, now AI products.</Text>
      <Text size="base">
        Fifty-two screens, three thousand words, and eleven one-to-one interviews.
        The page is carried by text this size.
      </Text>
      <Text size="sm" tone="dim">2024 — Product · Research · Onboarding</Text>
      <Text size="xs" tone="dim">CASE STUDY</Text>
    </div>
  </Root>
);

/** The three tones. `accent` is scarce by rule — one mark per site. */
export const Tones = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 10 }}>
      <Text size="md" tone="fg">Primary — headings and body copy</Text>
      <Text size="md" tone="dim">Muted — metadata, captions, inactive states</Text>
      <Text size="md" tone="accent">Accent — reserved, used once per site</Text>
    </div>
  </Root>
);

/** Only two weights exist. There is no 600 in this system. */
export const Weights = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 10 }}>
      <Text size="lg" weight="regular">Regular 400 — the default everywhere</Text>
      <Text size="lg" weight="medium">Medium 500 — emphasis and display</Text>
    </div>
  </Root>
);

/** How a real caption pairs sizes and tones. */
export const CaptionPattern = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 24, maxWidth: 520 }}>
      {[
        ['AtlasNova', 'Product · Agents · Shipped'],
        ['Opus Clip', '0→1 · 6M users'],
        ['McKinsey Ecommerce', 'Strategy · Commerce'],
      ].map(([title, meta]) => (
        <div
          key={title}
          style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}
        >
          <Text size="sm" as="span">{title}</Text>
          <Text size="sm" tone="dim" as="span">{meta}</Text>
        </div>
      ))}
    </div>
  </Root>
);
