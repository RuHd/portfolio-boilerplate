import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { buttonStyles } from './Button.styles';
import type { BaseButtonProps, ButtonProps } from './Button.types';

/**
 * Factory do Button (Aberto/Fechado).
 * Para novas variantes: `createButton(extendVariants(buttonStyles, {...}))`.
 */
export function createButton<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Button',
) {
  function StyledButton(props: ButtonProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseButtonProps>(
      props,
      styles.variantKeys,
    );
    const {
      className,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      type = 'button',
      children,
      ...nativeProps
    } = rest;

    return (
      <button
        {...nativeProps}
        type={type}
        className={styles({ ...variants, className })}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
      >
        {leftIcon && (
          <span aria-hidden="true" className="inline-flex shrink-0">
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span aria-hidden="true" className="inline-flex shrink-0">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }

  StyledButton.displayName = displayName;
  return StyledButton;
}

export const Button = createButton(buttonStyles);
