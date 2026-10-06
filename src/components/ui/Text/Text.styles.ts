import { createVariants } from '@/utils/createVariants';

export const textStyles = createVariants({
  base: 'text-pretty',
  variants: {
    size: {
      'body-lg': 'font-sans text-body-lg',
      'body-md': 'font-sans text-body-md',
      'body-sm': 'font-sans text-body-sm',
      /** Labels usam JetBrains Mono: nomes técnicos, métricas, metadados. */
      'label-lg': 'font-mono text-label-lg',
      'label-md': 'font-mono text-label-md',
      'label-sm': 'font-mono text-label-sm',
    },
    tone: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      subtle: 'text-subtle-foreground',
      accent: 'text-brand-cyan',
    },
  },
  defaultVariants: { size: 'body-md', tone: 'default' },
});
