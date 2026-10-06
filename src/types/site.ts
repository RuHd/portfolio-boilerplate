export interface SiteAuthor {
  name: string;
  jobTitle?: string;
  email?: string;
  /** Perfis públicos (GitHub, LinkedIn...). Viram `sameAs` no JSON-LD. */
  profiles?: string[];
  /** Caminho de uma foto em /public, usada no JSON-LD. */
  image?: string;
  knowsAbout?: string[];
}

export interface SiteConfig {
  /** Nome curto do site, usado no template de título ("Página | Nome"). */
  name: string;
  /** Título padrão da página inicial. */
  title: string;
  description: string;
  /** URL pública, sem barra final. Vem de NEXT_PUBLIC_SITE_URL. */
  url: string;
  /** Idioma no formato BCP 47 (ex.: pt-BR). Define <html lang>. */
  locale: string;
  keywords: string[];
  author: SiteAuthor;
  /** Imagem de compartilhamento (1200x630). Opcional se usar src/app/opengraph-image.png. */
  ogImage?: string;
  /** Cor da barra do navegador e do manifest. O site é dark-only. */
  themeColor: string;
}
