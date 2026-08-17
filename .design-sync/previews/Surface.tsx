import { Root, Surface, Text } from 'yanice-design-system';

/** The Flat tier: surface colour plus a 1px hairline. No shadow, ever. */
export const Default = () => (
  <Root>
    <div style={{ padding: 32 }}>
      <Surface>
        <Text size="lg">UX Designer</Text>
        <Text size="base" tone="dim" style={{ marginTop: 12 }}>
          Fashion designer for five years, then UX, now AI products.
        </Text>
      </Surface>
    </div>
  </Root>
);

/** Padding steps. `card` (32px) is the default — cells need air. */
export const PaddingScale = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 12 }}>
      {(['sm', 'md', 'lg', 'card'] as const).map((p) => (
        <Surface key={p} padding={p}>
          <Text size="sm" tone="dim">padding=&quot;{p}&quot;</Text>
        </Surface>
      ))}
    </div>
  </Root>
);

/** Two surfaces side by side — the hairline is what separates them. */
export const SideBySide = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      <Surface>
        <Text size="sm" tone="dim">Résumé</Text>
      </Surface>
      <Surface>
        <Text size="sm" tone="dim">Contact</Text>
      </Surface>
    </div>
  </Root>
);

/** Rendered as a semantic element rather than a div. */
export const AsSection = () => (
  <Root>
    <div style={{ padding: 32 }}>
      <Surface as="section">
        <Text size="lg" as="h2">Explorations</Text>
        <Text size="sm" tone="dim" style={{ marginTop: 8 }}>
          Research fragments, small experiments, visual studies.
        </Text>
      </Surface>
    </div>
  </Root>
);
