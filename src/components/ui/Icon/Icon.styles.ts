import { createVariants } from '@/utils/createVariants';

export const iconStyles = createVariants({
  base: 'inline-block shrink-0',
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8',
      /** Acompanha o tamanho da fonte do texto ao redor. */
      inherit: 'size-[1em]',
    },
  },
  defaultVariants: { size: 'md' },
});
