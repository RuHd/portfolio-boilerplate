import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { badgeStyles } from './Badge.styles';
import type { BadgeProps, BaseBadgeProps } from './Badge.types';

/** Pílula monoespaçada para tecnologias, métricas e status. */
export function createBadge<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Badge',
) {
  function StyledBadge(props: BadgeProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseBadgeProps>(props, styles.variantKeys);
    const { indicator = false, className, children, ...spanProps } = rest;

    return (
      <span {...spanProps} className={styles({ ...variants, className })}>
        {indicator && (
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-brand-cyan shadow-[0_0_8px_var(--color-brand-cyan)]"
          />
        )}
        {children}
      </span>
    );
  }

  StyledBadge.displayName = displayName;
  return StyledBadge;
}

export const Badge = createBadge(badgeStyles);
