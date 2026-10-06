import type { ComponentProps } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * `level` define a SEMÂNTICA (h1–h6, importante para SEO e leitores de tela).
 * `size` define a APARÊNCIA. Separar os dois evita pular níveis só por estética.
 */
export type HeadingProps<V extends VariantDefinitions> = Omit<ComponentProps<'h2'>, keyof V> &
  VariantSelection<V> & {
    level: HeadingLevel;
  };

export type BaseHeadingProps = ComponentProps<'h2'> & { level: HeadingLevel };
