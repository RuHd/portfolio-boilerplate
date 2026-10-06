import NextLink from 'next/link';

import { VisuallyHidden } from '@/components/a11y/VisuallyHidden';
import { siteConfig } from '@/config/site';
import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';
import { getLinkKind } from '@/utils/getLinkKind';

import { linkStyles } from './Link.styles';
import type { BaseLinkProps, LinkProps } from './Link.types';

/**
 * Link único para o site inteiro. Decide sozinho como renderizar:
 * - rota interna → next/link (prefetch e navegação client-side)
 * - âncora (#secao), mailto:, tel: → <a> simples
 * - URL externa → <a target="_blank" rel="noopener noreferrer"> + aviso para leitor de tela
 */
export function createLink<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'Link',
) {
  function StyledLink(props: LinkProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseLinkProps>(
      props,
      styles.variantKeys,
    );
    const {
      href,
      external,
      newTabLabel = '(abre em nova aba)',
      className,
      children,
      ...anchorProps
    } = rest;

    const classes = styles({ ...variants, className });
    const kind = getLinkKind(href, siteConfig.url);
    const opensInNewTab = external ?? kind === 'external';

    if (opensInNewTab) {
      return (
        <a {...anchorProps} href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          <VisuallyHidden> {newTabLabel}</VisuallyHidden>
        </a>
      );
    }

    if (kind === 'internal') {
      return (
        <NextLink {...anchorProps} href={href} className={classes}>
          {children}
        </NextLink>
      );
    }

    return (
      <a {...anchorProps} href={href} className={classes}>
        {children}
      </a>
    );
  }

  StyledLink.displayName = displayName;
  return StyledLink;
}

export const Link = createLink(linkStyles);
