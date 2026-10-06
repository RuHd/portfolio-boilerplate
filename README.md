# Portfolio Boilerplate

Portfólio em **Next.js** construído sobre o design system **Luminous Engineering**: dark mode minimalista, vidro sutil e acentos luminosos em ciano → azul → violeta, com Plus Jakarta Sans para texto e JetBrains Mono para rótulos técnicos.

A arquitetura continua pensada para reaproveitamento: a identidade visual vive nos **tokens** (`src/styles/tokens.css`), o conteúdo em **`src/content`** e os dados do site em **`src/config/site.ts`**. Trocar qualquer um dos três não exige editar componentes.

## Stack

| Ferramenta | Uso |
| --- | --- |
| Next.js 16 (App Router) + TypeScript | Framework, SSG e metadata de SEO |
| Tailwind CSS 4 | Estilos via tokens semânticos |
| React Icons | Ícones, isolados atrás de um registro (`src/config/icons.ts`) |
| Jest + Testing Library + jest-axe | Testes unitários e de acessibilidade |
| ESLint + jsx-a11y | Regras de qualidade e acessibilidade |
| clsx + tailwind-merge | Composição de classes sem conflito |

## Primeiros passos

```bash
npm install
cp .env.example .env.local   # defina NEXT_PUBLIC_SITE_URL
npm run dev
```

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` / `npm start` | Build de produção e servidor |
| `npm test` / `npm run test:watch` | Testes |
| `npm run test:coverage` | Testes com relatório de cobertura |
| `npm run lint` | ESLint (inclui regras de acessibilidade) |
| `npm run typecheck` | Checagem de tipos |

## Estrutura

```
src/
├── app/                    # Rotas (App Router)
│   ├── layout.tsx          # Fontes (next/font), metadata, SkipLink, header, <main>, footer, JSON-LD
│   ├── page.tsx            # Página única da SPA: só compõe as seções
│   ├── sitemap.ts          # /sitemap.xml
│   ├── robots.ts           # /robots.txt
│   └── manifest.ts         # /manifest.webmanifest
├── styles/
│   ├── tokens.css          # Design tokens (@theme do Tailwind) — FONTE DA IDENTIDADE VISUAL
│   ├── tokens.ts           # Espelho dos tokens em TS (manifest, themeColor, tailwind-merge)
│   ├── tokens.test.ts      # Garante que CSS e TS não saiam de sincronia
│   └── globals.css         # Base: fundo, tipografia, foco visível, reduced motion
├── content/                # CONTEÚDO do portfólio (edite aqui)
│   ├── profile.ts          # Textos do hero/sobre e lista de skills
│   ├── projects.ts         # Projetos da vitrine
│   ├── education.ts        # Formação
│   ├── contact.ts          # Canais de contato
│   └── navigation.ts       # Itens do menu
├── components/
│   ├── ui/                 # Primitivos do design system (Button, Badge, Card, CodeBlock, TextField...)
│   ├── layout/             # Container, Section, Grid, SiteHeader, SiteFooter
│   ├── portfolio/          # Componentes de domínio (ProjectCard)
│   ├── sections/           # Seções da página (Hero, About, Projects, Education, Contact)
│   ├── a11y/               # SkipLink, VisuallyHidden
│   └── seo/                # JsonLd
├── config/
│   ├── site.ts             # Fonte única de verdade: nome, URL, autor, idioma...
│   ├── icons.ts            # Registro de ícones (troque a lib aqui)
│   └── a11y.ts             # Constantes de acessibilidade
├── types/
│   ├── site.ts             # Contrato do siteConfig
│   └── portfolio.ts        # Contratos de conteúdo: Profile, Project, Skill, Education...
└── utils/                  # Funções puras e testadas
    ├── cn.ts               # Combina classes Tailwind sem conflito
    ├── createVariants.ts   # Motor de variantes (base do OCP)
    ├── getLinkKind.ts      # Classifica links: interno, externo, âncora, mailto/tel
    ├── slugify.ts          # "Formação Acadêmica" → "formacao-academica"
    ├── formatDate.ts       # Datas e períodos em pt-BR
    ├── absoluteUrl.ts      # URLs absolutas para SEO
    └── seo/                # buildMetadata, JSON-LD (Person, WebSite)
