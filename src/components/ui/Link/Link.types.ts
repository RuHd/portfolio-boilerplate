import type { ComponentProps } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export interface LinkOwnProps {
  href: string;
  /**
   * Força (true) ou impede (false) a abertura em nova aba.
   * Por padrão, é detectado pelo href (URLs de outros domínios).
   */
  external?: boolean;
  /** Texto lido por leitores de tela em links externos. */
  newTabLabel?: string;
}

export type LinkProps<V extends VariantDefinitions> = Omit<
  ComponentProps<'a'>,
  'href' | keyof V
> &
  VariantSelection<V> &
  LinkOwnProps;

export type BaseLinkProps = Omit<ComponentProps<'a'>, 'href'> & LinkOwnProps;
