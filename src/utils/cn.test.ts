import { cn } from './cn';

describe('cn', () => {
  it('combina classes e ignora valores falsos', () => {
    expect(cn('a', false && 'b', undefined, 'c')).toBe('a c');
  });

  it('resolve conflitos do Tailwind mantendo a última classe', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('distingue tokens de tamanho de texto dos tokens de cor', () => {
    expect(cn('text-canvas text-body-md')).toBe('text-canvas text-body-md');
    expect(cn('text-body-md', 'text-body-lg')).toBe('text-body-lg');
  });

  it('reconhece tokens de espaçamento e sombra', () => {
    expect(cn('py-section', 'py-8')).toBe('py-8');
    expect(cn('shadow-glow text-brand-cyan', 'shadow-float')).toBe('text-brand-cyan shadow-float');
  });
});
