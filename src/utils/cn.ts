import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import { blurs, shadows, spacing, typography } from '@/styles/tokens';

/**
 * O tailwind-merge precisa conhecer os tokens customizados. Sem isso,
 * `text-body-md` (tamanho) seria confundido com uma cor e removeria `text-canvas`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: Object.keys(typography),
      spacing: Object.keys(spacing),
      shadow: Object.keys(shadows),
      blur: Object.keys(blurs),
    },
  },
});

/**
 * Combina classes condicionais (clsx) e resolve conflitos do Tailwind (tailwind-merge).
 * A última classe conflitante vence: cn('px-2', 'px-4') === 'px-4'.
 * É isso que permite sobrescrever estilos via `className` sem editar o componente.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
