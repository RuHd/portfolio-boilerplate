import type { ComponentProps } from 'react';

import type {
  VariantDefinitions,
  VariantResolver,
  VariantSelection,
} from '@/utils/createVariants';
import { createVariants, splitVariantProps } from '@/utils/createVariants';

export type SectionProps<V extends VariantDefinitions> = Omit<
  ComponentProps<'section'>,
  'id' | keyof V
> &
  VariantSelection<V> & {
    /** Obrigatório: é o destino da navegação por âncora da SPA (ex.: "projetos" → #projetos). */
    id: string;
    /**
     * Id do título da seção. Dá nome acessível à região (landmark),
     * permitindo que leitores de tela listem e pulem entre seções.
     */
    labelledBy?: string;
  };

type BaseSectionProps = Omit<ComponentProps<'section'>, 'id'> & {
  id: string;
  labelledBy?: string;
};

export const sectionStyles = createVariants({
  /** scroll-mt compensa um header fixo ao navegar por âncora. */
  base: 'scroll-mt-24',
  variants: {
    spacing: {
      none: '',
      sm: 'py-12',
      md: 'py-16 lg:py-section',
      lg: 'py-20 lg:py-32',
    },
  },
  defaultVariants: { spacing: 'md' },
});

/** Bloco semântico da SPA. Responsável pela semântica e pelo espaçamento vertical. */
export function createSection<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Section',
) {
  function StyledSection(props: SectionProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseSectionProps>(props, styles.variantKeys);
    const { id, labelledBy, className, ...sectionProps } = rest;

    return (
      <section
        {...sectionProps}
        id={id}
        aria-labelledby={labelledBy}
        className={styles({ ...variants, className })}
      />
    );
  }

  StyledSection.displayName = displayName;
  return StyledSection;
}

export const Section = createSection(sectionStyles);
