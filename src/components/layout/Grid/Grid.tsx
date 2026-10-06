import type { HTMLAttributes } from 'react';

import type {
  VariantDefinitions,
  VariantResolver,
  VariantSelection,
} from '@/utils/createVariants';
import { createVariants, splitVariantProps } from '@/utils/createVariants';

export type GridElement = 'div' | 'ul' | 'ol';

export type GridProps<V extends VariantDefinitions> = Omit<HTMLAttributes<HTMLElement>, keyof V> &
  VariantSelection<V> & { as?: GridElement };

type BaseGridProps = HTMLAttributes<HTMLElement> & { as?: GridElement };

export const gridStyles = createVariants({
  base: 'grid',
  variants: {
    columns: {
      /** Grade fluida do design system: 4 → 8 → 12 colunas. Posicione filhos com col-span-*. */
      system: 'grid-cols-4 gap-gutter-mobile md:grid-cols-8 md:gap-5 lg:grid-cols-12 lg:gap-gutter',
      /** Atalhos para listas de cards: 1 → 2 → 3 colunas. */
      cards: 'grid-cols-1 gap-gutter-mobile md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-gutter',
      split: 'grid-cols-1 gap-space-xl lg:grid-cols-2 lg:gap-gutter',
    },
  },
  defaultVariants: { columns: 'system' },
});

/** Responsável apenas pela grade responsiva (colunas e gutters). */
export function createGrid<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Grid',
) {
  function StyledGrid(props: GridProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseGridProps>(props, styles.variantKeys);
    const { as: Tag = 'div', className, ...elementProps } = rest;

    return <Tag {...elementProps} className={styles({ ...variants, className })} />;
  }

  StyledGrid.displayName = displayName;
  return StyledGrid;
}

export const Grid = createGrid(gridStyles);
