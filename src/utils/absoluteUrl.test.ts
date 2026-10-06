import { absoluteUrl } from './absoluteUrl';

describe('absoluteUrl', () => {
  it('junta base e caminho sem duplicar barras', () => {
    expect(absoluteUrl('/sitemap.xml', 'https://meusite.com')).toBe(
      'https://meusite.com/sitemap.xml',
    );
    expect(absoluteUrl('foto.jpg', 'https://meusite.com/')).toBe('https://meusite.com/foto.jpg');
  });
});
