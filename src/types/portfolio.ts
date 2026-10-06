/**
 * Contratos de dados do portfólio. Mantêm o CONTEÚDO separado da APRESENTAÇÃO:
 * os componentes recebem esses objetos por props, e o conteúdo vive em src/content.
 */

import type { IconName } from '@/config/icons';

export interface NavItem {
  label: string;
  /** Âncora da SPA (ex.: "#projetos") ou rota. */
  href: string;
}

export interface ContactChannel {
  /** Nome acessível do canal, ex.: "GitHub", "E-mail". */
  label: string;
  href: string;
  /** Chave do registro de ícones em src/config/icons.ts. */
  icon?: IconName;
  /** Texto exibido (ex.: "@usuario", "voce@email.com"). */
  handle?: string;
}

export interface Profile {
  /** Linha curta acima do título, em fonte mono (ex.: "Olá, eu sou"). */
  eyebrow: string;
  /** Título principal (vira o único <h1> da página). */
  headline: string;
  /** Trecho do título destacado com o gradiente da marca. */
  highlight?: string;
  summary: string;
  /** Status de disponibilidade exibido como badge (ex.: "Disponível para projetos"). */
  availability?: string;
  /** Parágrafos da seção "Sobre". */
  about: string[];
}

export interface Skill {
  name: string;
  /** Competência principal: ganha o indicador luminoso. */
  core?: boolean;
}

export interface Education {
  institution: string;
  course: string;
  /** "AAAA-MM" */
  start: string;
  /** "AAAA-MM" ou ausente se em andamento. */
  end?: string;
  description?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon?: IconName;
}

export interface Project {
  /** Identificador único; também pode virar id de âncora. */
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  links?: ProjectLink[];
  image?: { src: string; alt: string };
  /** "AAAA-MM" */
  date?: string;
  /** Status exibido no cabeçalho do card (ex.: "Live", "Beta"). */
  status?: string;
  /** Métrica de impacto destacada no rodapé (ex.: "+140% perf"). */
  metric?: string;
}
