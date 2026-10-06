import Image from 'next/image';

import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Heading, type HeadingLevel } from '@/components/ui/Heading';
import { Icon } from '@/components/ui/Icon';
import { Link } from '@/components/ui/Link';
import { Text } from '@/components/ui/Text';
import { icons } from '@/config/icons';
import type { Project } from '@/types/portfolio';
import { cn } from '@/utils/cn';

export interface ProjectCardProps {
  project: Project;
  /** Nível do título dentro da hierarquia da página. */
  headingLevel?: HeadingLevel;
  className?: string;
}

/**
 * Card de vitrine: cabeçalho (status + links), prévia com borda interna,
 * descrição e rodapé com stack técnica e métrica de impacto.
 */
export function ProjectCard({ project, headingLevel = 3, className }: ProjectCardProps) {
  const { slug, title, description, technologies, links = [], image, status, metric } = project;
  const titleId = `projeto-${slug}`;

  return (
    <Card
      as="article"
      elevation="interactive"
      radius="xl"
      padding="none"
      aria-labelledby={titleId}
      className={cn('group flex flex-col', className)}
    >
      <div className="flex items-center justify-between gap-space-md p-space-md md:px-space-lg md:pt-space-lg">
        {status ? (
          <Badge tone="status" indicator>
            {status}
          </Badge>
        ) : (
          <span />
        )}
        {links.length > 0 && (
          <ul className="flex items-center gap-space-xs">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  variant="unstyled"
                  className="size-10 justify-center rounded-md border border-border text-muted-foreground hover:border-brand-cyan/30 hover:text-brand-cyan"
                >
                  <Icon as={icons[link.icon ?? 'externalLink']} label={`${link.label} de ${title}`} size="sm" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-space-md md:px-space-lg">
        <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-code">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgb(0_210_255/0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgb(168_85_247/0.2),transparent_55%)]"
            >
              <span className="font-mono text-label-lg text-muted-foreground">{`<${slug} />`}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-space-sm p-space-md md:p-space-lg">
        <Heading level={headingLevel} size="headline-sm" id={titleId}>
          {title}
        </Heading>
        <Text tone="muted">{description}</Text>
      </div>

      <div className="flex flex-wrap items-center gap-space-sm border-t border-border p-space-md md:px-space-lg">
        <ul aria-label="Tecnologias" className="flex flex-wrap gap-space-sm">
          {technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        {metric && (
          <Badge tone="metric" className="ml-auto">
            {metric}
          </Badge>
        )}
      </div>
    </Card>
  );
}
