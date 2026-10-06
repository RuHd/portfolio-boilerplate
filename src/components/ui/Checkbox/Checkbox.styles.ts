import { createVariants } from '@/utils/createVariants';

/** Estilo da caixa (o próprio <input>, com appearance-none, para manter semântica e foco nativos). */
export const checkboxStyles = createVariants({
  base: 'peer shrink-0 cursor-pointer appearance-none rounded-sm border border-border-field bg-field transition-[border-color,background-color,box-shadow] duration-200 checked:border-brand-cyan checked:bg-brand-cyan/10 hover:border-border-strong focus-visible:shadow-focus disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
    },
  },
  defaultVariants: { size: 'md' },
});
