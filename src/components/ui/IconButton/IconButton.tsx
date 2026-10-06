import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';

import { createButton } from '../Button/Button';
import type { ButtonProps } from '../Button/Button.types';
import { Icon } from '../Icon/Icon';
import { iconButtonStyles } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

export function createIconButton<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'IconButton',
) {
  const BaseButton = createButton(styles, `${displayName}Base`);

  function StyledIconButton({ icon, label, ...buttonProps }: IconButtonProps<V>) {
    return (
      <BaseButton {...(buttonProps as ButtonProps<V>)} aria-label={label}>
        <Icon as={icon} />
      </BaseButton>
    );
  }

  StyledIconButton.displayName = displayName;
  return StyledIconButton;
}

export const IconButton = createIconButton(iconButtonStyles);
