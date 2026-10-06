import { getLinkKind, isExternalUrl } from './getLinkKind';

describe('getLinkKind', () => {
  it.each([
    ['#projetos', 'hash'],
    ['mailto:eu@email.com', 'protocol'],
    ['tel:+5511999999999', 'protocol'],
    ['https://github.com/usuario', 'external'],
    ['//cdn.exemplo.com/arquivo', 'external'],
    ['/curriculo.pdf', 'internal'],
  ] as const)('%s → %s', (href, expected) => {
    expect(getLinkKind(href)).toBe(expected);
  });

  it('trata URL absoluta do próprio site como interna', () => {
    expect(getLinkKind('https://meusite.com/sobre', 'https://meusite.com')).toBe('internal');
    expect(isExternalUrl('https://outro.com', 'https://meusite.com')).toBe(true);
  });
});