```

As camadas só dependem "para baixo": `app` → `sections` → `portfolio`/`layout` → `ui` → `styles`/`utils`. O conteúdo (`content`) entra pela página e desce por props.

## Design tokens

Os tokens do `DESIGN.md` viram variáveis `@theme` do Tailwind 4 em `src/styles/tokens.css`, e cada variável vira uma utility. A paleta e a escala tipográfica padrão do Tailwind são **removidas** (`--color-*: initial`, `--text-*: initial`), então só existem classes do design system.

| Grupo | Exemplos de classe | Observação |
| --- | --- | --- |
| Marca | `bg-brand-cyan`, `text-brand-violet`, `bg-gradient-brand`, `text-gradient-brand` | Primária `#00D2FF`, secundária `#A855F7`, terciária `#3B82F6` |
| Superfícies | `bg-canvas`, `bg-card`, `bg-card-hover`, `bg-code`, `bg-field` | Níveis de elevação 0–2, terminal e inputs |
| Texto | `text-foreground`, `text-muted-foreground`, `text-subtle-foreground` | Primário, secundário e metadados |
| Linhas | `border-border`, `border-border-strong`, `border-border-field` | Bordas translúcidas brancas |
| Paleta tonal (M3) | `bg-surface-container`, `text-on-surface`, `bg-primary-container`... | Todos os tokens `colors` do YAML, com os mesmos nomes |
| Tipografia | `text-display`, `text-headline-lg`, `text-body-md`, `text-label-sm`... | Tamanho + altura de linha + peso num só token; use `font-mono` com `label-*` |
| Raios | `rounded-sm` (4px), `rounded` (8px), `rounded-md` (12px), `rounded-lg` (16px), `rounded-xl` (24px) | |
| Espaçamento | `p-space-md`, `gap-space-lg`, `px-margin`, `gap-gutter`, `py-section` | Nomes do YAML (`space-*`, `gutter`, `margin`) somados à escala numérica |
| Elevação | `shadow-glow`, `shadow-glow-cyan`, `shadow-float`, `shadow-focus`, `backdrop-blur-glass`, `surface-glass`, `surface-float` | Nível 1 (vidro), 2 (hover com brilho) e 3 (nav/modais) |
| Layout | `max-w-content` (1280px), `<Grid>` 4 → 8 → 12 colunas | Breakpoints `md` (768) e `lg` (1024) |

Regras práticas:

- **Mude valores em dois lugares:** `tokens.css` e `tokens.ts`. O teste `tokens.test.ts` falha se eles divergirem.
- **Novo token de tamanho, sombra ou espaçamento?** Adicione também ao `tokens.ts`: o `cn()` usa essas chaves para o `tailwind-merge` resolver conflitos (sem isso, `text-body-md` seria confundido com uma cor e apagaria `text-canvas`).
- **Espaçamentos usam o prefixo `space-`** (como no YAML) porque nomes como `xl` colidiriam com `max-w-xl` no Tailwind 4.
- O site é **dark-only**: `color-scheme: dark` e `themeColor` vêm de `brand.canvas`.

Cada componente segue o mesmo padrão de arquivos:

```
Button/
├── Button.tsx          # Factory (createButton) + componente padrão (Button)
├── Button.styles.ts    # Variantes visuais
├── Button.types.ts     # Contrato de props
├── Button.test.tsx     # Testes + verificação de acessibilidade
└── index.ts            # API pública
```

## Como o SOLID aparece no código

**Responsabilidade única (S).** Estilo, tipos, comportamento e teste ficam em arquivos separados. `Container` só cuida de largura; `Section` só de semântica e espaçamento vertical; `getLinkKind` só decide o tipo de um link — e o `Link` só renderiza a partir dessa decisão.

**Aberto/Fechado (O).** Os componentes não têm classes fixas: recebem um *resolvedor de estilos*. Para criar algo novo, você estende o resolvedor e gera um componente novo, sem editar o original:

