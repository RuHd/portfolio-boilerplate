import type { Metadata } from 'next';

import './globals.css';

// SEO: o Next transforma isso nas tags <title> e <meta> que o Google lê.
// Troque pelos seus dados antes de publicar.
export const metadata: Metadata = {
  title: 'Seu Nome — Desenvolvedor Front-End',
  description: 'Uma frase sobre quem você é e o que você faz.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="pt-BR": diz ao Google e aos leitores de tela o idioma da página.
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
