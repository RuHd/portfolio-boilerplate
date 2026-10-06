import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { Education } from '@/types/portfolio';
import { formatDateRange, toDateTimeAttribute } from '@/utils/formatDate';

import { SectionHeader } from '../SectionHeader/SectionHeader';

export interface EducationSectionProps {
  items: Education[];
}

/** Linha do tempo vertical com marcadores luminosos. */
export function EducationSection({ items }: EducationSectionProps) {
  return (
    <Section id="formacao" labelledBy="formacao-titulo">
      <Container>
        <SectionHeader id="formacao-titulo" eyebrow="03. formação" title="Formação" />
        <ol className="relative flex max-w-3xl flex-col gap-space-xl border-l border-border pl-space-lg">
          {items.map((item) => (
            <li key={`${item.institution}-${item.course}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[calc(var(--spacing-space-lg)+5px)] size-2.5 rounded-full bg-brand-cyan shadow-glow-cyan"
              />
              <Text as="span" size="label-md" tone="subtle">
                <time dateTime={toDateTimeAttribute(item.start)}>{formatDateRange(item.start, item.end)}</time>
              </Text>
              <Heading level={3} size="headline-sm" className="mt-space-xs">
                {item.course}
              </Heading>
              <Text tone="muted">{item.institution}</Text>
              {item.description && (
                <Text size="body-sm" tone="subtle" className="mt-space-sm">
                  {item.description}
                </Text>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
