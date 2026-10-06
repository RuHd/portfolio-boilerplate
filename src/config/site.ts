import { brand } from '@/styles/tokens';
import type { SiteConfig } from '@/types/site';

/**
 * Fonte única de verdade dos dados do site.
 * Metadata, sitemap, robots, manifest e JSON-LD leem daqui —
 * trocar de projeto significa editar apenas este arquivo (e o conteúdo em src/content).
 */
export const siteConfig: SiteConfig = {
  name: 'Seu Nome',
  title: 'Seu Nome — Desenvolvedor Front-End',
  description: 'Descrição curta (até ~155 caracteres) do que você faz e para quem.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, ''),
  locale: 'pt-BR',
  keywords: ['desenvolvedor front-end', 'portfólio'],
  author: {
    name: 'Seu Nome',
    jobTitle: 'Desenvolvedor Front-End',
    profiles: [],
    knowsAbout: [],
  },
  themeColor: brand.canvas,
};
