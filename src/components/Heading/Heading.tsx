import type { HTMLAttributes } from 'react';

import {
  aligns,
  defaultSizeByLevel,
  sizes,
  weights,
  type HeadingAlign,
  type HeadingLevel,
  type HeadingSize,
  type HeadingWeight,
} from './Heading.styles';

// Aceita todas as props de um <h1>...<h6> comum (id, className...) + as opções visuais.
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  // Nível semântico (o que o leitor de tela e o SEO enxergam).
  as?: HeadingLevel;
  // Tamanho visual. É independente do nível: um h2 pode parecer um h1.
  size?: HeadingSize;
  weight?: HeadingWeight;
  align?: HeadingAlign;
};

export function Heading({
  as: Tag = 'h2',
  size,
  weight = 'bold',
  align,
  className = '',
  ...props
}: HeadingProps) {
  const classes = [
    'tracking-tight text-foreground',
    sizes[size ?? defaultSizeByLevel[Tag]],
    weights[weight],
    align && aligns[align],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes} {...props} />;
}
