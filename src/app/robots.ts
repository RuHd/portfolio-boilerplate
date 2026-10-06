import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/utils/absoluteUrl';

/** Gera /robots.txt apontando para o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml', siteConfig.url),
    host: siteConfig.url,
  };
}
