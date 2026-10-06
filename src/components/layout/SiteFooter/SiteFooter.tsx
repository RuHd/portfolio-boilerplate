import { Icon } from '@/components/ui/Icon';
import { Link } from '@/components/ui/Link';
import { Text } from '@/components/ui/Text';
import { icons } from '@/config/icons';
import type { ContactChannel } from '@/types/portfolio';

import { Container } from '../Container';

export interface SiteFooterProps {
  ownerName: string;
  channels: ContactChannel[];
  /** Ano exibido no copyright. Recebido por prop para manter o componente puro. */
  year: number;
}

export function SiteFooter({ ownerName, channels, year }: SiteFooterProps) {
  return (
    <Container as="footer" className="py-space-xl">
      <div className="flex flex-col items-center justify-between gap-space-md border-t border-border pt-space-lg sm:flex-row">
        <Text size="label-md" tone="subtle">
          © {year} {ownerName}. Feito com Next.js e Tailwind CSS.
        </Text>
        <ul className="flex items-center gap-space-sm">
          {channels.map(
            ({ href, label, icon }) =>
              icon && (
                <li key={href}>
                  <Link
                    href={href}
                    variant="unstyled"
                    className="size-10 justify-center rounded-md border border-border text-muted-foreground hover:border-brand-cyan/30 hover:text-brand-cyan"
                  >
                    <Icon as={icons[icon]} label={label} size="sm" />
                  </Link>
                </li>
              ),
          )}
        </ul>
      </div>
    </Container>
  );
}
