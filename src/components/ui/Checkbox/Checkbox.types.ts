import type { ComponentProps, ReactNode } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

/** Contrato compartilhado por controles de marcação com label (Checkbox, Switch). */
export interface ToggleOwnProps {
  /** Texto visível; também é o nome acessível do controle. */
  label: ReactNode;
  /** Descrição secundária, ligada ao controle via aria-describedby. */
  description?: string;
}

export type CheckboxProps<V extends VariantDefinitions> = Omit<
  ComponentProps<'input'>,
  'type' | keyof V
> &
  VariantSelection<V> &
  ToggleOwnProps;

export type BaseCheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'size'> & ToggleOwnProps;
