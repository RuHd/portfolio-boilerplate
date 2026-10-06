import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { iconStyles } from './Icon.styles';
import type { IconProps, IconSource, IconSourceProps } from './Icon.types';

/**
 * Factory do Icon. Receba um resolvedor de estilos próprio para criar
 * variações (ex.: tamanhos extras) sem alterar este arquivo.
 */
export function createIcon<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Icon',
) {
  function StyledIcon(props: IconProps<V>) {
    const [variants, { as: Component, label, className }] = splitVariantProps<
      V,
      { as: IconSource; label?: string; className?: string }
    >(props, styles.variantKeys);

    const a11yProps: IconSourceProps = label
      ? { role: 'img', 'aria-label': label }
      : { 'aria-hidden': true, focusable: 'false' };

    return <Component className={styles({ ...variants, className })} {...a11yProps} />;
  }

  StyledIcon.displayName = displayName;
  return StyledIcon;
}

export const Icon = createIcon(iconStyles);
