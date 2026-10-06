import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLElement> {
  as?: 'span' | 'div';
}

/**
 * Esconde o conteúdo visualmente, mas mantém para leitores de tela.
 * Use para dar contexto extra (ex.: "(abre em nova aba)").
 */
export function VisuallyHidden({ as: Tag = 'span', className, ...props }: VisuallyHiddenProps) {
  return <Tag className={cn('sr-only', className)} {...props} />;
}
