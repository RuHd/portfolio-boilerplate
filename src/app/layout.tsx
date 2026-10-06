import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

import { SkipLink } from '@/components/a11y/SkipLink';
import { SiteFooter, SiteHeader } from '@/components/layout';
import { JsonLd } from '@/components/seo/JsonLd';
import { MAIN_CONTENT_ID } from '@/config/a11y';
import { siteConfig } from '@/config/site';
import { contactChannels, navigation } from '@/content';
import { buildMetadata } from '@/utils/seo/buildMetadata';
import { buildPersonJsonLd, buildWebsiteJsonLd } from '@/utils/seo/jsonLd';

import '@/styles/globals.css';

/* As variáveis abaixo alimentam --font-sans e --font-mono em src/styles/tokens.css. */
const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata(siteConfig);

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={siteConfig.locale} className={`${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SkipLink />
        <SiteHeader
          brand={siteConfig.name}
          items={navigation}
          cta={{ label: 'Fale comigo', href: '#contato' }}
        />
        <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter
          ownerName={siteConfig.author.name}
          channels={contactChannels}
          year={new Date().getFullYear()}
        />
        <JsonLd data={[buildWebsiteJsonLd(siteConfig), buildPersonJsonLd(siteConfig)]} />
      </body>
    </html>
  );
}
