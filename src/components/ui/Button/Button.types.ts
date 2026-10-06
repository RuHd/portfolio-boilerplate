import type { ComponentProps, ReactNode } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export interface ButtonOwnProps {
  /** Conteúdo antes do texto (ex.: <Icon as={icons.email} />). Decorativo. */
  leftIcon?: ReactNode;
  /** Conteúdo depois do texto. Decorativo. */
  rightIcon?: ReactNode;
  /** Desabilita o botão e anuncia aria-busy para tecnologias assistivas. */
  isLoading?: boolean;
}

/**
 * Estende os atributos nativos de <button> (Substituição de Liskov):
 * o Button pode ser usado em qualquer lugar onde um <button> é esperado.
 */
export type ButtonProps<V extends VariantDefinitions> = Omit<ComponentProps<'button'>, keyof V> &
  VariantSelection<V> &
  ButtonOwnProps;

export type BaseButtonProps = ComponentProps<'button'> & ButtonOwnProps;
