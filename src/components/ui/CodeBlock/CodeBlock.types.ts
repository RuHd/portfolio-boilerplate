import type { ComponentProps, ReactNode } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

export interface CodeBlockOwnProps {
  /** Nome do arquivo ou comando exibido na barra da janela. Também nomeia a região. */
  title: string;
  children: ReactNode;
}

export type CodeBlockProps<V extends VariantDefinitions> = Omit<
  ComponentProps<'figure'>,
  'title' | 'children' | keyof V
> &
  VariantSelection<V> &
  CodeBlockOwnProps;

export type BaseCodeBlockProps = Omit<ComponentProps<'figure'>, 'title' | 'children'> &
  CodeBlockOwnProps;

export type CodeTokenProps<V extends VariantDefinitions> = Omit<ComponentProps<'span'>, keyof V> &
  VariantSelection<V>;
