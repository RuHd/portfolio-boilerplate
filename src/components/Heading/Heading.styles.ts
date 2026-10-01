// Estilos do Heading, separados do componente.
// Para criar uma nova opção, adicione uma linha aqui — o componente não muda.

export const sizes = {
  xs: 'text-base',
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
  '2xl': 'text-4xl md:text-5xl',
};

export const weights = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const aligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = keyof typeof sizes;
export type HeadingWeight = keyof typeof weights;
export type HeadingAlign = keyof typeof aligns;

// Tamanho padrão de cada nível, usado quando nenhum `size` é passado.
export const defaultSizeByLevel: Record<HeadingLevel, HeadingSize> = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
};
