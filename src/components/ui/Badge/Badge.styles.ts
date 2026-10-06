import { createVariants } from '@/utils/createVariants';

export const badgeStyles = createVariants({
  base: 'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-label-md whitespace-nowrap',
  variants: {
    tone: {
      /** Stack técnica (padrão do design system). */
      tech: 'border-brand-cyan/20 bg-brand-blue/[0.08] text-brand-sky',
      /** Métrica de impacto, ex.: "+140% perf". */
      metric: 'border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan',
      /** Status do projeto, ex.: "Live", "Beta". */
      status: 'border-brand-violet/30 bg-brand-violet/10 text-secondary',
      neutral: 'border-border-strong bg-white/[0.03] text-muted-foreground',
    },
  },
  defaultVariants: { tone: 'tech' },
});
