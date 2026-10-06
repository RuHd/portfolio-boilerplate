import { createVariants } from '@/utils/createVariants';

export const linkStyles = createVariants({
  base: 'inline-flex items-center gap-1 rounded-sm transition-colors duration-200',
  variants: {
    variant: {
      /** Sublinhado por padrão: links não devem depender só de cor (WCAG 1.4.1). */
      default:
        'text-foreground underline decoration-brand-cyan/50 underline-offset-4 hover:text-brand-cyan hover:decoration-brand-cyan',
      subtle: 'text-muted-foreground underline-offset-4 hover:text-foreground hover:underline',
      /** Itens de navegação: monoespaçado, sem sublinhado (o contexto já indica link). */
      nav: 'font-mono text-label-lg text-muted-foreground hover:text-brand-cyan',
      unstyled: '',
    },
  },
  defaultVariants: { variant: 'default' },
});
