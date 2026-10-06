import { createVariants } from '@/utils/createVariants';

/** Cada tamanho usa o token mobile e sobe para o token desktop a partir de `md`. */
export const headingStyles = createVariants({
  base: 'font-sans tracking-tight text-balance',
  variants: {
    size: {
      display: 'text-display-mobile md:text-display',
      'headline-lg': 'text-headline-lg-mobile md:text-headline-lg',
      'headline-md': 'text-headline-md',
      'headline-sm': 'text-headline-sm',
    },
    tone: {
      default: 'text-foreground',
      /** Gradiente ciano → violeta. Use com moderação: um destaque por seção. */
      gradient: 'text-gradient-brand',
    },
  },
  defaultVariants: { size: 'headline-md', tone: 'default' },
});
