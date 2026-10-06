import type { HTMLAttributes } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export type TextElement = 'p' | 'span' | 'div' | 'small' | 'strong' | 'em';

export type TextProps<V extends VariantDefinitions> = Omit<HTMLAttributes<HTMLElement>, keyof V> &
  VariantSelection<V> & {
    /** Elemento HTML renderizado. Escolha pela semântica, não pela aparência. */
    as?: TextElement;
  };

export type BaseTextProps = HTMLAttributes<HTMLElement> & { as?: TextElement };
