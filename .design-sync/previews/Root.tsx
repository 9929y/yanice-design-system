import { Root, Surface, Text, Pill, Bento, BentoCell } from 'yanice-design-system';

/**
 * The required wrapper. It carries the page background, the Inter stack, and
 * every design token — without it nothing below is styled and `var(--ds-*)`
 * lookups resolve to nothing.
 */
export const PageShell = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 16 }}>
      <Text size="xl">Selected work</Text>
      <Surface>
        <Text size="lg">Lark Design</Text>
        <Text size="base" tone="dim" style={{ marginTop: 8 }}>
          Eleven one-to-one interviews, fifty-two screens, one onboarding flow rebuilt.
        </Text>
        <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
          <Pill>UX Research</Pill>
          <Pill>Onboarding</Pill>
        </div>
      </Surface>
    </div>
  </Root>
);

/**
 * Same markup with the wrapper omitted — no page background, no Inter, no
 * tokens. This is what forgetting `Root` looks like.
 */
export const WithoutRoot = () => (
  <div style={{ padding: 32, display: 'grid', gap: 16 }}>
    <Text size="xl">Selected work</Text>
    <Surface>
      <Text size="lg">Lark Design</Text>
      <Text size="base" tone="dim" style={{ marginTop: 8 }}>
        Eleven one-to-one interviews, fifty-two screens, one onboarding flow rebuilt.
      </Text>
    </Surface>
  </div>
);

/**
 * `columns` on the wrapper sets the Bento column count for everything inside,
 * so a `Bento` needs no prop of its own.
 */
export const WithColumnCount = () => (
  <Root columns={3}>
    <div style={{ padding: 32, display: 'grid', gap: 12 }}>
      <Text size="xs" tone="dim">Root columns={3} — the Bento below sets no columns prop</Text>
      <Bento>
        {['About', 'Résumé', 'Contact'].map((label) => (
          <BentoCell key={label}>
            <Surface padding="lg">
              <Text size="sm" tone="dim">{label}</Text>
            </Surface>
          </BentoCell>
        ))}
      </Bento>
    </div>
  </Root>
);
