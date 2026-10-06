import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { headingStyles } from './Heading.styles';
import type { BaseHeadingProps, HeadingProps } from './Heading.types';

export function createHeading<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Heading',
) {
  function StyledHeading(props: HeadingProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseHeadingProps>(
      props,
      styles.variantKeys,
    );
    const { level, className, ...headingProps } = rest;
    const Tag = `h${level}` as const;

    return <Tag {...headingProps} className={styles({ ...variants, className })} />;
  }

  StyledHeading.displayName = displayName;
  return StyledHeading;
}

export const Heading = createHeading(headingStyles);
