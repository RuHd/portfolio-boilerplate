import type { Project } from '@/types/portfolio';

/** Projetos exibidos na vitrine. Substitua pelos seus (adicione `image` para mostrar a prévia). */
export const projects: Project[] = [
  {
    slug: 'painel-analytics',
    title: 'Painel de Analytics',
    description:
      'Dashboard em tempo real com gráficos interativos, filtros compartilháveis por URL e carregamento progressivo.',
    technologies: ['Next.js', 'TypeScript', 'TanStack Query'],
    status: 'Live',
    metric: '+140% perf',
    date: '2025-08',
    links: [
      { label: 'Código', href: 'https://github.com/', icon: 'github' },
      { label: 'Demo', href: 'https://example.com/', icon: 'arrowUpRight' },
    ],
  },
  {
    slug: 'design-system',
    title: 'Design System',
    description:
      'Biblioteca de componentes com tokens, documentação viva e testes de acessibilidade automatizados.',
    technologies: ['React', 'Tailwind CSS', 'Storybook'],
    status: 'Open source',
    metric: '40+ componentes',
    date: '2025-03',
    links: [{ label: 'Código', href: 'https://github.com/', icon: 'github' }],
  },
  {
    slug: 'app-financas',
    title: 'App de Finanças',
    description:
      'Aplicação de controle financeiro offline-first com sincronização em segundo plano e relatórios mensais.',
    technologies: ['React', 'Zustand', 'IndexedDB'],
    status: 'Beta',
    metric: '98 Lighthouse',
    date: '2024-11',
    links: [{ label: 'Demo', href: 'https://example.com/', icon: 'arrowUpRight' }],
  },
];
