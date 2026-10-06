import type { SiteConfig } from '@/types/site';

import { buildMetadata } from './buildMetadata';
import { buildPersonJsonLd, buildWebsiteJsonLd, serializeJsonLd } from './jsonLd';

const config: SiteConfig = {
  name: 'Ana',
  title: 'Ana — Dev',
  description: 'Portfólio',
  url: 'https://ana.dev',
  locale: 'pt-BR',
  keywords: ['front-end'],
  author: {
    name: 'Ana',
    jobTitle: 'Dev',
    email: 'ana@ana.dev',
    profiles: ['https://github.com/ana'],
    image: '/ana.jpg',
  },
  themeColor: '#000',
};

describe('buildMetadata', () => {
  it('gera título com template, canonical e Open Graph', () => {
    const metadata = buildMetadata(config);
    expect(metadata.title).toEqual({ default: 'Ana — Dev', template: '%s | Ana' });
    expect(metadata.alternates?.canonical).toBe('/');
    expect(metadata.metadataBase?.toString()).toBe('https://ana.dev/');
    expect(metadata.openGraph).toMatchObject({ locale: 'pt_BR', siteName: 'Ana' });
  });

  it('permite sobrescrever campos', () => {
    expect(buildMetadata(config, { description: 'Outra' }).description).toBe('Outra');
  });
});

describe('JSON-LD', () => {
  it('monta Person com perfis, e-mail e imagem absoluta', () => {
    expect(buildPersonJsonLd(config)).toMatchObject({
      '@type': 'Person',
      email: 'mailto:ana@ana.dev',
      sameAs: ['https://github.com/ana'],
      image: 'https://ana.dev/ana.jpg',
    });
  });

  it('omite campos vazios do Person', () => {
    const minimal = buildPersonJsonLd({ ...config, author: { name: 'Ana' } });
    expect(minimal).not.toHaveProperty('sameAs');
    expect(minimal).not.toHaveProperty('email');
  });

  it('monta WebSite com idioma', () => {
    expect(buildWebsiteJsonLd(config)).toMatchObject({ '@type': 'WebSite', inLanguage: 'pt-BR' });
  });

  it('escapa "<" para evitar fechar a tag <script>', () => {
    expect(serializeJsonLd({ name: '</script><script>alert(1)' })).not.toContain('</script>');
  });
});
