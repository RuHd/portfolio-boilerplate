import type { ComponentProps } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export interface TextFieldOwnProps {
  /** Obrigatório: liga o <label> ao campo e as mensagens via aria-describedby. */
  id: string;
  label: string;
  /** Texto de ajuda exibido abaixo do campo. */
  hint?: string;
  /** Mensagem de erro. Quando presente, o campo recebe aria-invalid. */
  error?: string;
}

export type TextFieldProps<V extends VariantDefinitions> = Omit<
  ComponentProps<'input'>,
  'id' | keyof V
> &
  VariantSelection<V> &
  TextFieldOwnProps;

export type BaseTextFieldProps = Omit<ComponentProps<'input'>, 'id' | 'size'> & TextFieldOwnProps;
