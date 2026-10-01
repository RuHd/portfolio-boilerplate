# Landing Page Boilerplate

Esqueleto em Next.js para uma landing page de portfólio. Nada foi desenvolvido: só a estrutura para você construir em cima.

## Rodando

```bash
npm install
npm run dev     # abre em http://localhost:3000
npm test        # roda os testes
npm run lint    # procura problemas no código
```

## Pastas

```
src/
├── app/
│   ├── layout.tsx     # Estrutura que envolve todas as páginas + SEO (metadata)
│   ├── page.tsx       # A landing page (vazia)
│   └── globals.css    # Tailwind + cores do site
├── components/
│   ├── Button/        # Button.tsx, Button.test.tsx, index.ts
│   └── IconButton/
└── utils/             # Vazia. Funções auxiliares que você criar vão aqui.
```

Cada componente fica em sua própria pasta, com o teste ao lado. O `index.ts` permite importar assim: `import { Button } from '@/components/Button'`.

## Guia rápido das ferramentas

**Tailwind.** Você estiliza com classes direto no JSX, sem arquivo CSS separado: `className="p-4 text-lg"`. As cores do projeto ficam em `globals.css` e viram classes como `bg-primary`. Referência: https://tailwindcss.com/docs

**Jest.** Arquivos `*.test.tsx` são testes. Cada `it(...)` descreve um comportamento esperado; `render` desenha o componente, `screen` procura elementos nele e `expect` confere o resultado. Leia os dois testes existentes: eles são o modelo para os próximos.

**SEO.** O `metadata` em `layout.tsx` gera o título e a descrição que aparecem no Google. Antes de publicar, preencha com seus dados.

**Acessibilidade.** Três regras que já aparecem no código: use `lang="pt-BR"` no `<html>`; botões só com ícone precisam de `label` (é o que o leitor de tela fala); ícones decorativos levam `aria-hidden`.

## Próximos passos sugeridos

- [ ] Montar as seções em `page.tsx` (sobre, formação, projetos, contato)
- [ ] Usar um único `<h1>` na página e `<h2>` para o título de cada seção
- [ ] Dar um `id` a cada seção para navegar por âncoras (`href="#projetos"`)
- [ ] Trocar o `favicon.ico` em `src/app/`
- [ ] Preencher o `metadata` do `layout.tsx`
