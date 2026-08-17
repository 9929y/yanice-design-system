import { Root, AccentDot, Surface, Text } from 'yanice-design-system';

/**
 * The site's one saturated mark. Shown in its real context — a status indicator
 * beside the name — because alone it is a 10px dot and tells you nothing.
 */
export const StatusIndicator = () => (
  <Root>
    <div style={{ padding: 32 }}>
      <Surface>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <AccentDot label="Available for work" />
          <Text size="sm" as="span">Yanice Yang</Text>
          <Text size="sm" tone="dim" as="span">· UX Designer</Text>
        </div>
        <Text size="base" tone="dim" style={{ marginTop: 16 }}>
          Fashion designer for five years, then UX, now AI products.
        </Text>
      </Surface>
    </div>
  </Root>
);

/**
 * Why it is used once. The accent earns attention by scarcity — repeat it and
 * every instance stops meaning anything.
 */
export const ScarcityRule = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 16, maxWidth: 420 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <AccentDot label="Available" />
        <Text size="sm" as="span">One mark, once — it reads as a signal</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.45 }}>
        <AccentDot />
        <AccentDot />
        <AccentDot />
        <Text size="sm" tone="dim" as="span">Repeated — it reads as decoration</Text>
      </div>
    </div>
  </Root>
);
