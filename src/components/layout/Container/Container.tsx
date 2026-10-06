import type { HTMLAttributes } from 'react';

import type {
  VariantDefinitions,
  VariantResolver,
  VariantSelection,
} from '@/utils/createVariants';
import { createVariants, splitVariantProps } from '@/utils/createVariants';

export type ContainerElement = 'div' | 'header' | 'footer' | 'nav' | 'article' | 'aside';

export type ContainerProps<V extends VariantDefinitions> = Omit<
  HTMLAttributes<HTMLElement>,
  keyof V
> &
  VariantSelection<V> & { as?: ContainerElement };

type BaseContainerProps = HTMLAttributes<HTMLElement> & { as?: ContainerElement };

export const containerStyles = createVariants({
  /** Margens do design system: 1.25rem (mobile) → 2rem (tablet) → 2.5rem (desktop). */
  base: 'mx-auto w-full px-margin-mobile md:px-8 lg:px-margin',
  variants: {
    size: {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-content',
      full: 'max-w-none',
    },
  },
  defaultVariants: { size: 'lg' },
});

/** Responsável apenas pela largura máxima e pelo respiro lateral do conteúdo. */
export function createContainer<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Container',
) {
  function StyledContainer(props: ContainerProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseContainerProps>(props, styles.variantKeys);
    const { as: Tag = 'div', className, ...elementProps } = rest;

    return <Tag {...elementProps} className={styles({ ...variants, className })} />;
  }

  StyledContainer.displayName = displayName;
  return StyledContainer;
}

export const Container = createContainer(containerStyles);
