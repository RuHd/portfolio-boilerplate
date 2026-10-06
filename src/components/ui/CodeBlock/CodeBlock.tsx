import { type ComponentProps, useId } from 'react';

import type { VariantDefinitions, VariantResolver } from '@/utils/createVariants';
import { splitVariantProps } from '@/utils/createVariants';

import { codeBlockStyles, codeTokenStyles } from './CodeBlock.styles';
import type { BaseCodeBlockProps, CodeBlockProps, CodeTokenProps } from './CodeBlock.types';

/**
 * Janela de terminal/editor: barra superior com três indicadores e o código abaixo.
 * O <pre> recebe foco pelo teclado para que o conteúdo com rolagem horizontal
 * seja acessível (axe: scrollable-region-focusable).
 */
export function createCodeBlock<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'CodeBlock',
) {
  function StyledCodeBlock(props: CodeBlockProps<V>) {
    const [variants, rest] = splitVariantProps<V, BaseCodeBlockProps>(props, styles.variantKeys);
    const { title, className, children, ...figureProps } = rest;
    const captionId = useId();

    return (
      <figure {...figureProps} className={styles({ ...variants, className })}>
        <div className="flex items-center gap-3 border-b border-border px-space-md py-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-3 rounded-full bg-subtle-foreground/40" />
            <span className="size-3 rounded-full bg-subtle-foreground/40" />
            <span className="size-3 rounded-full bg-subtle-foreground/40" />
          </span>
          <figcaption id={captionId} className="font-mono text-label-sm text-subtle-foreground">
            {title}
          </figcaption>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- região rolável precisa ser alcançável por teclado */}
        <pre tabIndex={0} aria-labelledby={captionId} className="overflow-x-auto p-space-md font-mono">
          <code>{children}</code>
        </pre>
      </figure>
    );
  }

  StyledCodeBlock.displayName = displayName;
  return StyledCodeBlock;
}

export function createCodeToken<V extends VariantDefinitions>(
  styles: VariantResolver<V>,
  displayName = 'CodeToken',
) {
  function StyledCodeToken(props: CodeTokenProps<V>) {
    const [variants, { className, ...spanProps }] = splitVariantProps<V, ComponentProps<'span'>>(
      props,
      styles.variantKeys,
    );

    return <span {...spanProps} className={styles({ ...variants, className })} />;
  }

  StyledCodeToken.displayName = displayName;
  return StyledCodeToken;
}

export const CodeBlock = createCodeBlock(codeBlockStyles);
export const CodeToken = createCodeToken(codeTokenStyles);
