import type { ComponentProps } from 'react';

import { MAIN_CONTENT_ID } from '@/config/a11y';
import { cn } from '@/utils/cn';

export type SkipLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  /** Id do elemento de destino, sem "#". */
  targetId?: string;
};

/**
 * Link "pular para o conteúdo" (WCAG 2.4.1). Invisível até receber foco pelo teclado.
 * Deve ser o primeiro elemento focável da página.
 */
export function SkipLink({
  targetId = MAIN_CONTENT_ID,
  className,
  children = 'Pular para o conteúdo principal',
  ...props
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        'sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
