import { createVariants } from '@/utils/createVariants';

/**
 * Estilo do trilho. O <input> fica visualmente oculto e é o `peer`; o trilho reage
 * ao estado dele e move o polegar (filho direto) com `peer-checked:*:translate-x-*`.
 */
export const switchStyles = createVariants({
  base: 'relative inline-flex shrink-0 items-center rounded-full border border-border-field bg-field transition-[background-color,border-color,box-shadow] duration-300 ease-out *:transition-transform *:duration-300 peer-checked:border-transparent peer-checked:bg-gradient-brand peer-checked:shadow-glow-cyan peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring peer-disabled:opacity-50',
  variants: {
    size: {
      sm: 'h-5 w-9 *:size-3.5 peer-checked:*:translate-x-4',
      md: 'h-6 w-11 *:size-[18px] peer-checked:*:translate-x-5',
    },
  },
  defaultVariants: { size: 'md' },
});
