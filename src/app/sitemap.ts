import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/utils/absoluteUrl';

/**
 * Gera /sitemap.xml. Numa SPA há uma única URL indexável;
 * âncoras (#projetos) não entram no sitemap.
 * Se no futuro houver páginas próprias (ex.: /projetos/[slug]), adicione-as aqui.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/', siteConfig.url),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
