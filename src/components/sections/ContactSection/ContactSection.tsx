import { Container, Grid, Section } from '@/components/layout';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Link } from '@/components/ui/Link';
import { Text } from '@/components/ui/Text';
import { icons } from '@/config/icons';
import type { ContactChannel } from '@/types/portfolio';

import { SectionHeader } from '../SectionHeader/SectionHeader';

export interface ContactSectionProps {
  channels: ContactChannel[];
}

export function ContactSection({ channels }: ContactSectionProps) {
  return (
    <Section id="contato" labelledBy="contato-titulo">
      <Container>
        <SectionHeader
          id="contato-titulo"
          eyebrow="04. contato"
          title="Vamos construir algo juntos?"
          description="Respondo em até dois dias úteis. Escolha o canal que preferir."
        />
        <Grid as="ul" columns="cards">
          {channels.map((channel) => (
            <Card key={channel.href} as="li" elevation="interactive" padding="none">
              {/* O link cobre o card inteiro: um único alvo de clique e de foco. */}
              <Link
                href={channel.href}
                variant="unstyled"
                className="flex w-full items-center gap-space-md rounded-lg p-space-md md:p-space-lg"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-border bg-code text-brand-cyan">
                  <Icon as={icons[channel.icon ?? 'externalLink']} size="md" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <Text as="span" size="label-md" tone="subtle">
                    {channel.label}
                  </Text>
                  <Text as="span" className="truncate">
                    {channel.handle ?? channel.href}
                  </Text>
                </span>
                <Icon as={icons.arrowUpRight} size="sm" className="ml-auto text-subtle-foreground" />
              </Link>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
