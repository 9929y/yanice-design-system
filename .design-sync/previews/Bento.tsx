import { Root, Bento, BentoCell, Surface, Text, AccentDot } from 'yanice-design-system';

/**
 * The Dashboard as it is actually composed: four to six large, airy cells.
 * Cells are tight to each other (12px) and generous inside (32px).
 */
export const DashboardLayout = () => (
  <Root>
    <div style={{ padding: 24 }}>
      <Bento columns={4}>
        <BentoCell w={2} h={2}>
          <Surface style={{ height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <AccentDot label="Available for work" />
              <Text size="sm" tone="dim" as="span">Available</Text>
            </div>
            <Text size="lg" style={{ marginTop: 16 }}>UX Designer</Text>
            <Text size="base" tone="dim" style={{ marginTop: 8 }}>
              Fashion designer for five years, then UX, now AI products.
            </Text>
          </Surface>
        </BentoCell>
        <BentoCell w={2}>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">Résumé</Text>
          </Surface>
        </BentoCell>
        <BentoCell>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">Contact</Text>
          </Surface>
        </BentoCell>
        <BentoCell>
          <Surface style={{ height: '100%' }}>
            <Text size="sm" tone="dim">Explorations</Text>
          </Surface>
        </BentoCell>
      </Bento>
    </div>
  </Root>
);

/** Column counts. Left as a prop because the cell inventory is still open. */
export const ColumnCounts = () => {
  const LABELS = ['About', 'Résumé', 'Contact', 'Explorations'];
  return (
    <Root>
      <div style={{ padding: 24, display: 'grid', gap: 20 }}>
        {[2, 3, 4].map((n) => (
          <div key={n}>
            <Text size="xs" tone="dim" style={{ marginBottom: 8 }}>columns={n}</Text>
            <Bento columns={n}>
              {LABELS.slice(0, n).map((label) => (
                <BentoCell key={label}>
                  <Surface padding="lg">
                    <Text size="sm" tone="dim">{label}</Text>
                  </Surface>
                </BentoCell>
              ))}
            </Bento>
          </div>
        ))}
      </div>
    </Root>
  );
};
