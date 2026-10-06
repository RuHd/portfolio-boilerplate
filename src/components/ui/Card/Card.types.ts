import type { HTMLAttributes } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export type CardElement = 'div' | 'article' | 'li' | 'aside';

export type CardProps<V extends VariantDefinitions> = Omit<HTMLAttributes<HTMLElement>, keyof V> &
  VariantSelection<V> & {
    /** Elemento renderizado. Use `article` para conteúdo independente, `li` dentro de listas. */
    as?: CardElement;
  };

export type BaseCardProps = HTMLAttributes<HTMLElement> & { as?: CardElement };
