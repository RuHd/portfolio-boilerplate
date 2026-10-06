import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { cn } from '@/utils/cn';

export interface SectionHeaderProps {
  /** Id do <h2>; passe o mesmo valor em `<Section labelledBy>`. */
  id: string;
  /** Rótulo mono acima do título (ex.: "01. sobre"). */
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

/** Cabeçalho padrão das seções: rótulo técnico, título e descrição opcional. */
export function SectionHeader({ id, eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <header className={cn('mb-space-xl flex max-w-2xl flex-col gap-space-sm', className)}>
      <Text as="span" size="label-md" tone="accent">
        <span aria-hidden="true">{'// '}</span>
        {eyebrow}
      </Text>
      <Heading level={2} size="headline-lg" id={id}>
        {title}
      </Heading>
      {description && (
        <Text size="body-lg" tone="muted">
          {description}
        </Text>
      )}
    </header>
  );
}
