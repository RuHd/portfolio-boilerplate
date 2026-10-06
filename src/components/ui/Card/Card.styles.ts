import { createVariants } from '@/utils/createVariants';

export const cardStyles = createVariants({
  /** Nível 1: vidro escuro + borda translúcida. */
  base: 'relative border border-border bg-card/80 backdrop-blur-glass',
  variants: {
    elevation: {
      static: '',
      /** Nível 2 no hover: fundo elevado, borda ciano e brilho ambiente. */
      interactive:
        'transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-brand-cyan/30 hover:bg-card-hover hover:shadow-glow focus-within:border-brand-cyan/30',
    },
    radius: {
      lg: 'rounded-lg',
      /** Cards de destaque (showcase de projetos). */
      xl: 'rounded-xl backdrop-blur-card',
    },
    padding: {
      none: '',
      md: 'p-space-md',
      lg: 'p-space-md md:p-space-lg',
    },
  },
  defaultVariants: { elevation: 'static', radius: 'lg', padding: 'lg' },
});
