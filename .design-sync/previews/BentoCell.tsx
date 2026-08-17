import { Root, Bento, BentoCell, Surface, Text } from 'yanice-design-system';

/**
 * A cell only means anything inside its grid, so its preview is the full
 * composition. `w` and `h` are column and row spans.
 */
export const Spans = () => (
  <Root>
    <div style={{ padding: 24 }}>
      <Bento columns={4}>
        <BentoCell w={2} h={2}>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">w=2 h=2</Text>
          </Surface>
        </BentoCell>
        <BentoCell w={2}>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">w=2</Text>
          </Surface>
        </BentoCell>
        <BentoCell>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">w=1</Text>
          </Surface>
        </BentoCell>
        <BentoCell>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">w=1</Text>
          </Surface>
        </BentoCell>
      </Bento>
    </div>
  </Root>
);

/** A tall cell beside two stacked short ones — the asymmetry Bento exists for. */
export const TallBesideShort = () => (
  <Root>
    <div style={{ padding: 24 }}>
      <Bento columns={3}>
        <BentoCell h={2}>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">h=2</Text>
          </Surface>
        </BentoCell>
        <BentoCell w={2}>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">w=2</Text>
          </Surface>
        </BentoCell>
        <BentoCell w={2}>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">w=2</Text>
          </Surface>
        </BentoCell>
      </Bento>
    </div>
  </Root>
);
