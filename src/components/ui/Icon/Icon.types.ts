import type { ComponentType } from 'react';

import type { VariantDefinitions, VariantSelection } from '@/utils/createVariants';

/** Props que o Icon repassa para o SVG. Qualquer biblioteca compatível serve. */
export interface IconSourceProps {
  className?: string;
  role?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
  focusable?: 'true' | 'false';
}

/**
 * Abstração de um ícone (Inversão de Dependência).
 * Ícones do react-icons, SVGs próprios ou outra lib satisfazem este contrato.
 */
export type IconSource = ComponentType<IconSourceProps>;

export type IconProps<V extends VariantDefinitions> = VariantSelection<V> & {
  /** Componente do ícone, ex.: `icons.github` ou `FaGithub`. */
  as: IconSource;
  /**
   * Com label: ícone informativo (role="img" + aria-label).
   * Sem label: ícone decorativo, escondido de leitores de tela.
   */
  label?: string;
  className?: string;
};
