import type { ComponentProps } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

import type { ToggleOwnProps } from '../Checkbox/Checkbox.types';

export type SwitchProps<V extends VariantDefinitions> = Omit<
  ComponentProps<'input'>,
  'type' | 'role' | keyof V
> &
  VariantSelection<V> &
  ToggleOwnProps;

export type BaseSwitchProps = Omit<ComponentProps<'input'>, 'type' | 'role' | 'size'> &
  ToggleOwnProps;
