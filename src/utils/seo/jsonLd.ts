import type { SiteConfig } from '@/types/site';

import { absoluteUrl } from '../absoluteUrl';

export type JsonLdObject = Record<string, unknown>;

/**
 * Serializa JSON-LD com segurança para ser injetado em <script>.
 * Escapa "<" para impedir que um valor feche a tag </script> (XSS).
 */
export function serializeJsonLd(data: JsonLdObject | JsonLdObject[]): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** Schema.org Person: ajuda o Google a associar o site a você (Knowledge Graph). */
export function buildPersonJsonLd(config: SiteConfig): JsonLdObject {
  const { author } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: config.url,
    ...(author.jobTitle && { jobTitle: author.jobTitle }),
    ...(author.email && { email: `mailto:${author.email}` }),
    ...(author.image && { image: absoluteUrl(author.image, config.url) }),
    ...(author.profiles?.length && { sameAs: author.profiles }),
    ...(author.knowsAbout?.length && { knowsAbout: author.knowsAbout }),
  };
}

/** Schema.org WebSite: identifica o site, o idioma e o autor. */
export function buildWebsiteJsonLd(config: SiteConfig): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
    inLanguage: config.locale,
    author: { '@type': 'Person', name: config.author.name },
  };
}
