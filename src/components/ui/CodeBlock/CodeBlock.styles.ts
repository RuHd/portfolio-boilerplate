import { createVariants } from '@/utils/createVariants';

export const codeBlockStyles = createVariants({
  base: 'overflow-hidden rounded-lg border border-border bg-code shadow-float',
  variants: {
    size: {
      sm: '[&_pre]:text-label-md',
      md: '[&_pre]:text-label-lg',
    },
  },
  defaultVariants: { size: 'md' },
});

/** Realce de sintaxe restrito aos acentos do sistema. */
export const codeTokenStyles = createVariants({
  variants: {
    kind: {
      /** Chaves, propriedades e palavras-chave. */
      key: 'text-brand-cyan',
      function: 'text-brand-cyan',
      operator: 'text-brand-violet',
      variable: 'text-brand-blue',
      string: 'text-primary',
      comment: 'text-subtle-foreground italic',
      plain: 'text-foreground',
    },
  },
  defaultVariants: { kind: 'plain' },
});