```tsx
// src/components/custom/BrandButton.tsx
import { buttonStyles, createButton } from '@/components/ui/Button';
import { extendVariants } from '@/utils/createVariants';

const brandButtonStyles = extendVariants(buttonStyles, {
  variants: {
    variant: { brand: 'bg-brand-violet text-white hover:bg-brand-violet/90' },
    size: { xl: 'h-14 px-8 text-headline-sm' },
  },
  defaultVariants: { variant: 'brand' },
});

export const BrandButton = createButton(brandButtonStyles, 'BrandButton');
// <BrandButton size="xl">Fale comigo</BrandButton>  ← variant e size tipados automaticamente
```

O próprio `IconButton` é construído assim: estende os estilos do `Button` e só troca os tamanhos por versões quadradas. Para ajustes pontuais, todo componente aceita `className`, que vence em caso de conflito graças ao `tailwind-merge`.

**Substituição de Liskov (L).** `Button` aceita todos os atributos de `<button>`, `Link` todos os de `<a>`, `Heading` todos os de `<h1>`–`<h6>`. Qualquer um pode substituir o elemento nativo sem quebrar nada (`onClick`, `aria-*`, `data-*`, `ref` passam direto).

**Segregação de interface (I).** Cada componente pede apenas o que usa. `IconButton` exige `icon` e `label` e não aceita `children`, `leftIcon` ou `rightIcon`; `Icon` não conhece nada de botões.

**Inversão de dependência (D).** Os componentes dependem da abstração `IconSource`, não do react-icons. O conteúdo depende dos contratos em `src/types/portfolio.ts`, não da página. Metadata, sitemap, robots, manifest e JSON-LD dependem de `siteConfig`, não de valores escritos à mão.

## Componentes

| Componente | Resumo |
| --- | --- |
| `Button` | `primary` (gradiente da marca + brilho ciano), `secondary` (vidro), `ghost`; tamanhos `sm`/`md`/`lg`; `leftIcon`, `rightIcon`, `isLoading`. |
| `IconButton` | Quadrado 40×40 com borda (`outline`) por padrão. `label` obrigatório (vira `aria-label`). |
| `Icon` | Decorativo por padrão; com `label` vira `role="img"`. Tamanhos `xs`–`xl` e `inherit`. |
| `Link` | `next/link`, âncora ou externo (nova aba + aviso para leitor de tela). Variantes `default`, `subtle`, `nav`, `unstyled`. |
| `Heading` | `level` (semântica) separado de `size` (`display`, `headline-lg/md/sm`, responsivos); `tone="gradient"`. |
| `Text` | `size` `body-*` (Plus Jakarta) ou `label-*` (JetBrains Mono); `tone` `default`/`muted`/`subtle`/`accent`. |
| `Badge` | Pílula mono: `tech`, `metric`, `status`, `neutral`; `indicator` adiciona o ponto luminoso. |
| `Card` | Vidro nível 1; `elevation="interactive"` ativa o hover nível 2; `radius` `lg`/`xl`; `as` `article`/`li`... |
| `CodeBlock` + `CodeToken` | Janela de terminal com três indicadores; tokens `key`, `function`, `operator`, `variable`, `string`, `comment`. |
| `TextField` | Label visível, `hint` e `error` ligados por `aria-describedby`/`aria-invalid`; foco com anel ciano. |
| `Checkbox` / `Switch` | Inputs nativos estilizados (funcionam sem JS); `Switch` usa `role="switch"` e trilho com gradiente. |
| `Container` / `Grid` / `Section` | Largura 1280px e margens do sistema; grade 4 → 8 → 12; `<section>` com âncora e região nomeada. |
| `SiteHeader` / `SiteFooter` | Nav flutuante (nível 3) com menu mobile (`MobileNav`, único Client Component) e rodapé com redes. |
| `ProjectCard` | Card de vitrine: status, links, prévia (ou placeholder), stack e métrica. |
| `sections/*` | `HeroSection`, `AboutSection`, `ProjectsSection`, `EducationSection`, `ContactSection` — recebem o conteúdo por props. |
| `SkipLink` / `VisuallyHidden` / `JsonLd` | Acessibilidade e dados estruturados. |

