import { createVariants, extendVariants, splitVariantProps } from './createVariants';

const styles = createVariants({
  base: 'base',
  variants: {
    variant: { primary: 'bg-primary', ghost: 'bg-transparent' },
    size: { sm: 'h-8', md: 'h-10' },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

describe('createVariants', () => {
  it('aplica base e variantes padrão', () => {
    expect(styles()).toBe('base bg-primary h-10');
  });

  it('aplica a variante escolhida e a className extra', () => {
    expect(styles({ variant: 'ghost', size: 'sm', className: 'mt-2' })).toBe(
      'base bg-transparent h-8 mt-2',
    );
  });

  it('expõe as chaves de variante', () => {
    expect(styles.variantKeys).toEqual(['variant', 'size']);
  });
});

describe('extendVariants', () => {
  const extended = extendVariants(styles, {
    variants: { variant: { brand: 'bg-purple-600' }, tone: { loud: 'font-bold' } },
    defaultVariants: { variant: 'brand' },
  });

  it('adiciona novas opções sem perder as antigas', () => {
    expect(extended({ variant: 'ghost' })).toContain('bg-transparent');
    expect(extended()).toContain('bg-purple-600');
    expect(extended({ tone: 'loud' })).toContain('font-bold');
  });

  it('não altera o resolvedor original', () => {
    expect(styles.config.variants.variant).not.toHaveProperty('brand');
  });
});

describe('splitVariantProps', () => {
  it('separa props de variante do restante', () => {
    const [variants, rest] = splitVariantProps(
      { variant: 'ghost', onClick: jest.fn(), id: 'x' },
      styles.variantKeys,
    );
    expect(variants).toEqual({ variant: 'ghost' });
    expect(Object.keys(rest)).toEqual(['onClick', 'id']);
  });
});
