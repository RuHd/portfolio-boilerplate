import { createVariants } from '@/utils/createVariants';

/** Estilo do campo em si. Exportado à parte para ser reutilizado (ex.: <textarea>, <select>). */
export const fieldStyles = createVariants({
  base: 'w-full rounded-md border border-border-field bg-field px-space-md text-foreground transition-[border-color,box-shadow] duration-200 placeholder:text-subtle-foreground hover:border-border-strong focus-visible:border-brand-cyan focus-visible:shadow-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:focus-visible:shadow-[0_0_0_3px_rgb(255_180_171/0.15)]',
  variants: {
    size: {
      sm: 'h-9 text-body-sm',
      md: 'h-11 text-body-md',
    },
  },
  defaultVariants: { size: 'md' },
});
