import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

/** Gera /manifest.webmanifest (nome, cores e ícones ao "instalar" o site no celular). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    lang: siteConfig.locale,
    start_url: '/',
    display: 'standalone',
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
