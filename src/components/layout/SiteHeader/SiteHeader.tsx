import { buttonStyles } from '@/components/ui/Button';
import { Link } from '@/components/ui/Link';
import type { NavItem } from '@/types/portfolio';

import { Container } from '../Container';
import { MobileNav } from './MobileNav';

export interface SiteHeaderProps {
  /** Texto da marca (normalmente `siteConfig.name`). */
  brand: string;
  items: NavItem[];
  /** Chamada principal à direita (ex.: link para #contato). */
  cta?: NavItem;
}

/** Barra de navegação flutuante (elevação nível 3: vidro + blur + sombra). */
export function SiteHeader({ brand, items, cta }: SiteHeaderProps) {
  return (
    <Container as="header" className="sticky top-0 z-40 pt-space-md">
      <div className="surface-float relative flex h-16 items-center justify-between gap-space-md rounded-lg pr-space-sm pl-space-lg">
        <Link href="#inicio" variant="unstyled" className="font-mono text-label-lg text-foreground">
          <span aria-hidden="true" className="text-brand-cyan">
            &lt;
          </span>
          {brand}
          <span aria-hidden="true" className="text-brand-cyan">
            /&gt;
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-space-lg">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} variant="nav">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-space-sm">
          {cta && (
            <Link
              href={cta.href}
              variant="unstyled"
              className={buttonStyles({ size: 'sm', className: 'hidden sm:inline-flex' })}
            >
              {cta.label}
            </Link>
          )}
          <MobileNav items={items} />
        </div>
      </div>
    </Container>
  );
}
