import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { cardStyles } from './Card.styles';
import type { BaseCardProps, CardProps } from './Card.types';

/** Superfície de vidro. Responsável apenas pela aparência do contêiner. */
export function createCard<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Card',
) {
  function StyledCard(props: CardProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseCardProps>(props, styles.variantKeys);
    const { as: Tag = 'div', className, ...elementProps } = rest;

    return <Tag {...elementProps} className={styles({ ...variants, className })} />;
  }

  StyledCard.displayName = displayName;
  return StyledCard;
}

export const Card = createCard(cardStyles);