Links com cara de botão compõem os estilos em vez de criar um componente novo:

```tsx
<Link href="#contato" variant="unstyled" className={buttonStyles({ variant: 'secondary' })}>
  Fale comigo
</Link>
```

Uso típico de uma seção nova:

```tsx
<Section id="palestras" labelledBy="palestras-titulo">
  <Container>
    <SectionHeader id="palestras-titulo" eyebrow="05. palestras" title="Palestras" />
    <Grid as="ul" columns="cards">
      <Card as="li" elevation="interactive">...</Card>
    </Grid>
  </Container>
</Section>
```

Só o `MobileNav` usa `'use client'`; todo o resto é Server Component (melhor para SEO e performance). Quando precisar de estado, isole o trecho interativo num Client Component pequeno e componha os demais dentro dele, como o `SiteHeader` faz.

## SEO — o que já está pronto

- HTML pré-renderizado (SSG): o Google recebe a página completa, mesmo sendo uma SPA.
- `<html lang>`, título com template, descrição, keywords, canonical, Open Graph, Twitter Card e diretivas de robots gerados por `buildMetadata`.
- `sitemap.xml`, `robots.txt` e `manifest.webmanifest` gerados a partir do `siteConfig`.
- JSON-LD `WebSite` e `Person` (ajuda o Google a associar o site ao seu nome).
- Fontes via `next/font`: arquivos servidos pelo próprio domínio, `display: swap` e fallback ajustado (sem layout shift).

**Antes de publicar:**

1. Preencha `src/config/site.ts` (nome, título, descrição de até ~155 caracteres, `author.profiles` com GitHub/LinkedIn, `author.image`).
2. Defina `NEXT_PUBLIC_SITE_URL` no host com o domínio final.
3. Adicione uma imagem de compartilhamento 1200×630 em `src/app/opengraph-image.png` (o Next detecta sozinho) e troque o `src/app/favicon.ico`.
4. Mantenha exatamente um `<Heading level={1}>` na página (hoje ele está no `HeroSection`).
5. Depois do deploy, cadastre o site no Google Search Console e envie o `sitemap.xml`.

## Acessibilidade — o que já está pronto

- Skip link e `<main>` focável como destino.
- Foco visível só para teclado (`:focus-visible`) e `prefers-reduced-motion` respeitado.
- Links sublinhados por padrão (não dependem só de cor) e aviso de nova aba em links externos.
- Ícones decorativos escondidos de leitores de tela; `IconButton` exige nome acessível pelo tipo.
- `Heading` separa hierarquia de aparência; `Section` vira região navegável.
- Alvos de toque com no mínimo 32px (WCAG 2.2 pede 24px).
- `jsx-a11y` completo no ESLint e `jest-axe` nos testes dos componentes.

Ao trocar as cores em `src/styles/tokens.css`, confira o contraste (mínimo 4.5:1 para texto).

## Personalização rápida

- **Conteúdo:** edite os arquivos de `src/content` (textos, projetos, formação, contatos, menu).
- **Dados do site / SEO:** `src/config/site.ts`.
- **Identidade visual:** `src/styles/tokens.css` (+ espelho em `tokens.ts`). Confira o contraste (mínimo 4.5:1 para texto).
- **Ícones:** adicione ou troque em `src/config/icons.ts`.
- **Fontes:** carregadas com `next/font/google` em `src/app/layout.tsx` (self-hosted no build, sem layout shift). Para trocar, altere o import e mantenha as variáveis `--font-plus-jakarta-sans` / `--font-jetbrains-mono` (ou ajuste `--font-sans`/`--font-mono` em `tokens.css`).
- **Imagens dos projetos:** coloque em `public/` e informe `image: { src, alt }` no projeto; sem imagem, o card mostra um placeholder com o gradiente da marca.

## Deploy

Funciona direto na Vercel (defina `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente). Para hospedagens estáticas (GitHub Pages, Netlify, Hostinger), adicione `output: 'export'` em `next.config.ts` e publique a pasta `out/`.
