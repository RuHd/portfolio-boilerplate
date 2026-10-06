import { extendVariants } from '@/utils/createVariants';

import { buttonStyles } from '../Button/Button.styles';

/**
 * Reaproveita todas as variantes visuais do Button, adiciona a variante `outline`
 * (botão de ícone do design system) e troca os tamanhos por versões quadradas —
 * exemplo real de extensão sem modificação.
 */
export const iconButtonStyles = extendVariants(buttonStyles, {
  variants: {
    variant: {
      outline:
        'border border-border bg-transparent text-muted-foreground hover:border-brand-cyan/30 hover:bg-card-hover hover:text-foreground',
    },
    size: {
      sm: 'size-8 p-0 [&_svg]:size-4',
      md: 'size-10 p-0 [&_svg]:size-5',
      lg: 'size-12 p-0 [&_svg]:size-6',
    },
  },
  defaultVariants: { variant: 'outline' },
});
