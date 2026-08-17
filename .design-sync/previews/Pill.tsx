import { Root, Pill, Text } from 'yanice-design-system';

/** Skill tags — transparent fill, 1px hairline. Never uses the accent colour. */
export const SkillTags = () => (
  <Root>
    <div style={{ padding: 32, display: 'flex', gap: 6, flexWrap: 'wrap', maxWidth: 460 }}>
      {['UX Research', 'Product Design', 'Design Systems', 'Prototyping', 'Design Engineering'].map(
        (t) => (
          <Pill key={t}>{t}</Pill>
        ),
      )}
    </div>
  </Root>
);

/** Filter chips with counts. Selection darkens border and text — it does not fill. */
export const FilterChips = () => (
  <Root>
    <div style={{ padding: 32, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Pill selected count={5}>All</Pill>
      <Pill count={3}>Product</Pill>
      <Pill count={2}>Research</Pill>
      <Pill count={1}>Craft</Pill>
    </div>
  </Root>
);

/** Selected against unselected, side by side. */
export const SelectionStates = () => (
  <Root>
    <div style={{ padding: 32, display: 'grid', gap: 12, justifyItems: 'start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Pill>Default</Pill>
        <Text size="xs" tone="dim" as="span">hairline border, muted text</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Pill selected>Selected</Pill>
        <Text size="xs" tone="dim" as="span">border and text step to primary</Text>
      </div>
    </div>
  </Root>
);
