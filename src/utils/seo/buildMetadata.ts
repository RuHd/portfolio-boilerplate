import type { Metadata } from 'next';

import type { SiteConfig } from '@/types/site';

/**
 * Gera a Metadata base (título, descrição, canonical, Open Graph, Twitter e robots)
 * a partir da configuração do site. `overrides` permite ajustar qualquer campo
 * sem alterar esta função.
 */
export function buildMetadata(config: SiteConfig, overrides: Metadata = {}): Metadata {
  const images = config.ogImage
    ? [{ url: config.ogImage, width: 1200, height: 630, alt: config.title }]
    : undefined;

  return {
    metadataBase: new URL(config.url),
    title: { default: config.title, template: `%s | ${config.name}` },
    description: config.description,
    applicationName: config.name,
    keywords: config.keywords,
    authors: [{ name: config.author.name, url: config.url }],
    creator: config.author.name,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      locale: config.locale.replace('-', '_'),
      url: '/',
      siteName: config.name,
      title: config.title,
      description: config.description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: images?.map((image) => image.url),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    ...overrides,
  };
}
