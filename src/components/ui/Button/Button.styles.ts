import { createVariants } from '@/utils/createVariants';

export const buttonStyles = createVariants({
  base: 'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-sans font-semibold whitespace-nowrap transition-[background-color,border-color,box-shadow,transform,color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      /** Gradiente espectral da marca com brilho ciano no hover. */
      primary:
        'bg-gradient-brand text-canvas hover:-translate-y-px hover:shadow-glow-cyan active:translate-y-0',
      /** Vidro translúcido; no hover ganha borda ciano e brilho violeta. */
      secondary:
        'border border-border-strong bg-white/[0.03] text-foreground hover:border-brand-cyan/40 hover:bg-white/[0.06] hover:shadow-glow-violet',
      /** Só texto, para ações terciárias. */
      ghost: 'bg-transparent text-muted-foreground hover:bg-white/[0.04] hover:text-foreground',
    },
    size: {
      sm: 'h-9 px-4 text-body-sm',
      md: 'h-11 px-5 text-body-md',
      lg: 'h-13 px-7 text-body-lg',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});
