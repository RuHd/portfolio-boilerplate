import type { NavItem } from '@/types/portfolio';

/** Itens do menu principal. Cada href aponta para o `id` de uma <Section>. */
export const navigation: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
];
