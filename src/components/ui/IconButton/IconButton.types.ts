import type { VariantDefinitions } from '@/utils/createVariants';

import type { ButtonProps } from '../Button/Button.types';
import type { IconSource } from '../Icon/Icon.types';

export interface IconButtonOwnProps {
  icon: IconSource;
  /** Obrigatório: é o nome acessível do botão (vira aria-label). */
  label: string;
}

/**
 * Segregação de Interface: o IconButton não aceita children nem slots de ícone
 * do Button — só o que faz sentido para um botão composto apenas por ícone.
 */
export type IconButtonProps<V extends VariantDefinitions> = Omit<
  ButtonProps<V>,
  'children' | 'leftIcon' | 'rightIcon' | 'aria-label' | 'aria-labelledby'
> &
  IconButtonOwnProps;
