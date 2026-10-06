import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { textStyles } from './Text.styles';
import type { BaseTextProps, TextProps } from './Text.types';

export function createText<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Text',
) {
  function StyledText(props: TextProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseTextProps>(
      props,
      styles.variantKeys,
    );
    const { as: Tag = 'p', className, ...textProps } = rest;

    return <Tag {...textProps} className={styles({ ...variants, className })} />;
  }

  StyledText.displayName = displayName;
  return StyledText;
}

export const Text = createText(textStyles);
