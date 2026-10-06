import type { ComponentProps } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export interface BadgeOwnProps {
  /** Ponto luminoso à esquerda, para destacar competências principais. Decorativo. */
  indicator?: boolean;
}

export type BadgeProps<V extends VariantDefinitions> = Omit<ComponentProps<'span'>, keyof V> &
  VariantSelection<V> &
  BadgeOwnProps;

export type BaseBadgeProps = ComponentProps<'span'> & BadgeOwnProps;
